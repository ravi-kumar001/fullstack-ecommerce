// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import axios from "axios";

const HomeCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        axios.get("http://localhost:4000/api/category").then((response) => {
          setCategories(response.data);
        });
      } catch (err) {
        console.log(err);
      }
    };

    getCategories();
  }, []);
  // const [catIconBg, setcatIconBg] = useState([
  //   "#fffceb",
  //   "#ecffec",
  //   "#feefea",
  //   "#fff3eb",
  //   "#fffceb",
  //   "#ecffec",
  //   "#fff3ff",
  //   "#f2fce4",

  // ]);
  return (
    <div className="homeCategory">
      <div className="container">
        <div className="d-flex align-items-center mb-4">
          <div className="info w-75">
            <h3 className="mb-0 homeHeading">Featured Categories</h3>
            <p className="homeHeading-para mb-0">
              Discover exclusive deals, shop top brands, and enjoy seamless
              online shopping!
            </p>
          </div>

          <Button className="viewAllBtn">
            View All <IoIosArrowRoundForward />
          </Button>
        </div>
        <Swiper
          slidesPerView={8}
          spaceBetween={11}
          slidesPerGroup={3}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="item text-center cursor"
                  style={{ background: item.color }}
                >
                  <img src={item.images} alt={item.name} />
                  <br />
                  <h4 className="categoryName">{item.name}</h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCategory;
