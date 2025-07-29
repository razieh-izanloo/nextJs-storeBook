import { Detail } from "./detail";
import { Table } from "./table";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let data;
  const response = await fetch(`http://localhost:3000/api/product?id=${id}`, {
    next: { revalidate: 60 * 60 * 24 * 30 }, //30 day
  });
  const res = await response.json();
  if (res?.status === 200) data = res.data;
  else return null;

  return (
    <>
      <Detail data={data} />
      <Table dataTable={data.info} />
    </>
  );
};
export default ProductPage;
