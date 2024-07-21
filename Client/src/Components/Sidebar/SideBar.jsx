import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
import sidebarImage from "../../assets/images/sidebar-banner.gif";


function SideBar(props) {
  const [value, setValue] = useState([100, 6000]);
  const [value2, setValue2] = useState(0);
  return (
    <div className="sidebar">
      <div className="filterBox">
        <h6>PRODUCT CATEGORIES</h6>
        <div className="scroll">
          <ul>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Men"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Women"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Mobiles"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Bakery"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Beverages"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Blog"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Toys and Hobbies"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Auto and Parts"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Fashion"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Books"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="filterBox">
        <h6>PRODUCT CATEGORIES</h6>

        <RangeSlider
          value={value}
          onInput={setValue}
          min={100}
          max={6000}
          step={5}
        />

        <div className="d-flex pt-2 pb-2 priceRange">
          <span>
            From : <strong className="text-success">Rs: {value[0]}</strong>
          </span>
          <span className="ml-auto">
            From: <strong className="text-success">Rs:{value[1]}</strong>
          </span>
        </div>
      </div>

      <div className="filterBox">
        <h6>PRODUCT STATUS</h6>
        <div>
          <ul>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="In Stock"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="In Sale"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="filterBox">
        <h6>BRANDS</h6>
        <div>
          <ul>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Frito Lay"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Nespresso"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Oreo"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Quaker"
              />
            </li>
            <li>
              <FormControlLabel
                className="w-100"
                control={<Checkbox />}
                label="Welch's"
              />
            </li>
          </ul>
        </div>
      </div>
      <Link to={"#"}>
        <img src={sidebarImage} className="w-100"/>
      </Link>
    </div>
  );
}

export default SideBar;
