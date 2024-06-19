import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Grid,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import { RiDeleteBin6Line, RiDeleteBinLine } from "@remixicon/react";
import data from "../../db.json"
import React from "react";

const Delete = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button color={"gray.400"} bg={"none"} onClick={onOpen}>
        <RiDeleteBinLine size={"18px"} />{" "}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove from Cart?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(3, auto)" gap={2}>
              <Box px={"20px"} h={"130px"}>
                <Image
                  h={"100%"}
                  src="https://cdn01.pharmeasy.in/dam/products_otc/O87078/pharmeasy-diabetic-protein-powder-french-vanilla-flavour-jar-of-1kg-6.1-1717587480.jpg?dim=1440x0"
                />
              </Box>
              <Box>
                <Heading
                  fontSize={"1rem"}
                  lineHeight={6}
                  mr={10}
                  fontWeight={500}
                >
                  Everherb (By Pharmeasy) Flaxseed Omega 3 - Essential Fatty
                  Acids - Healthy Heart - Bottle Of 60
                </Heading>
                <Text color={"gray.400"} fontWeight={600} fontSize={".85rem"}>
                  By Nilesh
                </Text>
                <Text my={1} color={"gray.400"} fontSize={".85rem"}>
                  60 capule(s) in bottle
                </Text>
                <Box display={"flex"} alignItems={"center"}>
                  <Text fontWeight={600} fontSize={".86rem"} color={"gray.400"}>
                    MRP <Text as={"del"}>₹100*</Text>
                  </Text>
                  <Text fontWeight={700} fontSize={".93rem"} ml={1}>
                    ₹80*
                  </Text>
                  <Text
                    ml={4}
                    fontWeight={700}
                    color={"red.300"}
                    fontSize={".83rem"}
                  >
                    51% OFF
                  </Text>
                </Box>
              </Box>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" _hover={{bg:"none"}} mr={3} onClick={onClose}>
              Remove
            </Button>
            <Button colorScheme="green.400" color={"green.600"} variant="outline">Save for Later</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Delete;
