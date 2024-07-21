import React, { useContext, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Button, Dialog } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { MyContext } from "../../App";
const CountryDropdown = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const country = useContext(MyContext);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    setCountryList(country?.countryList);
  }, [country]);

  function selectCountry(index) {
    setSelectedCountry(index);
    setIsModalOpen(false);
  }

  function countryFilter(e) {
    const keyWord = e.target.value.toLowerCase();
    if (keyWord !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyWord);
      });
      setCountryList(list);
    } else {
      setCountryList(country.countryList);
    }
  }
  return (
    <>
      <Button className="countryDropdown" onClick={() => setIsModalOpen(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">India</span>
        </div>
        <FaAngleDown className="fa-angle" />
      </Button>
      <Dialog
        onClose={() => setIsModalOpen(false)}
        open={isModalOpen}
        className="locationModal"
      >
        <h6 className="entry-title mb-2">Choose your Delivery Location</h6>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button onClick={() => setIsModalOpen(false)} className="closeMenu">
          <IoCloseSharp />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search for Area..."
            onChange={countryFilter}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className="countryList mt-2">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    className={`${selectedCountry === index ? "active" : ""}`}
                    onClick={() => selectCountry()}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropdown;
