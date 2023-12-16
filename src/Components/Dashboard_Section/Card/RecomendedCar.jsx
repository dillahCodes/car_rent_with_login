import Car1 from "../../../assets/Dashboard_section/Car1.svg";
import Car2 from "../../../assets/Dashboard_section/Car2.svg";
import Car3 from "../../../assets/Dashboard_section/Car3.svg";
import Reverse from "../../../assets/Dashboard_section/reverseIcon.svg";
import Repost from "../../../assets/Dashboard_section/Repost.svg";
import AddIcon from "../../../assets/Dashboard_section/AddIcons.svg";
import ElectroIcon from "../../../assets/Dashboard_section/ElectroIcon.svg";

const carData = [
  {
    backgroundColor: "bg-[#E1DFA4]",
    recomended: "64%",
    carImg: Car1,
    carTitle: "Porsche 911 gt3 ",
    kmInfo: "132km",
    priceInfo: "$45/h",
  },
  {
    backgroundColor: "bg-[#E3ECF1]",
    recomended: "74%",
    carImg: Car2,
    carTitle: "Porsche 911 Carrera",
    kmInfo: "130km",
    priceInfo: "$38/h",
  },
  {
    backgroundColor: "bg-[#F4E3E5]",
    recomended: "50%",
    carImg: Car3,
    carTitle: "mini cooper",
    kmInfo: "120km",
    priceInfo: "$35/h",
  },
  {
    backgroundColor: "bg-sky-100",
    recomended: "50%",
    carImg: Car3,
    carTitle: "mini cooper",
    kmInfo: "120km",
    priceInfo: "$35/h",
  },
];

export const RecomendedCar = () => {
  return (
    <div className="flex flex-wrap justify-around gap-5 mt-20 md:flex-row">
      {carData.map((item, index) => (
        <div
          key={index}
          className={`${item.backgroundColor} flex flex-col justify-around gap-y-3 w-full   lg:max-w-xs xl:max-w-[25%] 2xl:max-w-[20%]   px-[27px] py-[15px] rounded-xl `}
        >
          <header className="flex items-center gap-x-2">
            <img src={Reverse} alt="reverse" />
            <h1 className="text-[#242731] text-[18px] capitalize font-bold">
              {item.recomended} recomended
            </h1>
          </header>
          <img src={item.carImg} alt="car 1" />
          <h1 className="font-bold capitalize text-[16px]">{item.carTitle}</h1>
          <div className="flex justify-between gap-10">
            <div className="flex justify-between w-[60%]">
              <img src={Repost} alt="repost" />
              <h1>{item.kmInfo}</h1>
              <img src={AddIcon} alt="add icon" />
              <img src={ElectroIcon} alt="electro icon" />
            </div>
            <span>{item.priceInfo}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
