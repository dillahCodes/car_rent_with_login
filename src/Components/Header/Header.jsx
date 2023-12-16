import { IoSearchOutline } from "react-icons/io5";
import { GrNotification } from "react-icons/gr";
import { useUserAuth } from "../../Context/Auth/UserAuthContext";
export const Header = () => {
  const { user } = useUserAuth();
  return (
    <div className="box-border flex items-center justify-between w-full py-2 gap-x-5">
      <div className="hidden md:block">
        <SearchInput />
      </div>
      <div className="flex items-center ml-auto gap-x-3">
        <GrNotification className="w-5" />
        <img
          className="w-10 rounded-full"
          src={
            user && user.photoURL
              ? user.photoURL
              : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          }
          referrerPolicy="no-referrer"
          alt="user image"
        />
      </div>
    </div>
  );
};

const SearchInput = () => {
  return (
    <div className="md:w-[358px] bg-[#F5F4F6] gap-x-2 flex items-center px-[14px] py-[5px] rounded-lg">
      <IoSearchOutline />
      <input
        type="text"
        placeholder="Type here"
        className="w-full max-w-xs border-none rounded-none outline-none bg-inherit input input-bordered focus:outline-none  caret-[#EF9011]"
      />
    </div>
  );
};
