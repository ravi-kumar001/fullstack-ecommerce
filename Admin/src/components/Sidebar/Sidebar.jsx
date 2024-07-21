import React, { useState } from "react";

import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import AddCategory from "../AddCategory/AddCategory";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState({
    open: false,
    data: null,
  });
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="log" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* Menu */}

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem ml-5">
          <BiSolidCategoryAlt />
          <span
            onClick={() => {
              setOpen({ open: true, data: null });
            }}
          >
            Category
          </span>
          <FaAngleDown />

          {open.open && (
            <AddCategory
              onClose={() => {
                setOpen({ open: false, data: null });
              }}
            />
          )}
        </div>
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
