import { NextResponse } from 'next/server';


const data =[
{nameCategory: "language", dataCategory: [
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
]},
{nameCategory: "palette", dataCategory: [
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
]},
{nameCategory: "stethoscope", dataCategory: [
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
]},
{nameCategory: "psychology", dataCategory: [
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
]},
{nameCategory: "literature", dataCategory: [
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
]},
{nameCategory: "exercise", dataCategory: [
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
]},
{nameCategory: "engineering", dataCategory: [
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
]},
{nameCategory: "childrenAndTeenagers", dataCategory: [
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
]},
{nameCategory: "family", dataCategory: [
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
]},
{nameCategory: "history", dataCategory: [
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
]},
];

export async function GET(request: Request) {
 const url = new URL(request.url);
  const category = url.searchParams.get("category");

  try {
    const dataProduct = data.find((item) => item.nameCategory === category);
    return NextResponse.json(
      dataProduct
        ? { data: dataProduct, status: 200 }
        : { data: null, status: 404 }
    );
     
  } catch {
    return NextResponse.json({ message: "Internal Server Error" , status: 500 });
  }
}
