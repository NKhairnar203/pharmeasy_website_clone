import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Card, CardFooter, Container, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { RiArrowRightLine, RiHeart2Line } from "@remixicon/react";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Container pt={120} mb={100} maxW={"container.xl"} h={"100vh"}>
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
        <Flex
          mt={3}
          pt={3}
          justifyContent={"space-around"}
          width={"100%"}
          minH={"400px"}
         
        >
          <Card
            boxShadow={"none"}
            border={"1px solid gray"}
            h={"350px"}
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
                {0} Items in your Cart{" "}
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
              <Image
                mt={24}
                ml={"266px"}
                w={100}
                src="https://assets.pharmeasy.in/web-assets/images/emptyCart.png?dim=256x256&q=75"
              />
            </Box>
          </Card>
          <Card
            boxShadow={"none"}
            border={"1px solid gray"}
           h={"200"}
            w={"md"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={4}
              borderBottom={"1px solid gray"}
            >
              <Text fontSize={"1.1rem"} fontWeight={700}>
                Cart total: { "00.00" }
              </Text>
            </Box>
            <CardFooter>
              <Button w={"100%"}>
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default Cart;
