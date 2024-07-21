import React, { useContext, useEffect } from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import ProductItem from "../../Components/ProductItem/ProductItem";

import BannerImage1 from "../../assets/BannerImages/Banner1.png";
import BannerImage2 from "../../assets/BannerImages/Banner2.png";
import BannerImage3 from "../../assets/BannerImages/banner3.png";
import BannerImage4 from "../../assets/BannerImages/banner4.png";
import newsLetterImg from "../../assets/BannerImages/coupon.png";
import HomeCategory from "../../Components/HomeCategory/HomeCategory";
import { CiMail } from "react-icons/ci";
import { MyContext } from "../../App";

function Home() {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setWhereHeaderFooter(true);
  }, []);
  return (
    <React.Fragment>
      <HomeBanner />
      <HomeCategory />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img
                    src={BannerImage1}
                    alt="banner-image1"
                    className="cursor"
                  />
                </div>
                <div className="banner mt-5">
                  <img
                    src={BannerImage2}
                    alt="banner-image2"
                    className="cursor"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 homeHeading">BEST SELLERS</h3>
                  <p className="homeHeading-para mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                <Button className="viewAllBtn">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="homeProducts-slider mt-4">
                <Swiper
                  slidesPerView={4}
                  navigation={true}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-4">
                <div className="info w-75">
                  <h3 className="mb-0 homeHeading">NEW PRODUCTS</h3>
                  <p className="homeHeading-para mb-0">
                    New products with updated stocks.
                  </p>
                </div>

                <Button className="viewAllBtn">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="homeProducts-slider mt-4 productRow2">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              <div className="d-flex mt-4 mb-4 bannerSection">
                <div className="banner">
                  <img
                    src={BannerImage3}
                    alt="banner-image3"
                    className="cursor"
                  />
                </div>
                <div className="banner">
                  <img
                    src={BannerImage4}
                    alt="banner-image4"
                    className="cursor"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetter d-flex align-items-center mt-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1 text-para">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsLetter and get...</h3>
              <p className="text-dec">
                Join our email subscription now to get updates on <br />
                promotions and coupons.
              </p>

              <form>
                <CiMail />
                <input type="text" placeholder="Your Email Address" />
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={newsLetterImg} alt="newsLetterImage" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Home;
