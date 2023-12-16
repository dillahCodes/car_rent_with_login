import { BarChart } from "../Chart/BarChart";
import SmoothLineChart from "../Chart/LineChart";

export const ChartCard = () => {
  return (
    <div className="flex flex-wrap justify-between w-full gap-5 mt-20 ">
      <div className="bg-[#FFFFFF] w-full  p-5 xl:w-[47%]    rounded-2xl">
        <h1 className="text-2xl font-[400]">
          <span className="font-bold">Miles</span> Statistics
        </h1>
        <div className="w-full mt-[30px]  flex justify-between flex-wrap gap-5  items-center font-mono">
          <div className="w-[200px] flex justify-around items-center ">
            <span className="px-5 text-white py-1 bg-[#2884FF] rounded-full">
              Day
            </span>
            <span>Week</span>
            <span>Month</span>
          </div>
          <span className=" font-[14px]">266 Miles</span>
        </div>
        <BarChart />
      </div>
      <div className="bg-[#FFFFFF] w-full  p-5 xl:w-[47%]    rounded-2xl">
        <h1 className="text-2xl font-[400]">
          <span className="font-bold capitalize">car</span> Statistics
        </h1>
        <div className="w-full mt-[30px]  flex justify-between flex-wrap items-center font-mono gap-5">
          <span className=" font-[14px] capitalize">20 February 2022</span>
          <div className="w-[200px] flex justify-around items-center">
            <span className="px-5 text-white py-1 bg-[#FF764C] rounded-full">
              Day
            </span>
            <span>Week</span>
            <span>Month</span>
          </div>
        </div>
        <SmoothLineChart />
      </div>
    </div>
  );
};
