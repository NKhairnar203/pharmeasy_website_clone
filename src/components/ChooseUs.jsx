import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ChooseUs = () => { 
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
      <Container maxW={breakpoints["2xl"]} bg={"#F8F9FF"} py={"30px"}>
        <Box>
          <Text fontSize={"1.53rem"} pl={10} fontWeight={600}>
            Why Choose Us?
          </Text>
        </Box>
        <Flex my={7} gap={5} justifyContent={"space-around"}>
          <Box
            h={"100px"}
           
            w={"300px"}
            alignItems={"center"}
            display={"flex"}
          >
            <Box w={"90px"}>
              <Image
                w={"100%"}
                src="https://assets.pharmeasy.in/apothecary/images/family.svg?dim=256x0"
              />
            </Box>
            <Box ml={2} w={"200px"}>
              <Heading fontSize={"20px"} fontWeight={700}>
                32 Million+
              </Heading>
              <Text pt={"4px"} fontSize={"16px"}>
                Registered users as of Mar 31, 2022
              </Text>
            </Box>
          </Box>
          <Box
            h={"100px"}
            
            w={"300px"}
            alignItems={"center"}
            display={"flex"}
          >
            <Box w={"90px"}>
              <Image
                w={"100%"}
                src="https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=256x0"
              />
            </Box>
            <Box ml={2} w={"200px"}>
              <Heading fontSize={"20px"} fontWeight={700}>
                36 Million+
              </Heading>
              <Text pt={"4px"} fontSize={"16px"}>
                Orders on Pharmeasy till date
              </Text>
            </Box>
          </Box>
          <Box
            h={"100px"}
           
            w={"300px"}
            alignItems={"center"}
            display={"flex"}
          >
            <Box w={"90px"}>
              <Image
                w={"100%"}
                src="https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=256x0"
              />
            </Box>
            <Box ml={2} w={"200px"}>
              <Heading fontSize={"20px"} fontWeight={700}>
                99000+
              </Heading>
              <Text pt={"4px"} fontSize={"16px"}>
                Unique items sold last 3 months
              </Text>
            </Box>
          </Box>
          <Box
            h={"100px"}
            
            w={"300px"}
            alignItems={"center"}
            display={"flex"}
          >
            <Box w={"90px"}>
              <Image
                w={"100%"}
                src="https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=256x0"
              />
            </Box>
            <Box ml={2} w={"200px"}>
              <Heading fontSize={"20px"} fontWeight={700}>
                19000+
              </Heading>
              <Text pt={"4px"} fontSize={"16px"}>
                Pin codes serviced last 3 months
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default ChooseUs