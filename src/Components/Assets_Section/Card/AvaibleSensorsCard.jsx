import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { useState } from "react";

export const SensorsCard = () => {
  const [open, setOpen] = useState(false);
  const [listItems, setListItems] = useState([
    {
      id: "1",
      text: "Asset - Fuel Consumed (10liter)",
      isDone: false,
    },
    {
      id: "2",
      text: "Asset - Odometer (km)",
      isDone: false,
    },
    {
      id: "3",
      text: "Asset - Runtime (km)",
      isDone: false,
    },
    {
      id: "4",
      text: "Asset - Speed (hr)",
      isDone: false,
    },
    {
      id: "5",
      text: "Engine Temperature (deg C)",
      isDone: false,
    },
  ]);

  const handleCheckboxClick = (id) => {
    // Copy the array to avoid mutating the state directly
    const updatedList = [...listItems];
    const selectedItem = updatedList.find((item) => item.id === id);

    // Toggle the isDone property
    if (selectedItem) {
      selectedItem.isDone = !selectedItem.isDone;
      setListItems(updatedList);
    }
  };

  const handlerOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="w-full 2xl:w-[50%] bg-white h-auto p-5 rounded-2xl">
      <div className="w-full h-auto">
        <div className="h-[60px] flex-wrap items-center flex justify-between border-b-[#F3F3F3] border border-t-0 border-l-0 border-r-0 pb-[20px]">
          <h1 className="capitalize text-[23px] font-[700]">
            Available Sensors
          </h1>
          <Dropdown open={open} onOpenChange={handlerOpen}>
            <MenuButton
              sx={{
                padding: "5px 20px",
                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <span className="text-[12px] font-[500]">Assets</span>
              <MdOutlineArrowDropDown className="text-[16px]" />
            </MenuButton>
            <Menu>
              <MenuItem>assets</MenuItem>
              <MenuItem>engine</MenuItem>
              <MenuItem>body</MenuItem>
            </Menu>
          </Dropdown>
        </div>
      </div>
      <ul className="w-full mt-[20px]">
        {listItems.map((item) => (
          <li key={item.id} className="flex items-center w-full mb-5 gap-x-5">
            <input
              type="checkbox"
              checked={item.isDone}
              className={`checkbox checkbox-md ${
                item.isDone ? "checkbox-error text-white bg-red-500" : ""
              }`}
              onChange={() => handleCheckboxClick(item.id)}
            />
            <div className="flex justify-between w-full">
              <p
                className={`text-lg font-[500] capitalize ${
                  item.isDone ? "line-through text-red-500" : ""
                }`}
              >
                {item.text}
              </p>
              <AiOutlineLineChart
                className={`text-[30px] ${item.isDone ? "text-red-500" : ""}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
