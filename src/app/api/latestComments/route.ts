import { NextResponse } from "next/server";

const data = [
  {
    fullname: "نرگس فتاحی اردکانی",
    date: "۵ مرداد ۱۴۰۴",
    comment: "این کتاب فوق‌العاده‌اس همه باید بخونن ✅",
    bookTitle: "ایکیگای: راز ژاپنی‌ها برای زندگی شاد و طولانی",
    bookImage: "https://pic.ketab.ir/DataBase/BookImages/01/14010310325.jpg",
    stars: 5,
  },
  {
    fullname: "حسین نوروزی",
    date: "۵ مرداد ۱۴۰۴",
    comment: "سلام بنده کتاب شرح حال زیاد مطالعه کردم ابتدا فکر نمی‌کردم آنقدر دلچسب باشه ولی وقتی شروع کردم به خواندن واقعا لذت بردم آدم رو با خودش می‌بره به یه داستان واقعی ....نگارش بسیار خوبی داره ",
    bookTitle: "کهکشان نیستی: داستانی بر اساس زندگی آیت الله سیدعلی قاضی طباطبایی (ره)",
    bookImage: "https://pic.ketab.ir/DataBase/BookImages/01/14010615327.jpg",
    stars: 4,
  },
  {
    fullname: "فاطمه دانشمند",
    date: "۵ مرداد ۱۴۰۴",
    comment: "یک کتاب عمومی مناسب همه افراد راهگشا و ساده",
    bookTitle: "ترجمه الغارات: سال های روایت نشده از حکومت امیرالمومنین (ع)",
    bookImage: "https://pic.ketab.ir/DataBase/BookImages/02/14020122141.jpg",
    stars: 5,
  },
];

export async function GET() {
  try {
    const response = NextResponse.json({ data: data, status: 200 });
    return response;
  } catch {
    return NextResponse.json({ message: "Internal Server Error", status: 500 });
  }
}
