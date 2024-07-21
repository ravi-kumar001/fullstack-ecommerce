import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductItem from "../../../Components/ProductItem/ProductItem";
function RelatedProducts(props) {
  return (
    <div className="homeProducts-slider mt-4">
      <div className="info w-75 mt-4 mb-3">
        <h3 className="mb-0 homeHeading">{props.title}</h3>
      </div>
      <Swiper
        slidesPerView={5}
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
  );
}

export default RelatedProducts;
