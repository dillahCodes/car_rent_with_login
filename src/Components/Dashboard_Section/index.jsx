import { ChartCard } from "./Card/ChartCard";
import { CardWithChartCircle } from "./Card/CircleChartAndCard";
import { RecomendedCar } from "./Card/RecomendedCar";

export const Dashboard = () => {
  return (
    <section className=" min-h-screen p-5    bg-[#F5F5F5] ">
      <CardWithChartCircle />
      <ChartCard />
      <RecomendedCar />
    </section>
  );
};
