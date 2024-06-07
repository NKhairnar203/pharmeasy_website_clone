import { Container, Image, Box, Text, Card, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import data from "../../db.json";

const SwaperSlide = () => {
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };

  return (
    <Container my={20} px={6} maxW={breakpoints["2xl"]}>
      <Swiper
        // height={"200px"}
        spaceBetween={23}
        slidesPerView={3.6}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      >
        {data.swaperslide.map((ele, i) => (
          <SwiperSlide key={i}>
            <Link>
              <Box h={"100%"} maxW={"auto"}>
                <Card
                  w={"auto"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  rounded={"10px"}
                  h={"160px"}
                >
                  <Image h={"100%"}  rounded={"10px"} src={ele.image} />
                </Card>
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SwaperSlide;
