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

const TrendingNear = () => {
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };

  return (
    <Container my={10} px={6} maxW={breakpoints["2xl"]}>
      <Box py={6} mb={3}>
        <Heading as={"h2"} fontWeight={"700"} size={"lg"}>
          Trending Near You
        </Heading>
        <Text py={2}>Popular in your city</Text>
      </Box>
      <Swiper
        // height={"200px"}
        spaceBetween={30}
        slidesPerView={6}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      >
        {data.trendingnear.map((ele, i) => (
          <SwiperSlide key={i}>
            <Link>
              <Box h={"100%"} maxW={"auto"}>
                <Card
                  w={"auto"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  h={"155px"}
                  _hover={{ boxShadow: "lg" }}
                >
                  <Image h={"120px"} src={ele.image} />
                </Card>
                <Text
                  noOfLines={2}
                  fontWeight={"600"}
                  mt={"12px"}
                  fontSize={".98rem"}
                >
                  {ele.name}
                </Text>{" "}
                <Box fontWeight={"600"} color={"gray.500"}>
                  {ele.current_price == 0 ? (
                    <Box display={"flex"}>
                      <Text mr={1}>MRF</Text>
                      <Text>₹{ele.price}</Text>{" "}
                    </Box>
                  ) : (
                    <Box display={"flex"}>
                      <Text mr={1}>MRF</Text>{" "}
                      <Text as={"del"}>₹{ele.price}</Text>
                    </Box>
                  )}
                </Box>
                {ele.current_price == 0 ? null : (
                  <Box>
                    {" "}
                    <Text as={"b"}>₹{ele.current_price}</Text>
                    {"  "}
                    <Text as={"b"} color={"red.400"}>
                      ({ele.percentage}%)
                    </Text>
                  </Box>
                )}
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TrendingNear;
