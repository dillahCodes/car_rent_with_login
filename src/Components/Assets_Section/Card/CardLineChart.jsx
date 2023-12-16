import LineChart from "../LineChart/Line";

export const CardLineChart = () => {
  return (
    <div className="flex flex-col justify-between  bg-white rounded-2xl h-[400px] px-[24px] py-[24px]">
      <div className="w-full mb-10 h-[26px] justify-between flex ">
        <div className="text-2xl font-medium capitalize text-zinc-800 ">
          Activity
        </div>
        <div className="text-sm font-medium text-neutral-400 ">View All</div>
      </div>
      <LineChart />
    </div>
  );
};
