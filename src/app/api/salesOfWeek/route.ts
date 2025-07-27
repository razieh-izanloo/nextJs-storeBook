import { NextResponse } from "next/server";

const data = [
  {
    title:
      "ماه من: هشتاد پرده از فضایل و ویژگی‌های امیرالمومنین علیه‌السلام: قبله کعبه‌زاده",
    desc: " حامد رحمت‌کاشانی, سعید فلاحی ",
    srcImg: "https://pic.ketab.ir/DataBase/BookImages/03/14031226430.jpg",
    id: "1264"
  },
  {
    title: "من کیستم؟: درسنامه انسان‌شناسی برای همه",
    desc: "خدیجه شریفی, محمد شجاعی, فاطمه چگینی",
    srcImg: "https://pic.ketab.ir/DataBase/BookImages/04/14040214448.jpg",
    id: "6423"
  },
  {
    title:
      "تاریخ تحولات سیاسی ایران: بررسی مولفه های دین، تجدد و مدنیت در تاسیس دولت - ملت در گستره هویت ملی ایران",
    desc: " موسی نجفی, موسی فقیه‌حقانی ",
    srcImg: "https://pic.ketab.ir/DataBase/BookImages/00/14001212745.jpg",
    id: "9086"
  },
  {
    title: "کنار آمدن با دیگران",
    desc: " نائومی درو ",
    srcImg: "https://pic.ketab.ir/DataBase/BookImages/99/99b08098.jpg",
    id: "2456"
  },
  {
    title: "نازنین یک داستان خیالی",
    desc: " فئودورمیخائیلوویچ داستایوسکی, یلدا بیدختی‌نژاد ",
    srcImg: "https://pic.ketab.ir/DataBase/BookImages/01/14010522413.jpg",
    id: "7534"
  },
  {
    title: "نماز باحال: یه سفر پرماجرا به دنیای نماز",
    desc: " کاظم روح‌بخش, مهدیه‌سادات حسینی ",
    srcImg: "https://pic.ketab.ir/DataBase/BookImages/03/14031129499.jpg",
    id: "6362"
  },
  {
    title: "پدر، عشق و پسر",
    desc: "سید مهدی شجاعی",
    srcImg: "https://pic.ketab.ir/DataBase/BookImages/02/14020303130.jpg",
    id: "1248"
  },

    {
    title: "پدر، عشق و پسر",
    desc: "سید مهدی شجاعی",
    srcImg: "https://pic.ketab.ir/DataBase/BookImages/02/14020303130.jpg",
    id: "1218"
  },
];

export async function GET() {
  try {
    const response = NextResponse.json({ data: data, status: 200 });
    return response;
  } catch  {
    return NextResponse.json({ message: "Internal Server Error", status: 500 });
  }
}
