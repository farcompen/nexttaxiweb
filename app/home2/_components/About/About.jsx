import Image from "next/image";

import { RiTaxiWifiFill } from "react-icons/ri";
import { FaCheck, FaTaxi } from "react-icons/fa6";

import Button from "@/components/Button";
const About = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-container">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 py-24 md:py-section lg:items-center">
        <div className="relative isolate">
          <Image
            width={720}
            height={660}
            about="about"
            className="w-full rounded max-w-3xl mx-auto"
            src="/home2/about/about.png"
            alt="about"
          />
          <div className="absolute inset-0 justify-end  pt-section flex ">
            <div className="w-[214px] border-yellow border-2 rounded  flex items-center justify-center h-[97px] flex-col gap-1 bg-white ">
              <h4 className="text-5xl font-bold font-roboto">25</h4>
              <span className="text-lg text-dark-gray">Years Experience</span>
            </div>
          </div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="text-sm text-yellow mb-5 font-bold uppercase"
          >
            Know about Hey Texico
          </div>

          <h2
            data-aos="fade-up"
            className="text-4xl sm:text-5xl mb-7 font-bold font-space_grotesk sm:leading-snug leading-snug"
          >
            Taxi Driver was one of the happiest moments my carer
          </h2>
          <p className="text-dark-gray max-w-[580px] mb-8">
            Sed non odio non elit porttitor tincidunt. Donec fermentum, elit sit
            amet gravida molestie, orci dui eleifend sem, at blandit ipsum diam
            non purus. Duis dapibus nisi eget vehicula dignissim. Sed sagittis
            aliquam ante at consequat. Proin dolor ante, tincidunt vel iaculis
            vel
          </p>
          <div className="mb-10">
            <div className="flex group  mb-8 items-center gap-6">
              <div className="size-[70px] bg-yellow text-black grid place-content-center text-4xl rounded-full bg-purple group-hover:bg-black  group-hover:text-white transition-all duration-500 shrink-0">
                <RiTaxiWifiFill />
              </div>

              <div>
                <h5 className="mb-1 text-xl font-bold">Professional Driver</h5>
                <p className="text-dark-gray leading-normal max-w-[330px]">
                  Fusce luctus ante eget urna elementaa molestie tortor congue.
                  In hacplate
                </p>
              </div>
            </div>

            <div className="flex group  gap-6 items-center">
              <div className="size-[70px] bg-yellow text-black grid place-content-center text-4xl rounded-full bg-purple group-hover:bg-black group-hover:text-white transition-all duration-500 shrink-0">
                <FaTaxi />
              </div>

              <div>
                <h5 className="mb-1 text-xl font-bold">Supper Taxi Car</h5>
                <p className="text-dark-gray leading-normal max-w-[330px]">
                  Fusce luctus ante eget urna elementaa molestie tortor congue.
                  In hacplate
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-4">
              <FaCheck className="text-yellow fill-yellow text-2xl" />
              <h6 className=" font-bold text-lg font-roboto">
                Easy & Emergancy Solution Anytime
              </h6>
            </div>
            <div className="flex items-center gap-4">
              <FaCheck className="text-yellow fill-yellow text-2xl" />
              <h6 className=" font-bold text-lg font-roboto">
                Getting Afroadble Price upto 2 Years
              </h6>
            </div>
          </div>

          <div className="flex items-center gap-7">
            <Button className="w-full sm:w-[180px] bg-yellow text-black hover:text-white">
              Know me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
