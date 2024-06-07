import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import React, { useRef } from "react";
import Slider from "react-slick";
import data from "../../db.json";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  const slider = useRef(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick, currentSlick } = props;

    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    swipe: false,
    autoplaySpeed: 2000,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
 
  return (
    <>
      <div className=" relative max-w-screen-2xl m-auto">
        <button
          className=" absolute left-1 top-2/4 bg-black rounded-full text-white p-2 z-50"
          onClick={() => slider.current.slickPrev()}
        >
          <RiArrowLeftSLine />{" "}
        </button>
        <button
          className=" absolute right-1 top-2/4 bg-black rounded-full text-white p-2 z-50"
          onClick={() => slider.current.slickNext()}
        >
          <RiArrowRightSLine />
        </button>
        <Slider
          ref={slider}
          className=" px-9 py-10  max-w-screen-2xl m-auto"
          {...settings}
        >
          {data.customslide.map((ele, i) => (
            <Link key={i} className="">
              <div className="rounded-lg border ml-6 h-auto">
                <img className="rounded-lg " src={ele.image} alt="" />
              </div>
            </Link>
          ))}
         
        </Slider>
      </div>
    </>
  );
}
