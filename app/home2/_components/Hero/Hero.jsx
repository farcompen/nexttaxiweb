"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import { herosData2 } from "@/utils/data";
import { useCallback } from "react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import HeroCard from "./HeroCard";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      slidesToScroll: 1,
      loop: true,
      containScroll: false,
    },
    [Fade(), Autoplay({ playOnInit: false, delay: 4000 })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative isolate">
      <button
        onClick={scrollPrev}
        className="absolute right-[52%] sm:right-24  flex items-center justify-center rounded-full  text-yellow hover:bg-blue  duration-500 transition-all w-[60px] h-10 bg-black text-wrap hover:bg-yellow hover:text-black text-lg shadow-card-2 z-10 bottom-6 sm:bottom-16"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-[32%] sm:right-24  flex items-center justify-center rounded-full   text-yellow hover:bg-blue h duration-500 transition-all w-[60px] h-10 bg-black text-wrap hover:bg-yellow hover:text-black text-lg shadow-card-2 z-10 bottom-6 sm:bottom-section"
      >
        <FaArrowRight />
      </button>
      <div>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex ">
            {herosData2.map((hero, index) => (
              <div className="grow-0 shrink-0 basis-full " key={index}>
                <HeroCard hero={hero} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
