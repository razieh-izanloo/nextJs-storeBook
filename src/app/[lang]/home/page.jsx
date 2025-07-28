import { Slider } from "@/components/slider/slider";
import { Category } from "@/components/category/category";
import { SalesOfWeek } from "@/components/salesOfWeek/salesOfWeek";
import { LatestComments } from "@/components/latestComments/latestComments";
import { StoreFeatures } from "@/components/storeFeatures/storeFeatures";

const Home = () => {
  return (
    <div className="container">
      <Slider />
      <Category />
      <SalesOfWeek/>
      <LatestComments/>
      <StoreFeatures/>
    </div>
  );
};

export default Home;
