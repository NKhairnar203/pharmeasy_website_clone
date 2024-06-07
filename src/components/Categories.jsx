import { Container, Image,Box,Text, Card, Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import data from "../../db.json";


const Categories = () => {

  
const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};
 

  return (
    <Container my={10} px={6}  maxW={breakpoints['2xl']}>
      <Box py={6} mb={3}>
        <Heading as={"h2"} fontWeight={"700"} size={"lg"}>
          {data.categories.headding}
        </Heading>
        <Text my={2}>{}</Text>
      </Box>
      <Swiper
        height={"200px"}
        spaceBetween={10}
        slidesPerView={7}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      >
        {data.categories.data.map((ele, i) => (
          <SwiperSlide key={i}>
            <Link>
              <Box w={"135px"}>
                <Card
                  w={"135px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  h={"145px"}
                  _hover={{ boxShadow: "lg" }}
                >
                  <Image w={"115px"} h={"110px"} src={ele.image} />
                </Card>
                <Text
                  fontWeight={"600"}
                  my={"12px"}
                  textAlign={"center"}
                  fontSize={".95rem"}
                >
                  {ele.name}
                </Text>
              </Box>
            </Link>
          </SwiperSlide>
        ))}
       
      </Swiper>
    </Container>
  );
};

export default Categories;
