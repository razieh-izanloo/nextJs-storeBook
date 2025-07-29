import { NextResponse } from "next/server";

const mockData = [
   {
    id: "1234",
    title:
      "اثرمرکب: بدون شک رسیدن به موفقیت خواسته‌ی همه‌ی ماست. هیچ‌کس از شکست خوشحال نمی‌شود.",
    autor: "دارن هاردی",
    desc: "دفتر نشر تهران",
    srcImg: "https://img.ketabrah.ir/img/s/6191845768207186.jpg",
    price: "195000",
    info:{      
        nameBook: "اثرمرکب",
        author: "دارن هاردی",
        translators: "اکبر عباسی و شاهین بیات",
        publisher: "انتشارات نگاه نوین",
        category: "توسعه فردی",
        numberOfPages: "240",
        publicationDate: "۱۳۹۶/۰۶/۲۶",      
    }
  },
  {
  id: "1235",
  title:
    "دوباره فکر کن: قدرت دانستن آنچه نمی‌دانیم. این کتاب به شما کمک می‌کند ذهنی باز و آماده برای یادگیری دوباره داشته باشید.",
  autor: "آدام گرانت",
  desc: "نشر نوین توسعه",
  srcImg: "https://www.iranketab.ir/Images/ProductImages/Thumbs/099a713680a743f2a337485f075969c9.jpg",
  price: "210000",
  info: {
    nameBook: "دوباره فکر کن",
    author: "آدام گرانت",
    translators: "عادل فردوسی‌پور، بهناز آقاجانی، علی شهروز",
    publisher: "نشر نوین",
    category: "روانشناسی و موفقیت",
    numberOfPages: "296",
    publicationDate: "۱۴۰۰/۰۳/۱۰"
  }
}
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  const filtered = mockData.filter((item) =>
    item.info.nameBook.includes(query)
  );

  await new Promise((res) => setTimeout(res, 400));

  return NextResponse.json(filtered);
}
