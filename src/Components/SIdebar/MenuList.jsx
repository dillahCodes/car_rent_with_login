import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { RiScissors2Line } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";

export const menuItems = [
  {
    icon: <MdOutlineSpaceDashboard />,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <MdOutlineCurrencyBitcoin />,
    label: "Assets",
    link: "/assets",
  },
  {
    icon: <IoCarSportOutline />,
    label: "Booking",
    link: "/booking",
  },
  {
    icon: <IoBagOutline />,
    label: "Sell Cars",
    link: "/sellcars",
  },
  {
    icon: <IoCartOutline />,
    label: "Buy Cars",
    link: "/buycars",
  },
  {
    icon: <RiScissors2Line />,
    label: "Services",
    link: "/services",
  },
  {
    icon: <IoCalendarOutline />,
    label: "Calender",
    link: "/calender",
  },
  {
    icon: <LuMessageSquare />,
    label: "Message",
    link: "/message",
  },
];
