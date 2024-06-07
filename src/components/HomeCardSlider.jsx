import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import data from "../../db.json";
import Homecard from "./Homecard";
import { Box } from "@chakra-ui/react";

const HomeCardSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box className="slider-container">
      <Slider {...settings} className="w-full mx-auto ">
        {data.homecard.map((ele, i) => (
          <Homecard key={i} {...ele} />
        ))}
      </Slider>
    </Box>
  );
};

export default HomeCardSlider;
