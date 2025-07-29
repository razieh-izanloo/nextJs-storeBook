import { getCurrentLang } from "@/helpers/language";
import { CategoryCard } from "./categoryCard";
import { List } from "./list";

interface PageProps {
  searchParams: { [key: string]: string | undefined };
}

const CategoryPage = async({ searchParams }: PageProps) => {
  const category = searchParams.category;
  const lang = await getCurrentLang();
  let data;
  const response = await fetch(
    `http://localhost:3000/api/products?category=${category}`
  );
  const res = await response.json();
  if (res?.status === 200) data = res.data;

  return data?.dataCategory ? (
    <>
      <CategoryCard category={category} />
      <List data={data.dataCategory} lang={lang}/>
    </>
  ) : (
    <span>اطلاعاتی وجود ندارد</span>
  );
};
export default CategoryPage;
