import { NextRequest, NextResponse } from "next/server";
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

const checkIfUserExists = (email: string) => {
  const users = getUsers();
  return users.find((user: any) => user.email === email);
};

const saveUser = (user: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const users = getUsers();
  users.push(user);
  writeFileSync(filePath, JSON.stringify(users, null, 2), "utf8");
};

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, password, repeatPassword } =
    await req.json();

  if (checkIfUserExists(email)) {
    return NextResponse.json({ status: 409, message: "Email already exists" });
  }

  if (password !== repeatPassword) {
    return NextResponse.json({
      status: 400,
      message: "Passwords do not match",
    });
  }

  const newUser = { firstName, lastName, email, password };

  saveUser(newUser);

  return NextResponse.json(
    { status: 200, message: "User registered successfully" },
    { status: 200 }
  );
}
