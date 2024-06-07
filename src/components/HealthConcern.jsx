
import data from "../../db.json";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function HealthConcern() {
  return (
    <>
      <div className="h-auto mb-10 w-full mt-14">
        <div className="h-1/5 max-w-screen-2xl m-auto px-9 ">
          <h1 className="font-semibold text-2xl">
            Lab Tests by Health Concern
          </h1>
          <div className="flex items-center">
            <p className="text-lg text-gray-600">Powered by</p>
            <img
              className="h-5 ml-3"
              src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-screen-2xl h-auto m-auto py-4 ">
          <Swiper
          
            slidesPerView={6}
            spaceBetween={30}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={false}
            keyboard={{
              enabled: true,
            }}
            scrollbar={false}
            navigation={true}
            pagination={{
              clickable: false,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper mx-10"
          >
            {data.healthConcern.map((image, i) => (
              <Link key={i}>
                <SwiperSlide className="">
                  <img src={image.image} alt="" />
                </SwiperSlide>
              </Link>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
