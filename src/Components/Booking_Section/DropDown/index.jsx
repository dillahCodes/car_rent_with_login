import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import PropTypes from "prop-types";

export const DropdownWithMenu = ({ title }) => {
  const [open, setOpen] = useState(false);
  const handlerOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <Dropdown open={open} onOpenChange={handlerOpen}>
      <MenuButton
        sx={{
          padding: "5px 20px",
          width: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          borderRadius: "9999px",
          background: "white",
        }}
      >
        <span className="text-[12px] font-[500]">{title}</span>
        <MdOutlineArrowDropDown className="text-[16px]" />
      </MenuButton>
      <Menu>
        {menu1.map((item) => (
          <MenuItem key={item.name}>{item.name}</MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
};
DropdownWithMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

const menu1 = [{ name: "new" }, { name: "second" }];
