import { Slider } from "@/components/slider/slider";
import { Category } from "@/components/category/category";
import { SalesOfWeek } from "@/components/salesOfWeek/salesOfWeek";

const Home = () => {
  return (
    <div className="container">
      <Slider />
      <Category />
      <SalesOfWeek/>
    </div>
  );
};

export default Home;
