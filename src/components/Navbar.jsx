import React, { useContext, useState } from "react";
import logo from "../assets/logo_big.svg";
import express_delivery from "../assets/ic_express delivery.svg";
import Logo_mobile from "../assets/mobile-logo.svg";
import {
  RiArrowDownSLine,
  RiDiscountPercentLine,
  RiMenuFoldFill,
  RiShoppingCartLine,
  RiSmartphoneLine,
  RiUserLine,
} from "@remixicon/react";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Input,
  DrawerFooter,
  Box,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [menu, setMenu] = useState(false);
 let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toggleMenu() {
    setMenu(!menu);
    alert("hello");
  }

  const {
    logIn,
    auth: { isLoggedIn },
  } = useContext(AuthContext);

  async function handleSubmit() {
    try {
      let res = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });

      logIn(res.data.token);
      console.log(res.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  if(isLoggedIn){
      navigate("/")
  }
  return (
    <>
      <div className="fixed shadow-md w-full z-50">
        <div className="w-full h-16 max-sm:shadow-md max-md:shadow-md max-lg:shadow-md bg-white ">
          <div className="max-w-screen-2xl mx-auto h-16 px-10 flex items-center justify-between max-sm:w-full max-sm:px-2 max-lg:px-2">
            <div className=" w-96 flex divide-x justify-between max-sm:divide-none  max-lg: divide-none max-sm:divide max-2xl:divide-x max-2xl:divide-gray-100 max-sm:justify-start max-lg:justify-start items-center">
              <RiMenuFoldFill
                onClick={toggleMenu}
                className="ml-1.5 max-lg:mr-2 max-md:block max-xl:hidden max-sm:block  max-lg:block 2xl:hidden max-2xl:hidden"
              />
              <div className="w-36 flex item-center max-sm:ml-2 max-lg:px-1">
                <img
                  className="w-28 max-xl:hidden max-sm:block max-lg:block 2xl:hidden max-2xl:hidden"
                  src={Logo_mobile}
                  alt="logo"
                />
                <img
                  className="w-100 h-10 self-center max-sm:hidden max-lg:hidden max-xl:block 2xl:block max-2xl:block"
                  src={logo}
                  alt="logo"
                />
              </div>

              <div className=" w-52 pl-7 max-sm:hidden max-lg:hidden max-xl:block">
                <div className=" h-4 flex item-center ">
                  <img className="w-4" src={express_delivery} alt="" />
                  <p className="text-gray-600 text-sm pl-1">
                    Express delivery to
                  </p>
                </div>

                <div className="mt-1 flex ml-2 ">
                  <h5 className=" font-bold text-sm">400001 Mumbai</h5>

                  <RiArrowDownSLine size={20} className="pt-1 ml-1" />
                </div>
              </div>
            </div>
            {/* <SearchBox/> */}
            <div className=" h-12 w-auto gap-8 flex items-center justify-between max-sm:justify-end max-lg:justify-end max-xl:justify-end ">
              <Link
                to="/"
                className="bg-blue-100 hover:bg-slate-300 flex py-2 px-2 text-sm font-semibold rounded-md gap-2 items-center text-slate-700 max-sm:hidden max-lg:hidden max-xl:flex max-xl:mx-6"
              >
                <RiSmartphoneLine size={23} />
                Download App
              </Link>

              <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"sm"}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <Box
                    display={"flex"}
                    alignItems={"end"}
                    justifyContent={"space-between"}
                    h={"160px"}
                    px={"20px"}
                    bgGradient="linear(to-r, teal.300, teal.600)"
                  >
                    <Box w={"350px"} py={5}>
                      <Text fontSize={"22px"} color={"white"} fontWeight={700}>
                        Login/Sign up to continue with your order
                      </Text>
                    </Box>
                    <Box w={"200px"}>
                      <Image
                        w={"100%"}
                        src="https://assets.pharmeasy.in/web-assets/images/loginv2.svg?dim=1440x1440&q=75"
                      />
                    </Box>
                  </Box>

                  <DrawerBody>
                    <Card boxShadow={"none"}>
                      <CardBody>
                        <Text>Enter Email</Text>
                        <Input
                          my={3}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="Enter Reqres Email..."
                          isRequired={true}
                        />
                        <Text>Enter Password</Text>
                        <Input
                          alue={password}
                          onChange={(e) => setPassword(e.target.value)}
                          my={3}
                          type="password"
                          placeholder="Enter Regres Password ..."
                        />
                      </CardBody>
                      <CardFooter>
                        <Button
                          onClick={handleSubmit}
                          bg={"teal"}
                          color={"white"}
                          w={"100%"}
                        >
                          Login
                        </Button>
                      </CardFooter>
                    </Card>
                  </DrawerBody>

                  <DrawerFooter>
                    <Text color={"red"}>
                      Email: eve.holt@reqres.in Password: cityslicka
                    </Text>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              <Button
                bg={"none"}
                _hover={{ bg: "none" }}
                onClick={onOpen}
                className="flex font-semibold bg-none text-sm items-center gap-2 text-stone-700 hover:underline decoration-dashed decoration-0 max-sm:hidden max-lg:hidden max-xl:block max-xl:mx-3"
              >
                <RiUserLine size={20} />
                <p className="max-xl:hidden"> Hello, {"Log In"}</p>
              </Button>
              <Link
                to="/"
                className="flex font-semibold text-sm items-center gap-2 text-stone-700 hover:underline decoration-dashed decoration-0 max-sm:mr-4 max-lg:mr-4 max-xl:mx-3"
              >
                <RiDiscountPercentLine size={20} />
                <p className="max-sm:hidden max-lg:block max-xl:hidden">
                  Offer
                </p>
              </Link>
              <Link
                to="/cart"
                className="flex font-semibold text-sm items-center gap-2 text-stone-700 hover:underline decoration-dashed decoration-0 max-sm:mr-4 max-lg:mr-4 max-xl:ml-4"
              >
                <RiShoppingCartLine size={20} />
                <p className="max-sm:hidden max-lg:block max-xl:hidden">Cart</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-100 h-10  bg-white w-full">
          <div className="px-5 w-full h-full max-sm:flex max-lg:items-center  max-lg:block max-2xl:hidden max-2xl:flex max-xl:hidden max-sm:block max-md:flex max-lg:flex 2xl:hidden">
            <img className="w-4 h-5" src={express_delivery} alt="" />
            <p className="text-gray-600 text-sm pl-1">Express delivery to</p>
            <span className=" font-bold text-sm pl-1">400001 Mumbai</span>
            <RiArrowDownSLine size={20} className="pt-1 ml-0" />
          </div>
          <div className="max-2xl:block max-xl:block max-lg:hidden flex items-center h-full">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-center gap-9 font-semibold text-sm text-slate-700 max-w-screen-2xl ">
              <Link className="hover:text-emerald-600">Medicine</Link>
              <Link className="hover:text-emerald-600">Lab Tests</Link>
              <Link className="flex hover:text-emerald-600">
                Healthcare <RiArrowDownSLine size={20} />{" "}
              </Link>
              <Link className="hover:text-emerald-600">Health Blogs</Link>
              <Link className="hover:text-emerald-600">PLUS</Link>
              <Link className="hover:text-emerald-600">Offers</Link>
              <Link className="hover:text-emerald-600">Value Store</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
