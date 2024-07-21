import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import CountryDropdown from "../CountryDropdown";
import { Button } from "@mui/material";
import { FiUser } from "react-icons/fi";
import { PiHandbagSimpleThin } from "react-icons/pi";
import HeaderSearch from "./HeaderSearch";
import Navbar from "./Navbar";
import { useContext } from "react";
import { MyContext } from "../../App";
function Header() {
  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="heading bg-blue">
          <p className="text-center">
            Unbeatable Deals, Unmatched Quality – Shop Now!
          </p>
        </div>
        <header>
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img alt="logo" src={Logo} />
                </Link>
              </div>
              <div className="d-flex align-items-center col-sm-10 part-2">
                {context.countryList?.length !== 0 && <CountryDropdown />}
                <HeaderSearch />
                <div className="part-3 d-flex align-items-center ml-auto">
                  {context.isLogin ? (
                    <>
                      <Button className="circle mr-3">
                        <FiUser />
                      </Button>
                      <div className="ml-auto cartTab">
                        <span className="price">$0.00</span>
                        <div className="position-relative ml-2">
                          <Button className="circle ml-2">
                            <PiHandbagSimpleThin />
                          </Button>
                          <span className="count d-flex align-items-center justify-content-center">
                            1
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link to={"/register"}>
                      <Button className="btn-blue btn-lg btn-big btn-round border-0btn-blue rounded">
                        Register
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav>
          <Navbar />
        </nav>
      </div>
    </>
  );
}
export default Header;
