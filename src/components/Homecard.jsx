import React from 'react'
import { Card,Image, CardHeader, CardBody, CardFooter, Divider,Text, Center } from '@chakra-ui/react'

const Homecard = ({image,title,offer}) => {
  return (
    <>
      <Card
        w={["125px", "134px"]}
        h={["120px", "140px"]}
        boxShadow={"none"}
        _hover={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <CardHeader p={"0 20px 10px 20px"}>
          <Image src={image} w={"100px"} />
          <Divider />
        </CardHeader>
        <CardBody p={"0 20px 7px 20px"}>
          <Text
            align={"center"}
            color={"black"}
            fontSize={"1rem"}
            fontWeight={500}
          >
            {title}
          </Text>
        </CardBody>
        <CardFooter color={"red.300"} p={"0 20px 8px 20px"}>
          <Text m={"auto"} fontSize={"12px"} fontWeight={700}>
            {offer}
          </Text>
        </CardFooter>
      </Card>
    </>
  );
}

export default Homecard