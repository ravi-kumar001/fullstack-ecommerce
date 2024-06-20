import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer/Footer";
export const MyContext = createContext([]);
function App() {
  const [countryList, setCountryList] = useState(null);
  useEffect(() => {
    getCountryList();
  }, []);

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
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
