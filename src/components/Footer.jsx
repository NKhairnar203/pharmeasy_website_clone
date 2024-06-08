// src/components/Footer.js
import {
  ListItem,
  UnorderedList,
  Box,
  Container,
  Text,
  Flex,
  Image,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "@remixicon/react";
import { Link } from "react-router-dom";
import data from "../../db.json";

const Footer = () => {
  const breakpoints = {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  };
  return (
    <Container pt={14} maxW={breakpoints["2xl"]} bg={"#EEF4FF"} p={4}>
      <Stack w={"100%"} direction={["column", "row"]} display={"flex"} justifyContent={"space-between"}>
        <Box>
          <UnorderedList listStyleType={"none"} spacing={2}>
            <ListItem>
              <Text fontSize={"1.1rem"} fontWeight={700}>
                Company
              </Text>
            </ListItem>
            <ListItem>
              <Link>About Us</Link>
            </ListItem>
            <ListItem>
              <Link>Careers</Link>
            </ListItem>
            <ListItem>
              <Link>Blog</Link>
            </ListItem>
            <ListItem>
              <Link>Partner with PharmEasy</Link>
            </ListItem>
            <ListItem>
              <Link>Sell at PharmEasy</Link>
            </ListItem>
          </UnorderedList>
          <UnorderedList listStyleType={"none"} mt={6} spacing={2}>
            <ListItem>
              <Text fontSize={"1.1rem"} fontWeight={700}>
                Our Services
              </Text>
            </ListItem>
            <ListItem>
              <Link>Order Medicine</Link>
            </ListItem>
            <ListItem>
              <Link>Healthcare Products</Link>
            </ListItem>
            <ListItem>
              <Link>Lab Tests</Link>
            </ListItem>
            <ListItem>
              <Link>Find Nearest Collection Centre</Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <UnorderedList listStyleType={"none"} spacing={2}>
            <ListItem>
              <Text fontSize={"1.1rem"} fontWeight={700}>
                Featured Categories
              </Text>
            </ListItem>
            <ListItem>
              <Link>Top Products</Link>
            </ListItem>
            <ListItem>
              <Link>Elderly Care</Link>
            </ListItem>
            <ListItem>
              <Link>Personal Care</Link>
            </ListItem>
            <ListItem>
              <Link>Healthcare Devices</Link>
            </ListItem>
            <ListItem>
              <Link>Health Food and Drinks</Link>
            </ListItem>
            <ListItem>
              <Link>Skin Care</Link>
            </ListItem>
            <ListItem>
              <Link>Mother and Baby Care</Link>
            </ListItem>
            <ListItem>
              <Link>Accessories & Wearables</Link>
            </ListItem>
            <ListItem>
              <Link>Fitness Supplements</Link>
            </ListItem>
            <ListItem>
              <Link>Ayurvedic Care</Link>
            </ListItem>
            <ListItem>
              <Link>Healthcare Products</Link>
            </ListItem>
            <ListItem>
              <Link>Sexual Wellness</Link>
            </ListItem>
            <ListItem>
              <Link>Diabetic Care</Link>
            </ListItem>
            <ListItem>
              <Link>Health Condition</Link>
            </ListItem>
            <ListItem>
              <Link>Home Care</Link>
            </ListItem>
            <ListItem>
              <Link>Trending Products</Link>
            </ListItem>
            <ListItem>
              <Link>Summer Store</Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <UnorderedList listStyleType={"none"} spacing={2}>
            <ListItem>
              <Text fontSize={"1.1rem"} fontWeight={700}>
                Need Help
              </Text>
            </ListItem>
            <ListItem>
              <Link>Browse All Medicines</Link>
            </ListItem>
            <ListItem>
              <Link>Browse All Molecules</Link>
            </ListItem>
            <ListItem>
              <Link>Browse All Cities</Link>
            </ListItem>
            <ListItem>
              <Link>Browse All Areas</Link>
            </ListItem>
            <ListItem>
              <Link>Browse All Stores</Link>
            </ListItem>
            <ListItem>
              <Link>FAQs</Link>
            </ListItem>
          </UnorderedList>
          <UnorderedList listStyleType={"none"} mt={6} spacing={2}>
            <ListItem>
              <Text fontSize={"1.1rem"} fontWeight={700}>
                Policy Info
              </Text>
            </ListItem>
            <ListItem>
              <Link>Editorial Policy</Link>
            </ListItem>
            <ListItem>
              <Link>Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link>Vulnerability Disclosure Policy</Link>
            </ListItem>
            <ListItem>
              <Link>Terms and Conditions</Link>
            </ListItem>
            <ListItem>
              <Link>Customer Support Policy</Link>
            </ListItem>
            <ListItem>
              <Link>Return Policy</Link>
            </ListItem>
            <ListItem>
              <Link>Smartbuy Policy</Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box width={["100%", "100%", "170px"]}>
          <Box>
            <Text fontSize={"1.1rem"} fontWeight={700}>
              Follow us on
            </Text>
          </Box>
          <Flex
            mt={5}
            justifyContent={"space-between"}
            maxW={"200px"}
            mx="auto"
          >
            <RiInstagramLine size={"26px"} />
            <RiFacebookFill size={"26px"} />
            <RiYoutubeFill size={"26px"} />
            <RiTwitterFill size={"26px"} />
          </Flex>
        </Box>
      </Stack>

      <Box mt={10}>
        <Text fontSize={"1.1rem"} fontWeight={700}>
          Our Payment Partners
        </Text>
        <Flex
          mt={4}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"100%"}
        >
          {data.footer.map((ele, i) => (
            <Box  h={"20px"} key={i}>
              <Image w={"100%"} h={"100%"} src={ele.image} />
            </Box>
          ))}
          <Text textAlign={"center"} mt={4}>
            © 2024 PharmEasy. All Rights Reserved
          </Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Footer;
