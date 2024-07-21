import { IoIosMenu } from "react-icons/io";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  const [sidebarNavOpen, SetsidebarNavOpen] = useState(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="navPart1 col-sm-3">
            <Button
              className="allCatTab"
              onClick={() => SetsidebarNavOpen(!sidebarNavOpen)}
            >
              <span className="icon-1 mr-3">
                <IoIosMenu />
              </span>
              <span class="text">ALL CATEGORIES</span>
              <span className="icon-2 ml-3">
                <FaAngleDown />
              </span>
            </Button>

            <div className={`sidebarNav  ${sidebarNavOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link to={"/"}>
                    <Button>
                      fruits & Vegetables <FaAngleRight className="ml-auto" />
                    </Button>
                  </Link>
                  <div className="submenu">
                    <Link to={"/"}>
                      <Button>Cuts & Sprouts</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Exotic Fruits & Veggies</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Fresh Fruits</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Fresh Vegetables</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Herbs & Seasonings</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Packaged Produce</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Party Trays</Button>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link to={"/"}>
                    <Button>Meats & Seafood</Button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <Button>Breakfast & Dairy</Button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <Button>
                      Beverages
                      <FaAngleRight className="ml-auto" />
                    </Button>
                  </Link>
                  <div className="submenu">
                    <Link to={"/"}>
                      <Button>Coffe</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Craft Beer</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Drink Boxes & Pouches</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Milk & Plant-Based Milk</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Soda & Pop</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Sparkling Water</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Tea & Kombucha</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Water</Button>
                    </Link>
                    <Link to={"/"}>
                      <Button>Wine</Button>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link to={"/"}>
                    <Button>Breads & Bakery</Button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <Button>Frozen Foods</Button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <Button>Biscuits & Snacks</Button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <Button>Grocery & Staples</Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navPart-2 col-sm-9 ">
            <ul className="list list-inline d-flex align-items-center ml-auto">
              <li className="list-inline-item">
                <Link to={"/"}>HOME</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>Men</Link>
                <div className="submenu shadow">
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Footwear</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Footwear</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>Women</Link>
                <div className="submenu shadow">
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Footwear</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Footwear</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>MOBILES</Link>
                <div className="submenu shadow">
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Footwear</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Footwear</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>BAKERY</Link>
                <div className="submenu shadow">
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Footwear</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Footwear</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>BEVERAGES</Link>
                <div className="submenu shadow">
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Footwear</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Footwear</Button>
                  </Link>
                  <Link to={"/"}>
                    <Button>Clothing</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>BLOG</Link>
              </li>
              <li className="list-inline-item">
                <Link to={"/"}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
