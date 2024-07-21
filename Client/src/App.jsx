import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer/Footer";
import Listing from "./Pages/LIsting/Listing";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
export const MyContext = createContext([]);
function App() {
  const [countryList, setCountryList] = useState(null);
  useEffect(() => {
    getCountryList();
  }, []);

  const [whereHeaderFooter, setWhereHeaderFooter] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const getCountryList = async () => {
    await axios
      .get("https://countriesnow.space/api/v0.1/countries/")
      .then((res) => {
        const response = res.data.data;
        setCountryList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const values = {
    countryList,
    setWhereHeaderFooter,
    isLogin,
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <BrowserRouter>
          {whereHeaderFooter && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing/:id" element={<Listing />} />
            <Route
              exact={true}
              path="/productdetails/:id"
              element={<ProductDetails />}
            />
            <Route
              exact={true}
              path="/cart"
              element={<Cart />}
            />
            <Route exact={true} path="/register" element={<Register />} />
            <Route exact={true} path="/login" element={<Login />} />
          </Routes>
          {whereHeaderFooter && <Footer />}
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
