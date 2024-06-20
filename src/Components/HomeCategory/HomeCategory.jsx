// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";

const HomeCategory = () => {
  const [catIconBg, setcatIconBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
  ]);
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
          slidesPerView={10}
          spaceBetween={5}
          slidesPerGroup={3}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {catIconBg.map((item, index) => {
            return (
              <SwiperSlide>
                <div
                  key={index}
                  className="item text-center cursor"
                  style={{ background: item }}
                >
                  <img
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"
                    alt="homeCategory apple"
                  />
                  <h4 className="categoryName">Red Apple</h4>
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
