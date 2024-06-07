import {
  Box,
  Container,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tag,
  Heading,
  Flex,
  StatNumber,
  Stat,
  StatHelpText,
  Image,
  Spacer
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import data from "../../db.json"

const LabTests = () => {
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };

  return (
    <>
      <Container maxW={breakpoints["2xl"]}>
        <Box  mt={16} display={"flex"} justifyContent={"space-between"}>
          <Text fontWeight={600} fontSize={"25px"}>
            Frequently Booked Lab Tests
          </Text>
          <Box
            fontWeight={700}
            color={"green.500"}
            _hover={{ color: "green.800" }}
          >
            <Link color="green">View All</Link>
          </Box>
        </Box>
        <Box  display={"flex"} gap={6} my={7}>
          {data.labtests.map((ele, i) => (
            <Link key={i}>
              <Card boxShadow={"none"} _hover={{boxShadow:"md"}} h={"300px"} bg={ele.bg} maxW={"300px"}>
                <CardHeader pb={2}>
                  <Tag py={2} color={"white"} bg={"red.300"} fontSize={"1rem"}>
                    {ele.off}% OFF
                  </Tag>
                  <Text
                    pt={3}
                    noOfLines={2}
                    fontSize={"1.2rem"}
                    fontWeight={600}
                  >
                    {ele.heading}
                  </Text>
                </CardHeader>
                <CardBody pt={0}>
                  <Text>
                    {ele.info}
                  </Text>
                </CardBody>
                <CardFooter p={0} pl={"20px"}>
                  <Flex w={"100%"}>
                    <Box pt={"20px"}>
                      <Stat>
                        <Text
                          fontSize={"1.13rem"}
                          color={"gray.500"}
                          as={"del"}
                          fontWeight={600}
                        >
                          ₹{ele.price}
                        </Text>
                        <StatNumber>₹{ele.current_price}</StatNumber>
                      </Stat>
                    </Box>
                    <Spacer />
                    <Box>
                      <Image
                        borderBottomRightRadius={"10px"}
                        w={100}
                        h={100}
                        src={ele.image}
                      />
                    </Box>
                  </Flex>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default LabTests;
