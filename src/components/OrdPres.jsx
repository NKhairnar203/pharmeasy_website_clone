import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  GridItem,
  Tag,
  TagLabel,
  SimpleGrid,
} from "@chakra-ui/react";
import { Ri4kLine, RiAttachment2 } from "@remixicon/react";

const OrdPres = () => {
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };
  let data = [
    {
      id: 1,
      title: "Upload a photo of your prescription",
    },
    {
      id: 2,
      title: "Add delivery address and place the order",
    },
    {
      id: 3,
      title: "We will call you to confirm the medicines",
    },
    {
      id: 4,
      title:
        "Now, sit back! your medicines will get delivered at your doorstep",
    },
  ];

  return (
    <>
      <Box w={"100%"} h={"200px"}>
        <Box
          border={"1px solid #EEF4FF"}
          h={"100%"}
          mx={"auto"}
          rounded={"10px"}
          maxW={breakpoints["2xl"]}
        >
          <Flex w={"100%"} h={"100%"}>
            <Box h={"100%"} w={"100%"} bg={"#EEF4FF"} roundedLeft={"10px"}>
              <Flex
                h={"100%"}
                w={"100%"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Box ml={10} mt={2}>
                  <Image
                    w={"100px"}
                    src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"
                  />
                </Box>

                <Box h={"100px"}>
                  <Heading
                    fontSize={"1.3rem"}
                    fontWeight={500}
                    color={"gray.700"}
                  >
                    Order with Prescription
                  </Heading>
                  <Text py={"7px"} color={"gray.500 "}>
                    Upload prescription and we will deliver your medicines
                  </Text>
                  <Button
                    mt={"8px"}
                    leftIcon={<RiAttachment2 />}
                    colorScheme="teal"
                    variant="solid"
                  >
                    Upload
                  </Button>
                </Box>
              </Flex>
            </Box>
            <Box h={"100%"} w={"100%"} p={7}>
              <Text pb={2} fontWeight={700}>
                How does this work?
              </Text>
              <SimpleGrid
                p={6}
                h={"80%"}
                templateColumns="repeat(2, 1fr)}"
                gap={5}
              >
                {data.map((ele, i) => (
                  <GridItem key={i}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Tag
                        mr={"10px"}
                        size="lg"
                        colorScheme="cyan"
                        borderRadius="10"
                      >
                        <TagLabel>1</TagLabel>
                      </Tag>

                      <Text fontSize={".9rem"} lineHeight={5}>
                        {ele.title}
                      </Text>
                    </Box>
                  </GridItem>
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default OrdPres;
