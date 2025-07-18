import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    const validEmail = "ali@gmail.com"
    const validPassword = "12345678"

    if (email === validEmail && password === validPassword) {
      return NextResponse.json({ message: "Login successful" , status: 200 })
    } else {
      return NextResponse.json({ message: "Invalid credentials" , status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" , status: 500 })
  }
}
