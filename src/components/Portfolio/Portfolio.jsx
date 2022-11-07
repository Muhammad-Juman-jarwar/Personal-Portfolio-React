import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://muhammad-juman-jarwar.github.io/hotel-menu-project/" target="_blank" rel="noreferrer"><img src={Sidebar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://muhammad-juman-jarwar.github.io/Eccomerce-Website-/" target="_blank" rel="noreferrer"><img src={Ecommerce} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://ubiikabeauty.com/" target="_blank" rel="noreferrer"><img src={MusicApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://muhammad-juman-jarwar.github.io/expense-tracker/" target="_blank" rel="noreferrer"><img src={HOC} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
