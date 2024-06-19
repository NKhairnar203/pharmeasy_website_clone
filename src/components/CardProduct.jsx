import React from "react";
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import Delete from "../components/Delete";
import SelectDropdown from "../components/SelectDropdown";
const CardProduct = ({
  id,
  image,
  name,
  price,
  discount_price,
  percentage,
  by,
  delivery,
  qty,
}) => {
  return (
    <>
      <Box pb={3} border={"1px solid"}>
        <Grid templateColumns="repeat(3, auto)" gap={2}>
          <Box px={"20px"} py={"20px"} h={"130px"}>
            <Image h={"100%"} src={image} />
          </Box>
          <Box mt={"17px"}>
            <Heading fontSize={"1rem"} lineHeight={6} mr={10} fontWeight={500}>
              {name}
            </Heading>
            <Text color={"gray.400"} fontWeight={600} fontSize={".85rem"}>
              By {by}
            </Text>
            <Text my={1} color={"gray.400"} fontSize={".85rem"}>
              60 capule(s) in bottle
            </Text>
            <Box display={"flex"} alignItems={"center"}>
              <Text fontWeight={600} fontSize={".86rem"} color={"gray.400"}>
                MRP <Text as={"del"}>₹{price}*</Text>
              </Text>
              <Text fontWeight={700} fontSize={".93rem"} ml={1}>
                ₹{discount_price}*
              </Text>
              <Text
                ml={4}
                fontWeight={700}
                color={"red.300"}
                fontSize={".83rem"}
              >
                {percentage}% OFF
              </Text>
            </Box>
            <Text
              display={"flex"}
              color={"gray.500"}
              fontWeight={500}
              my={1}
              fontSize={".73rem"}
            >
              Delivery by{" "}
              <Text ml={1} color={"gray.700"}>
                {delivery[1]}
              </Text>
            </Text>
          </Box>
          <Box
            mt={"17px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"160px"}
            mb={"16px"}
          >
            <Delete />
            <SelectDropdown />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default CardProduct;
