import { RiArrowRightSLine, RiFileList2Line } from "@remixicon/react";
import SearchBox from "./SearchBox";
import Homecard from "./Homecard";
import { useState, useEffect } from "react";
import data from "../../db.json";
import axios from "axios";
import HomeCardSlider from "./HomeCardSlider";
import { Box, Text } from "@chakra-ui/react";

const HeadSection = () => {
  const [card, setCard] = useState([]);

  async function getData() {
    try {
      let res = await axios({
        method: "get",
        url: "http://localhost:3000/homecard",
      });
      setCard(res);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //  getData()
  // }, [])

  getData();
  return (
    <>
      <div className="w-full h-auto pt-20 max-sm:pt-14 sm:pt-14">
        <div className="max-w-screen-2xl max-sm:w-full h-96 max-xl:h-96 max-lg:h-60 max-md:h-60 bg-white mx-auto mt-6 bg-gradient-to-l from-yellow-50 via-white to-blue-50">
          <div className="lg:w-3/4 max-sm:w-full max-lg:w-full h-40 mx-auto ">
            <div className="grid grid-cols-6 grid-rows-3 justify-between pt-10 auto ">
              <div className="lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-end-2 max-sm:col-start-1 max-sm:col-end-7 max-sm:text-center lg:text-start max-sm:row-start-0 max-sm:row-end-1 sm:col-start-1 sm:col-end-7 sm:text-center sm:row-start-0 sm:row-end-1 lg:pb-4 lg:pt-8 ">
                <h1 className="font-semibold text-2xl ml-6">
                  What are you looking for?
                </h1>
              </div>
              <div className="lg:col-start-4 lg:col-span-7 lg:row-start-1 lg:row-end-2 max-sm:col-start-1 max-sm:col-end-7 max-sm:row-start-2 max-sm:row-end-3 max-sm:items-center max-sm:justify-center sm:col-start-1 sm:col-end-7 sm:row-start-2 sm:row-end-3 sm:items-center sm:justify-center lg:mr-6">
                <div className="flex justify-end items-end space-x-3 max-sm:justify-center max-sm:bg-green-100 max-sm:py-2 sm:justify-center sm:bg-green-100 lg:justify-end lg:bg-inherit sm:py-2 mt-4 lg:pt-10">
                  <h1 className="flex font-medium text-gray-700">
                    <RiFileList2Line className="mr-2" />
                    Order with prescription.
                  </h1>

                  <h1 className="font-bold text-sm items-center flex text-emerald-600 hover:text-emerald-700 hover:cursor-pointer">
                    UPLOAD NOW
                    <RiArrowRightSLine />
                  </h1>
                </div>
              </div>
              <div className="lg:col-start-1 lg:col-end-7 col-start-1 col-end-7 md:col-start-2 md:col-end-6 max-sm:row-start-1 max-sm:row-end-2 max-sm:px-3 sm:row-start-1 sm:row-end-2 lg:row-start-2 lg:row-end-3 sm:px-7 px-8 my-4 -z-0 ">
                <SearchBox />
              </div>
            </div>
          </div>
          <div className=" w-auto mt-10 py-8 px-24 max-lg:hidden">
            <HomeCardSlider/>
          </div>
        </div>
      </div>
      <Box w={"100%"} h={"auto"} px={7} py={10} hideFrom={["lg"]}>
        <Text fontSize={"1.3rem"} pt={2} fontWeight={500}>
          Discover Our Offerings
        </Text>
       <HomeCardSlider  />
      </Box>
    </>
  );
};

export default HeadSection;
