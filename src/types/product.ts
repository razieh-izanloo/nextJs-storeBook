export type TableProps = {
  dataTable: {nameBook: string;
  author: string;
  translators: string;
  publisher: string;
  category: string;
  numberOfPages: string;
  publicationDate: string;}
};

export type ProductProps ={
      id: string;
    title: string;
    autor: string;
    desc: string;
    srcImg: string;
    price: string;
}

export type DetailProps = {
  data: ProductProps
};
