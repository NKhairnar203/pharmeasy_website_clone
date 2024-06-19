import {
  Box,
  Button,
  Card,
  CardFooter,
  Container,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import data from "../../db.json";
import { RiArrowRightLine, RiHeart2Line } from "@remixicon/react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardProduct from "../components/CardProduct";
import { useEffect, useState } from "react";
const Cart = () => {
  const [product, setProduct] = useState([]);

  async function fetchData() {
    try {
      const res = await axios({
        method: "get",
        url: "http://localhost:3000/cart",
      });
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const array = [];
  console.log(product);
  product.forEach((ele) => array.push(ele.price));
  const initialValue = 0;
  let addition = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  console.log(addition);
  console.log(array);
  return (
    <>
      <Container pt={120} mb={100} maxW={"container.xl"} h={"auto"}>
        <Breadcrumb spacing="8px" separator={<RiArrowRightLine />}>
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
            <BreadcrumbLink>Cart</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex mt={3} pt={3} justifyContent={"space-around"} width={"100%"}>
          <Card
            boxShadow={"none"}
            border={"1px solid gray"}
            h={"auto"}
            w={"2xl"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={4}
              borderBottom={"1px solid gray"}
            >
              <Text fontSize={"1.1rem"} fontWeight={700}>
                {product.length} Items in your Cart{" "}
              </Text>
              <Link to="#">
                <Text
                  color={"green.600"}
                  alignItems={"center"}
                  display={"flex"}
                >
                  <RiHeart2Line size={"20px"} />
                  <Text fontWeight={"600"} ml={2}>
                    Save For Later
                  </Text>
                </Text>
              </Link>
            </Box>
            <Box h={"100%"} w={"100%"}>
              {data.cart.length > 0 ? (
                <>
                  {data.cart.map((ele) => (
                    <CardProduct key={ele.id} {...ele} />
                  ))}
                </>
              ) : (
                <Image
                  mt={24}
                  ml={"266px"}
                  w={100}
                  src="https://assets.pharmeasy.in/web-assets/images/emptyCart.png?dim=256x256&q=75"
                />
              )}
            </Box>
          </Card>
          <Card boxShadow={"none"} border={"1px solid gray"} h={"200"} w={"md"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={4}
              borderBottom={"1px solid gray"}
            >
              <Text fontSize={"1.1rem"} fontWeight={700}>
                Cart total: {addition}
              </Text>
            </Box>
            <CardFooter>
              {product.length===0 ? <Button w={"100%"}>Proceed to Checkout</Button> :
              <Button w={"100%"} _hover={{bg:"teal.700"}} bg={"teal.600"} color={"white"} >Add Delivery Address</Button>}
            </CardFooter>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default Cart;
