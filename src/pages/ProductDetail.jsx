import {
  Box,
  Image,
  Text,
  Badge,
  Button,
  useColorMode,
  Container,
  Flex,
  Card,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import axios from "axios";
import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiArrowRightSLine } from "@remixicon/react";
import SelectDropdown from "../components/SelectDropdown";

const ProductDetail = () => {
  const { colorMode } = useColorMode();
  const { id } = useParams();
  const [product, setProduct] = useState({});
   const [addCart, setAddCart] = useState(0);
   const [cart, setCart] = useState({
     id: id,
     
     
   });
   


  async function handleAddToCart(){
      // setCart(product.id,product.name)
      
      try {
      const newProduct = {
        id: id,
        name: "",
        image: "",
        quantity: addCart,
        price: product.price,
        discount_price: product.discount_price,
        percentage: product.percentage,
        by: "Nilesh",
        delivery: ["Delivery by", "Tomorrow, before 10:00 pm"],

      };

      let res = await axios({
        method: "post",
        url: `http://localhost:3000/cart`,
        data: newProduct,
      });

      console.log(res)
    
    } catch (error) {
      console.log(error);
    }
   }
   

  async function fetchData(id) {
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/newlaunch/${id}`,
      });
      setProduct(res.data);
      console.log(res.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);






  const breakpoints = {
    xl: "80em",
    "2xl": "96em", 
  };
  return (
    <>
      <Box width={"100%"} h={"110px"}></Box>
      <Container
        maxW={breakpoints["2xl"]}
        h={"400px"}
        borderWidth="1px"
        borderRadius="lg"
        bg={colorMode === "light" ? "white" : "gray.700"}
      >
        <Breadcrumb spacing="8px" separator={<RiArrowRightSLine />}>
          <BreadcrumbItem>
            <Link to="/">
              {" "}
              <Text fontWeight={700} color={"green.600"}>
                Home
              </Text>{" "}
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            {" "}
            <BreadcrumbLink>{product.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Card boxShadow={"none"} w={"700px"}>
          <Flex alignItems={"center"} mt={"60px"}>
            <Card h={"auto"} w={"220px"}>
              <Image w={"100%"} src={product.image} />
            </Card>
            <Box ml={10} w={"350px"}>
              <Text fontSize={"1.5rem"} fontWeight={700}>
                {product.name}
              </Text>
              <Box display={"flex"}>
                <Box>
                  <Box
                    display={"flex"}
                    w={"300px"}
                    columnGap={"2"}
                    alignItems={"end"}
                  >
                    <Text fontSize={"1.3rem"} fontWeight={700}>
                      ₹{product.discount_price}
                    </Text>

                    <Text as={"del"} color={"gray.500"} fontWeight={600}>
                      MRP ₹999
                    </Text>
                    <Badge variant="solid" colorScheme="red">
                      {product.percentage}% OFF
                    </Badge>
                  </Box>
                  <Text mt={-1} color={"gray.500"} fontSize={".6rem"}>
                    Inclusive of all taxes
                  </Text>
                  <Text mt={2} fontWeight={600} fontSize={".80rem"}>
                    Delivery by Tomorrow, before 10:00 pm
                  </Text>
                </Box>
                <Box mt={5} display={"flex"} alignItems={"center"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <Button
                      isDisabled={addCart === 0}
                      onClick={() => {
                        setAddCart(addCart - 1);
                      }}
                    >
                      -1
                    </Button>
                    <Text mx={6} fontSize={"20px"} fontWeight={600}>{addCart}</Text>
                    <Button
                      onClick={() => {
                        setAddCart(addCart + 1);
                      }}
                    >
                      +1
                    </Button>
                  </Box>
                  <Button mx={5} onClick={handleAddToCart} colorScheme="teal">
                    Add To Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Card>
      </Container>
    </>
  );
};

export default ProductDetail;
