import TireWear from "../../../../src/assets/Dashboard_Section/TireWear.svg";
import Energy from "../../../../src/assets/Dashboard_Section/Energy.svg";
import Range from "../../../../src/assets/Dashboard_Section/Range.svg";
import BreakFluid from "../../../assets/Dashboard_Section/BreakFluid.svg";
import StrokedGauge from "../Chart/CIrcleGauge";

const dataChart = [
  {
    icons: Energy,
    title: "Energy",
    value: 50,
    cardFontColor: "text-[#FFFFFF]",
    cardBgColor: "bg-[#A162F7]",
    chartColor: "#FFFFFF",
    valueColor: "#FFFFFF",
    chartBgColor: "#B37EFC",
    chartMainBgColor: "#FFFFFF",
  },
  {
    icons: Range,
    title: "Range",
    value: 40,
    cardFontColor: "text-[#242731]",
    cardBgColor: "bg-[#FFFFFF]",
    chartColor: "#FF7E86",
    valueColor: "#242731",
    chartBgColor: "#F4F5F9",
    chartMainBgColor: "#FF7E86",
  },
  {
    icons: BreakFluid,
    title: "Break Fluid",
    value: 80,
    cardFontColor: "text-[#242731]",
    cardBgColor: "bg-[#FFFFFF]",
    chartColor: "#A162F7",
    chartBgColor: "#F4F5F9",
    chartMainBgColor: "#A162F7",
  },
  {
    icons: TireWear,
    title: "Tire Wear",
    value: 39,
    cardFontColor: "text-[#242731]",
    cardBgColor: "bg-[#FFFFFF]",
    chartColor: "#F6CC0D",
    chartBgColor: "#F4F5F9",
    chartMainBgColor: "#F6CC0D",
  },
];

export const CardWithChartCircle = () => {
  return (
    <div className="flex flex-wrap justify-between w-full gap-3 h-fit xl:items-center">
      {dataChart.map((item, index) => (
        <div
          key={index}
          className={` h-fit ${item.cardBgColor} flex w-full md:w-[45%] lg:w-[45%] xl:w-[20%] flex-col items-center   p-3 gap-y-4 capitalize font-medium text-[24px] rounded-2xl shadow-sm`}
        >
          <div className="flex flex-col items-center gap-y-3 mb-[30px]">
            <img src={item.icons} alt="TireWear" />
            <h1 className={item.cardFontColor}>{item.title}</h1>
          </div>
          <StrokedGauge
            initialValue={item.value}
            valueColor={item.chartColor}
            chartBgColor={item.chartBgColor}
            chartMainBgColor={item.chartMainBgColor}
          />
        </div>
      ))}
    </div>
  );
};
