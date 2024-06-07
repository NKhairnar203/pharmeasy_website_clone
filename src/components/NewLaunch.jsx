import { Container, Image, Box, Text, Card, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const NewLaunch = () => {
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };
  const newlaunch = [
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/M43688/shelcal-pro-calcium-vtamin-d3-lemon-orange-and-mixed-berries-flavour-sugar-free-30-gummies-2-1708512049.jpg?dim=1440x0",
      name: "Shelcal Pro Calcium & Vtamin D3 Lemon Orange And Mixed Berries Flavour Sugar Free 30 Gummies",
      price: 550,
      discount_price: 522.5,
      percentage: 5,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/O87078/pharmeasy-diabetic-protein-powder-french-vanilla-flavour-jar-of-1kg-6.1-1715854421.jpg?dim=700x0&dpr=1&q=100",
      name: "Pharmeasy Diabetic Protein Powder French Vanilla Flavour Jar Of 1kg",
      price: 2199,
      discount_price: 1187.46,
      percentage: 46,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/J58419/softovac-liquifibre-mango-flavour-sugar-free-bottle-of-225ml-liquid-6.1-1714735927.jpg?dim=700x0&dpr=1&q=100",
      name: "Softovac Liquifibre Mango Flavour Sugar Free Bottle Of 225ml Liquid",
      price: 240,
      discount_price: 0,
      percentage: 0,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/N55600/cir-adult-diaper-pants-large-waist-size-90-120cms35-47inches-10s-pack-2-1674799736.jpg?dim=1440x0",
      name: "Cir Adult Diaper Pants Large, Waist Size 90-120cms(35-47inches) 10s Pack",
      price: 549,
      discount_price: 307.44,
      percentage: 44,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/R80446/revital-cal-500mg-strip-of-15-tablets-6.1-1713858040.jpg?dim=1440x0",
      name: "Revital Cal 500mg Strip Of 15 Tablets",
      price: 130,
      discount_price: 104,
      percentage: 20,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/D00815/zandu-balm-50ml-with-free-zandu-ortho-vedic-oil-worth-30rs-1-1701673063.jpg?dim=700x0&dpr=1&q=100",
      name: "Zandu Balm 50ml With Free Zandu Ortho Vedic Oil Worth 30rs",
      price: 175,
      discount_price: 0,
      percentage: 0,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/S96524/liveasy-foods-baked-quinoa-puffs-cheese-tomato-jar-of-91gm-2-1714372822.jpg?dim=700x0&dpr=1&q=100",
      name: "Liveasy Foods Baked Quinoa Puffs Cheese Tomato Jar Of 91gm",
      price: 299,
      discount_price: 167.44,
      percentage: 44,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/Y49603/friends-classic-adult-dry-pants-4x-absorption-m-size-25-48-inch-pack-of-10-2-1712229168.jpg?dim=700x0&dpr=1&q=100",
      name: "Friends Classic Adult Dry Pants 4x Absorption M Size 25-48 Inch Pack Of 10",
      price: 550,
      discount_price: 313.5,
      percentage: 43,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/U56180/aptagrow-health-and-nutrition-drink-powder-for-kids-growth-chocolate-400-g-2-1641795482.jpg?dim=700x0&dpr=1&q=100",
      name: "Aptagrow Health And Nutrition Drink Powder For Kids Growth Chocolate 400 G",
      price: 625,
      discount_price: 562.5,
      percentage: 10,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/L45607/hansaplast-active-ankle-binder-support-osfm-2-1704708116.jpg?dim=700x0&dpr=1&q=100",
      name: "Hansaplast Active Ankle Binder Support Osfm",
      price: 400,
      discount_price: 320,
      percentage: 20,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/D04145/dr-morepen-blood-pressure-monitor-model-bp-14-2-1713857489.jpg?dim=700x0&dpr=1&q=100",
      name: "Dr. Morepen Blood Pressure Monitor Model Bp 14",
      price: 1400,
      discount_price: 952,
      percentage: 32,
    },
    {
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/A59916/noviglo-face-wash-100-g-1-1715687350.jpg?dim=700x0&dpr=1&q=100",
      name: "Noviglo Face Wash 100 G",
      price: 529.1,
      discount_price: 423.28,
      percentage: 20,
    },
  ];

  return (
    <Container my={10} px={6} maxW={breakpoints['2xl']}>
      <Box py={6} mb={3}>
        <Heading as={"h2"} fontWeight={"700"} size={"lg"}>
          New Launches
        </Heading>
        <Text py={2}>New wellness range just for you!</Text>
      </Box>
      <Swiper
        height={"200px"}
        spaceBetween={30}
        slidesPerView={6}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      >
        {newlaunch.map((ele, i) => (
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
                  {ele.discount_price == 0 ? (
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
                {ele.discount_price == 0 ? null : (
                  <Box>
                    {" "}
                    <Text as={"b"}>₹{ele.discount_price}</Text>
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

export default NewLaunch;
