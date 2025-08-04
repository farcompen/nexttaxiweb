"use client";

import { drivers } from "@/utils/data";

import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa6";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

const Drivers = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
    },
    []
  );

  return (
    <section className="py-24 md:py-section  bg-dem-gray">
      <div className="max-w-container  px-container mx-auto">
        <SectionHeading className="text-yellow" label="Our Drivers">
          Our Expert Drivers
        </SectionHeading>
      </div>
      <div className="max-w-container  mx-auto px-container ">
        <div ref={emblaRef} className="overflow-hidden py-16">
          <div className="flex  ">
            {drivers.map((driver) => (
              <div
                className="grow-0  shrink-0 basis-full sm:basis-1/2 md:basis-1/3"
                key={driver.id}
              >
                <article className="relative isolate border-r-[20px] sm:mr-7  border-black group hover:border-yellow duration-500 transition-all">
                  <div className="absolute -translate-y-12 h-12 bg-[#d8d8d8] w-[158px] pt-2 flex group-hover:bg-[#fff315] text-[#d8d8d8] group-hover:text-[#fff315] duration-500 transition-all justify-center top-0 rounded-t-2xl left-1/2 -translate-x-1/2">
                    <div className="bg-black flex items-center justify-center  w-20 rounded uppercase font-bold font-roboto text-2xl">
                      Taxi
                    </div>
                  </div>

                  <div className=" absolute translate-y-10 translate-x-5 bottom-0 right-0 bg-white p-4  shadow-card-3">
                    <div className="flex flex-col gap-2">
                      <Link
                        href="https://instagram.com/"
                        target="_blank"
                        className="size-[34px] grid place-content-center bg-dem-gray hover:text-white hover:bg-yellow transition-all duration-500"
                      >
                        <FaInstagram />
                      </Link>
                      <Link
                        href="https://facebook.com/"
                        target="_blank"
                        className="size-[34px] grid place-content-center bg-dem-gray hover:text-white hover:bg-yellow transition-all duration-500"
                      >
                        <FaFacebookF />
                      </Link>
                      <Link
                        href="https://linkedin.com/"
                        target="_blank"
                        className="size-[34px] grid place-content-center bg-dem-gray hover:text-white hover:bg-yellow transition-all duration-500"
                      >
                        <FaLinkedinIn />
                      </Link>
                      <Link
                        href="https://pinterest.com/"
                        target="_blank"
                        className="size-[34px] grid place-content-center bg-dem-gray hover:text-white hover:bg-yellow transition-all duration-500"
                      >
                        <FaPinterest />
                      </Link>
                    </div>
                  </div>

                  <div className="w-[250px] flex flex-col justify-center items-center h-[88px] shadow-card-3 absolute left-0 bottom-0 bg-white translate-y-1/2">
                    <h5 className="text-[22px] font-bold">{driver.name}</h5>
                    <span className="text-dark-gray">{driver.position}</span>
                  </div>

                  <Image
                    src={driver.image}
                    width={350}
                    height={440}
                    className="w-full h-[440px] object-cover"
                    alt={driver.name}
                  />
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Drivers;
