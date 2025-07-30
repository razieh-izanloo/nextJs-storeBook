import { NextRequest, NextResponse } from 'next/server';
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_super_secret_key";

import path from "path";
import { readFileSync, writeFileSync, existsSync } from "fs";

const filePath = path.join(process.cwd(), "data", "users.json");

const getUsers = (): any[] => {
  if (!existsSync(filePath)) {
    writeFileSync(filePath, JSON.stringify([]));
  }

  const bufferData = readFileSync(filePath);
  return JSON.parse(bufferData.toString("utf8"));
};

const validation = (email: string, password: string) => {
  const users = getUsers();
  return users.find((user: any) => user.email === email && user.password === password);
};


export async function POST(req: NextRequest) {

  try {
    const { email, password } = await req.json();

    if (validation(email, password)) {
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

      const response = NextResponse.json({ message: "Login successful", status: 200 });

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60,
      });

      return response;
    } else {
      return NextResponse.json({ message: "Invalid credentials" , status: 401 });
    }
  } catch {
    return NextResponse.json({ message: "Internal Server Error" , status: 500 });
  }
}
