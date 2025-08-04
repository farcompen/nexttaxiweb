"use client";

import useEmblaDotButton from "@/hooks/useEmblaDotButton";
import useEmblaCarousel from "embla-carousel-react";
import { LuQuote } from "react-icons/lu";

import { twMerge } from "tailwind-merge";
import { testimonialsData } from "@/utils/data";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: false,
    containScroll: false,
  });

  // This custom hook use for showing carousel dots
  const { selectedIndex, onDotButtonClick } = useEmblaDotButton(emblaApi);

  return (
    <section>
      <div className="max-w-container pb-24 md:pb-section px-container mx-auto">
        <div
          ref={emblaRef}
          className="overflow-hidden  pt-24 md:pb-section  pb-10"
        >
          <div className="flex gap-5 ">
            {testimonialsData.map((review) => (
              <div
                className="grow-0 group max-w-3xl shrink-0 basis-full lg:basis-1/2  "
                key={review.id}
              >
                <article className="min-h-[282px] relative isolate rounded-tl-[90px] bg-dem-gray px-8 pb-9 pt-24">
                  <div className=" left-28 h-[67px] bg-yellow absolute right-0 top-0 flex items-center">
                    <div className="relative isolate">
                      <div className="size-14 rounded-full grid place-content-center z-10 -translate-y-[80%] -translate-x-[140%] text-yellow shrink-0 bg-dark-green absolute left-0 bottom-0 text-2xl">
                        <LuQuote />
                      </div>
                      <Image
                        width={126}
                        height={126}
                        className="rounded-full mt-7 size-28 sm:size-[126px] -translate-y-1/3 -translate-x-1/2 border-4 shrink-0 object-cover border-white"
                        src={review.image}
                        alt={review.name}
                      />
                    </div>
                    <div className="flex items-center">
                      <h5 className="text-[22px] font-medium font-roboto text-black text-nowrap border-r-2 border-white pr-3 mr-3">
                        {review.name}
                      </h5>
                      <span className="hidden sm:block text-sm font-roboto text-black">
                        {review.role}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-dark-gray text-center sm:text-start font-roboto mb-6">
                      {review.quote}
                    </p>
                    <div className="flex mb-4 gap-1  items-center justify-center sm:justify-start  text-yellow ">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center flex-wrap">
          {testimonialsData.map((item, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className="size-6 rounded-full bg-dark-green grid place-content-center group "
            >
              <span
                className={twMerge(
                  "block duration-500 transition-all size-3 rounded-full bg-transparent group-hover:bg-yellow",
                  index === selectedIndex ? "bg-yellow" : "bg-transparent"
                )}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
