import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const ButtonLogoutGroup = () => {
  return (
    <div className="flex flex-col justify-between w-full  bottom-0  font-mono gap-y-2 sm:mt-10  text-[15px]">
      <Link
        to={"/settings"}
        className="flex items-center  gap-x-3 px-2 py-3 w-full hover:bg-[#F3F5F8] rounded-md  transition-all duration-300"
      >
        <IoSettingsOutline /> settings
      </Link>
      <button className="flex items-center w-full px-2 py-3 transition-all duration-300 bg-red-500 rounded-md text-slate-100 gap-x-3">
        <CiLogout /> LogOut
      </button>
    </div>
  );
};
