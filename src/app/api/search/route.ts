import { NextResponse } from "next/server";

const mockData = [
  "کتاب راهنما ورزش",
  "کتاب تغذیه ورزشی",
  "راهنمای تمرین قدرتی",
  "برنامه بدنسازی",
  "کتاب استقامت ورزشی",
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  const filtered = mockData.filter((item) =>
    item.includes(query)
  );

  await new Promise((res) => setTimeout(res, 400));

  return NextResponse.json(filtered);
}
