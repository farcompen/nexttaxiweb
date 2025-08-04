"use client";

import { testimonialsData } from "@/utils/data";
import Image from "next/image";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaQuoteRight } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import SectionHeading from "../SectionHeading/SectionHeading";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    slidesToScroll: 1,
    loop: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-dem-gray pt-24 md:pt-section relative isolate">
      <div className="px-container">
        <SectionHeading label="CLIENT TESTIMONIALS">
          What Our Customer Say
        </SectionHeading>
        <div>
          <div className="mx-auto  ">
            <button
              onClick={scrollPrev}
              className="absolute left-2 md:left-[30%] bottom-[32%] flex items-center justify-center rounded-full bg-white text-black hover:bg-yellow hover:text-white duration-500 transition-all size-10 md:size-14 text-lg shadow-card-2 z-10"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 md:right-[30%] bottom-[32%] flex items-center justify-center rounded-full bg-white text-black hover:bg-yellow hover:text-white duration-500 transition-all size-10 md:size-14 text-lg shadow-card-2 z-10"
            >
              <FaArrowRight />
            </button>
            <div
              ref={emblaRef}
              className="mx-auto pb-24 md:pb-section py-5 overflow-hidden   max-w-screen-2xl"
            >
              <div className="flex items-center gap-7">
                {testimonialsData.map((review, index) => (
                  <article
                    className="group flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                    key={index}
                  >
                    <div className=" bg-white border duration-300 transition-all rounded border-transparent hover:border-black p-10 shadow-card">
                      <p className="text-dark-gray font-roboto mb-5 text-center">
                        {review.quote}
                      </p>
                      <div className="flex mb-4 justify-center items-center gap-1  text-yellow ">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-5">
                          <Image
                            src={review.image}
                            alt={review.name}
                            width={65}
                            height={64}
                            className="size-16 shrink-0 object-cover"
                          />
                          <div>
                            <h5 className="text-[22px] line-clamp-1 font-bold">
                              {review.name}
                            </h5>
                            <span className="text-sm font-roboto">
                              {review.role}
                            </span>
                          </div>
                        </div>
                        <FaQuoteRight className="text-black hidden md:block text-6xl" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
