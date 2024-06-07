import React, { useContext } from "react";
import Navbar from '../components/Navbar';
import HeadSection from "../components/HeadSection";
import CustomSlides from "../components/CustomSlides";
import HealthConcern from '../components/HealthConcern';
import OrdPres from '../components/OrdPres';
import Categories from '../components/Categories';
import NewLaunch from '../components/NewLaunch';
import TrendingNear from '../components/TrendingNear';
import PlusMember from '../components/PlusMember';
import LabTests from '../components/LabTests';
import FutureBrands from "../components/FutureBrands";
import Spotlight from "../components/Spotlight";
import SwaperSlide from "../components/Swaperslide";
import ChooseUs from "../components/ChooseUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      
      <HeadSection />
      <CustomSlides />
      <HealthConcern  />
      <OrdPres/>
      <Categories  />
      <NewLaunch/>
      <TrendingNear/>
      <PlusMember/>
      <LabTests/>
      <FutureBrands/>
      <Spotlight/>
      <SwaperSlide/>
      <ChooseUs/>
      
    </>
  );
}

export default Home
