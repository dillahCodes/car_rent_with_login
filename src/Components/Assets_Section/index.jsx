import { SensorsCard } from "./Card/AvaibleSensorsCard";
import { CarCard } from "./Card/CarCard";
import { CardLineChart } from "./Card/CardLineChart";
import { NotiesCard } from "./Card/NotiesCard";
import { ReminderCard } from "./Card/ReminderCard";

export const AsseetsSection = () => {
  return (
    <section className="md:w-full min-h-screen w-screen  p-5 bg-[#F5F5F5]">
      <h1 className="mb-5 text-4xl font-medium capitalize">assets</h1>
      <div className="flex flex-col flex-wrap w-full xl:gap-5 lg:flex-row">
        <CarCard />
        <div className="w-full mt-5 lg:w-[65%] flex-1 flex flex-col gap-y-5">
          <CardLineChart />
          <div className="flex flex-col w-full gap-5 2xl:flex-row">
            <NotiesCard />
            <SensorsCard />
          </div>
          <ReminderCard />
        </div>
      </div>
    </section>
  );
};
