import { Slider } from "@/components/slider/slider";
import { Category } from "@/components/category/category";
import { SalesOfWeek } from "@/components/salesOfWeek/salesOfWeek";
import { LatestComments } from "@/components/latestComments/latestComments";

const Home = () => {
  return (
    <div className="container">
      <Slider />
      <Category />
      <SalesOfWeek/>
      <LatestComments/>
    </div>
  );
};

export default Home;
