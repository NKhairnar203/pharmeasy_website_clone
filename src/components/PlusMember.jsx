import { Box, Container, Divider, Flex, Spacer, Text,Button, Image } from "@chakra-ui/react";
import { RiArrowRightCircleFill } from "@remixicon/react";

const PlusMember = () => {
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
      <Container
        maxW={breakpoints["2xl"]}
        bgGradient="linear(to-r, #A073C1,#8678DE, #A073C1)"
        h={"170"}
        my={5}
      >
        <Flex>
          <Box pl={5} pt={8} h={"170"} w={"400px"}>
            <Flex fontSize={"23px"} color={"white"} fontWeight={700} w={280}>
              Become a <Spacer />
              <Text color={"yellow.400"}>+Plus</Text>
              <Spacer /> Member
            </Flex>
            <Text py={"10px"} color={"gray.300"}>
              And enjoy extra bachat on every order
            </Text>
            <Divider pt={3} w={300} />
          </Box>
          <Box h={"170"} w={"70%"}>
            <Flex>
              <Box pt={8} w={"60%"}>
                <Text color={"white"} fontSize={"1.09rem"} fontWeight={600}>
                  Save 5% on medicines, 50% on 1st lab test & get FREE delivery
                  with PLUS membership Know more >
                </Text>
                <Button
                  rightIcon={<RiArrowRightCircleFill color="white" />}
                  colorScheme="yellow"
                  color={"white"}
                  mt={6}
                >
                  Explore Now
                </Button>
              </Box>
              <Image mt={4} src="https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0" />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default PlusMember;
