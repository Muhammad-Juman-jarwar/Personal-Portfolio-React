import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import Stars from "../../img/Stars.png";

const Testimonial = () => {

  let shopifyexperts8 = <a className="link" href="https://www.fiverr.com/shopifyexperts8" target="_blank" rel="noreferrer">shopifyexperts8</a>
  let tannerwhidden = <a className="link" href="https://www.fiverr.com/tannerwhidden" target="_blank" rel="noreferrer">tannerwhidden</a>
  let vertix66 = <a className="link" href="https://www.fiverr.com/vertix66" target="_blank" rel="noreferrer">vertix66</a>
  let alejandro311 = <a className="link" href="https://www.fiverr.com/alejandro311" target="_blank" rel="noreferrer">alejandro311</a>
  const clients = [
    {
      img: profilePic1,
      name: shopifyexperts8,
      country:"Pakistan",
      review:
        "Very Professional Shopify Web Designer & Best Content Creator i will Highly Recommend to Any One If You want really professional shopify store for Your Business That Can convert Customers to You Then its The Perfect Gig for You! Again Highly Recommend and Will use You Again in future You Are The Best I am Very Happy with final Results!",
        img2: Stars,
    },
    {
      img: profilePic2,
      name: tannerwhidden,
      country:"Canada",
      img2: Stars,
      review:
        "Way beyond excellent service, quality and technical craftsmanship. I look forward to working with you again In the future.",
    },
    {
      img: profilePic3,
      name:vertix66,
      country:"Germany",
      img2: Stars,
      review:
        "I've used Fiverr for many years and this is the best seller for Shopify website design that I have worked with. Very patient, and went out of his way to ensure that the project was completed on time.Please remember to tip your designers! They deserve it.",
    },
    {
      img: profilePic4,
      name:alejandro311,
      img2: Stars,
      country:"Spain",
      review:
        "If I could give shopifyworld 20 stars I would. I have been building enterprise websites for Fortune 500 companies for the past 15 years. I have worked with top talent all over the world. I can say confidently you are in amazing hands with shopifyworld.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span >{client.name}</span>
                <span>{client.country}</span>
                <span>{client.review}</span>
                <img src={client.img2} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
