import React, { useState } from "react";
import righbarImage from "../../assets/images/rightbar-banner.jpg";
import { Button } from "@mui/material";
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { HiViewGrid } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../ProductItem/ProductItem";
import { IoMdMenu } from "react-icons/io";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function RightBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    IoMdMenu;
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [view, setview] = useState("four");
  return (
    <React.Fragment>
      <img
        src={righbarImage}
        className="w-100"
        style={{ borderRadius: "8px" }}
      />

      <div className="shop-view-selector mt-3 mb-3 d-flex align-items-center">
        <div className="d-flex btn-wrapper">
          <Button
            className={view === "one" && "act"}
            onClick={() => setview("one")}
          >
            <IoMdMenu />
          </Button>
          <Button
            className={view === "two" && "act"}
            onClick={() => setview("two")}
          >
            <HiViewGrid />
          </Button>

          <Button
            className={view === "three" && "act"}
            onClick={() => setview("three")}
          >
            <CgMenuGridR />
          </Button>
          <Button
            className={view === "four" && "act"}
            onClick={() => setview("four")}
          >
            <TfiLayoutGrid4Alt />
          </Button>
        </div>

        <div className="view-selector-filter">
          <div className="ml-auto">
            <Button onClick={handleClick}>
              Sort By Latest <FaAngleDown />
            </Button>

            <Menu
              className="w-100 filterDropdown"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Sort By Popularity</MenuItem>

              <MenuItem onClick={handleClose}>Sort By Average Rating</MenuItem>
              <MenuItem onClick={handleClose} style={{ color: "#2bbef9" }}>
                Sort By Latest
              </MenuItem>
              <MenuItem onClick={handleClose}>
                Sort By Price: low to high
              </MenuItem>
              <MenuItem onClick={handleClose}>
                Sort By Price: high to low
              </MenuItem>
            </Menu>
          </div>
          <div className="ml-auto">
            <Button onClick={handleClick1}>
              Show 12 <FaAngleDown />
            </Button>

            <Menu
              className="w-100 filterDropdown"
              id="basic-menu"
              anchorEl={anchorEl1}
              open={open1}
              onClose={handleClose1}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose1}>12</MenuItem>
              <MenuItem onClick={handleClose1}>24</MenuItem>
              <MenuItem onClick={handleClose1}>36</MenuItem>
              <MenuItem onClick={handleClose1}>48</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      <div className="productListing">
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
        <ProductItem viewController={view} />
      </div>

      <div className="d-flex align-items-center justify-content-center mb-3">
        <Pagination count={10} color="primary" size="large"/>
      </div>
    </React.Fragment>
  );
}

export default RightBar;
