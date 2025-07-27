import { NextRequest, NextResponse } from 'next/server';
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_super_secret_key";

export async function POST(req: NextRequest) {

  try {
    const { email, password } = await req.json();

    const validEmail = "ali@gmail.com";
    const validPassword = "12345678";

    if (email === validEmail && password === validPassword) {
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
