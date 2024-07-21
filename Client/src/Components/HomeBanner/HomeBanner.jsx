import React from "react";
import Slider from "react-slick";
const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };
  return (
    <div className="homeBannerSection">
      {/* <div className="container"> */}
        <Slider {...settings}>
          <div className="item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/hb2/hd9/32834870411294/Private_top-banner-web_36-e3.jpg"
              alt=""
              className="w-100"
            />
          </div>
          <div className="item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h3d/h72/32834865758238/footwear_top-banner-web_20-dei.jpg"
              alt=""
              className="w-100"
            />
          </div>
          <div className="item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/hf1/h9d/32908773031966/beauty_top-banner-web_-74-h.jpg"
              alt=""
              className="w-100"
            />
          </div>
          <div className="item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h72/h96/32908773294110/watches_top-banner-web_48-d.jpg"
              alt=""
              className="w-100"
            />
          </div>
        </Slider>
      </div>
    // </div>
  );
};
export default HomeBanner;
