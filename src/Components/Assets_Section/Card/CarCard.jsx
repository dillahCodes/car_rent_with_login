import CarTop from "../../../assets/Assets_Section/CarTop.svg";
import LineIcon from "../../../assets/Assets_Section/LineIcon.svg";

export const CarCard = () => {
  return (
    <div className="w-full xl:max-w-sm lg:mr-5 xl:mr-0  relative flex-1 h-fit   bg-[#438FFE] rounded-2xl p-5 lg:mt-5 ">
      <div className="flex justify-between w-full gap-x-5">
        <div className="w-fit ">
          <h1 className="capitalize text-[10px] md:text-[15px] text-[#C6DCFC]">
            fuel usage
          </h1>
          <p className="text-[15px] md:text-[20px] font-medium capitalize text-white ">
            2903.89 Ltr
          </p>
        </div>
        <img src={LineIcon} alt="line icon" />
        <div className="w-fit">
          <h1 className="capitalize md:text-[15px] text-[10px] text-[#C6DCFC]">
            KM Driven
          </h1>
          <p className="text-[15px] md:text-[20px] font-medium capitalize text-white ">
            2903 km
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full mt-5 gap-x-5">
        <div className="w-fit ">
          <h1 className="capitalize text-[10px] md:text-[15px] text-[#C6DCFC]">
            Total Cost
          </h1>
          <p className="text-[15px] md:text-[20px]  font-medium capitalize text-white ">
            $3,00,290.00
          </p>
        </div>
        <img src={LineIcon} alt="line icon" />
        <div className="w-fit">
          <h1 className="capitalize text-[10px] md:text-[15px] text-[#C6DCFC]">
            Top Speed
          </h1>
          <p className="text-[15px] md:text-[20px] font-medium capitalize text-white ">
            300km/h
          </p>
        </div>
      </div>
      <img
        src={CarTop}
        alt="car image"
        className="mx-auto w-[calc(60%-10vw)] md:w-auto lg:w-auto  rotate-[270deg] lg:mt-10 md:rotate-0 "
      />
    </div>
  );
};
