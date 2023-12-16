import car1 from "../../../assets/Booking_Section/car1.svg";
import car2 from "../../../assets/Booking_Section/car2.svg";
import car3 from "../../../assets/Booking_Section/car3.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoRepeatSharp } from "react-icons/io5";

export const CardCarBooking = () => {
  return (
    <div className="flex flex-wrap justify-between gap-5">
      {carList.map((car, index) => (
        <div
          className="flex flex-col justify-between w-full p-5 bg-white rounded-lg  md:max-w-[46%] lg:max-w-[30%] lg:flex-0 gap-y-5"
          key={index}
        >
          <div className="flex flex-wrap items-center justify-between w-full">
            <h1 className="text-xl font-medium capitalize">{car.title}</h1>
            <IoMdHeartEmpty className="text-[20px]" />
          </div>
          <img
            className="mx-auto"
            width={(car.width && car.width) || 250}
            src={car.img}
            alt={car.title}
          />
          <div className="flex flex-wrap justify-between w-full gap-5">
            <div className="flex items-center gap-2">
              <IoPersonOutline className="text-[20px]" />
              {car.capacity}
            </div>
            <div className="flex items-center gap-2">
              <IoRepeatSharp className="text-[20px]" />
              {car.transmission}
            </div>
            <div className="flex items-center gap-2 font-bold">{car.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const carList = [
  {
    img: car1,
    title: "Porsche 718 Cayman S",
    capacity: 4,
    transmission: "manual",
    price: "$400/day",
  },
  {
    img: car2,
    title: "Porsche 911 Carrera",
    capacity: 4,
    transmission: "manual",
    price: "$500/day",
    width: 200,
  },
  {
    img: car3,
    title: "Tesla Model S",
    capacity: 4,
    transmission: "automatic",
    price: "$600/day",
    width: 280,
  },
  {
    img: car1,
    title: "Porsche 718 Cayman S",
    capacity: 4,
    transmission: "manual",
    price: "$400/day",
  },
  {
    img: car2,
    title: "Porsche 911 Carrera",
    capacity: 4,
    transmission: "manual",
    price: "$500/day",
    width: 200,
  },
  {
    img: car3,
    title: "Tesla Model S",
    capacity: 4,
    transmission: "automatic",
    price: "$600/day",
    width: 280,
  },
  {
    img: car1,
    title: "Porsche 718 Cayman S",
    capacity: 4,
    transmission: "manual",
    price: "$400/day",
  },
  {
    img: car2,
    title: "Porsche 911 Carrera",
    capacity: 4,
    transmission: "manual",
    price: "$500/day",
    width: 200,
  },
  {
    img: car3,
    title: "Tesla Model S",
    capacity: 4,
    transmission: "automatic",
    price: "$600/day",
    width: 280,
  },
  {
    img: car1,
    title: "Porsche 718 Cayman S",
    capacity: 4,
    transmission: "manual",
    price: "$400/day",
  },
  {
    img: car2,
    title: "Porsche 911 Carrera",
    capacity: 4,
    transmission: "manual",
    price: "$500/day",
    width: 200,
  },
  {
    img: car3,
    title: "Tesla Model S",
    capacity: 4,
    transmission: "automatic",
    price: "$600/day",
    width: 280,
  },
];
