"use client";

import Slider from "react-slick";
import { twMerge } from "tailwind-merge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { herosData } from "@/utils/data";
import { useRef, useState } from "react";
import HeroCard from "./HeroCard";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1, // Changed from 2 to 1
    slidesToScroll: 1,
    fade: true,

    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  const handleButtonClick = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute z-40 bottom-16 w-full md:w-fit md:left-16 md:top-1/2 md:-translate-y-1/2 flex flex-row justify-center md:justify-center items-center md:items-start md:flex-col gap-3">
        {herosData.map((data, index) => (
          <button
            onClick={(e) => handleButtonClick(index)}
            key={index}
            className={twMerge(
              " rounded-full size-5 hover:bg-purple transition-all duration-500",
              index === activeSlide ? "bg-yellow" : "bg-steel-gray"
            )}
          ></button>
        ))}
      </div>

      <section>
        <Slider ref={sliderRef} {...settings}>
          {herosData.map((hero, index) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </Slider>
      </section>
    </div>
  );
};
export default Hero;
