import { NextRequest, NextResponse } from 'next/server';


const data =[
{name: "language"},
{name: "palette"},
{name: "stethoscope"},
{name: "psychology"},
{name: "literature"},
{name: "exercise"},
{name: "engineering"},
{name: "childrenAndTeenagers"},
{name: "family"},
{name: "history"},
];

export async function GET() {
  try {
      const response = NextResponse.json({ data: data, status: 200 });
      return response;
    
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" , status: 500 });
  }
}
