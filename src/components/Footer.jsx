
import {
  ListItem,
  UnorderedList,
  Box,
  Container,
  Text,
  Flex,
  Spacer,
  Image
} from "@chakra-ui/react";
import {  RiFacebookFill, RiInstagramLine, RiTwitterFill,  RiYoutubeFill, } from "@remixicon/react";
import { Link } from "react-router-dom";
import data from "../../db.json"

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
    <>
      <Container pt={14} maxW={breakpoints["2xl"]} h={"140vh"} bg={"#EEF4FF"}>
        <Flex>
          <Box>
            <UnorderedList listStyleType={"none"}>
              <ListItem mb={"5px"}>
                <Text fontSize={"1.1rem"} fontWeight={700}>
                  Company
                </Text>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>About Us</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Careers</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Blog</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Partner with PharmEasy</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Sell at PharmEasy</Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList listStyleType={"none"}>
              <ListItem mt={"25px"} mb={"5px"}>
                <Text fontSize={"1.1rem"} fontWeight={700}>
                  Our Services
                </Text>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Order Medicine</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Healthcare Products</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Lab Tests</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Find Nearest Collection Centre</Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Spacer />
          <Box>
            <UnorderedList listStyleType={"none"}>
              <ListItem mb={"5px"}>
                <Text fontSize={"1.1rem"} fontWeight={700}>
                  Featured Categories
                </Text>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Top Products</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Elderly Care</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Personal Care</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Healthcare Devices</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Health Food and Drinks</Link>
              </ListItem>

              <ListItem my={"8px"}>
                <Link>Skin Care</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Mother and Baby Care</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Accessories & Wearables</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Fitness Supplements</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Ayurvedic Care</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Healthcare Products</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Sexual Wellness</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Diabetic Care</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Health Condition</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Home Care</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Trending Products</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Summer Store</Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Spacer />
          <Box>
            <UnorderedList listStyleType={"none"}>
              <ListItem mb={"5px"}>
                <Text fontSize={"1.1rem"} fontWeight={700}>
                  Need Help
                </Text>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Browse All Medicines</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Browse All Molecules</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Browse All Cities</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Browse All Areas</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Browse All Stores</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>FAQs</Link>
              </ListItem>
            </UnorderedList>

            <UnorderedList listStyleType={"none"}>
              <ListItem mt={"25px"} mb={"5px"}>
                <Text fontSize={"1.1rem"} fontWeight={700}>
                  Policy Info
                </Text>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Editorial Policy</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Privacy Policy</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Vulnerability Disclosure Policy</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Terms and Conditions</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Customer Support Policy</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Return Policy</Link>
              </ListItem>
              <ListItem my={"8px"}>
                <Link>Smartbuy Policy</Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Spacer />
          <Box width={"170px"}>
            <Box>
              <Text fontSize={"1.1rem"} fontWeight={700}>
                Follow us on
              </Text>
            </Box>
            <Box mt={5} justifyContent={"space-between"} display={"flex"}>
              <RiInstagramLine size={"26px"} />
              <RiFacebookFill size={"26px"} />
              <RiYoutubeFill size={"26px"} />
              <RiTwitterFill size={"26px"} />
            </Box>
          </Box>
        </Flex>
        <Box ml={5} mt={10}>
          <Text fontSize={"1.1rem"} fontWeight={700}>
            Our Payment Partners
          </Text>
          <Box  display={"flex"}>
            <Box
              mt={"20px"}
              w={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              {data.footer.map((ele, i) => (
                <Box h={"20px"} key={i}>
                  <Image w={"100%"} h={"100%"} src={ele.image} />
                </Box>
              ))}
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"right"}
                h={"100%"}
                w={"40%"}
              >
                <Text>© 2024 PharmEasy. All Rights Reserved</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Footer