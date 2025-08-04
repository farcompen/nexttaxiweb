"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { IoCallOutline, IoLocation, IoMail } from "react-icons/io5";

const Companies = () => {
  return (
    <section className="bg-dem-gray pt-24 md:pt-section">
      <div className="max-w-container px-container  mx-auto">
        <Marquee pauseOnHover>
          <div className="flex justify-evenly mb-10 items-center flex-wrap">
            <Image
              className=" mx-16"
              src="/home2/companies/c1.png"
              width={70}
              height={60}
              alt=""
            />
            <Image
              className=" mx-16"
              src="/home2/companies/c2.png"
              width={70}
              height={60}
              alt=""
            />

            <Image
              className=" mx-16"
              src="/home2/companies/c3.png"
              width={70}
              height={60}
              alt=""
            />
            <Image
              className=" mx-16"
              src="/home2/companies/c4.png"
              width={70}
              height={60}
              alt=""
            />
            <Image
              className=" mx-16"
              src="/home2/companies/c5.png"
              width={70}
              height={60}
              alt=""
            />
            <Image
              className=" mx-16"
              src="/home2/companies/c1.png"
              width={70}
              height={60}
              alt=""
            />
          </div>
        </Marquee>

        <div className="max-w-[1100px] mb-24 lg:mb-0 rounded-2xl lg:rounded-none overflow-hidden lg:translate-y-1/2 mx-auto grid lg:grid-cols-3">
          <article className="h-[152px] relative overflow-hidden group text-black hover:text-white hover:bg-black duration-500 transition-all flex items-center justify-center bg-yellow">
            <Image
              width={63}
              height={83}
              alt="bg-yellow"
              className="absolute -top-10 left-[18px]"
              src="/home2/companies/card-yellow.png"
            />
            <Image
              width={63}
              height={83}
              alt="bg-yellow"
              className="absolute -bottom-10 left-24"
              src="/home2/companies/card-black.png"
            />

            <div data-aos="fade-up" className="flex items-center gap-4">
              <div className="rounded-full bg-black text-yellow text-2xl size-12  grid place-content-center group-hover:bg-yellow group-hover:text-black duration-500 transition-all">
                <IoCallOutline />
              </div>
              <div className="flex flex-col ">
                <span className="text-sm font-medium">Phone Number</span>
                <h5 className="text-lg font-bold font-roboto">
                  + (450) 458 987 345
                </h5>
              </div>
            </div>
          </article>

          <article className=" overflow-hidden relative h-[152px] group text-black hover:text-white hover:bg-black duration-500 transition-all flex items-center justify-center bg-yellow">
            <Image
              width={63}
              height={83}
              alt="bg-yellow"
              className="absolute -top-10 left-[18px]"
              src="/home2/companies/card-yellow.png"
            />
            <Image
              width={63}
              height={83}
              alt="bg-yellow"
              className="absolute -bottom-10 left-24"
              src="/home2/companies/card-black.png"
            />

            <div data-aos="fade-up" className="flex items-center gap-4">
              <div className="rounded-full bg-black text-yellow text-2xl size-12  grid place-content-center group-hover:bg-yellow group-hover:text-black duration-500 transition-all">
                <IoLocation />
              </div>
              <div className="flex flex-col ">
                <span className="text-sm font-medium">Our Location</span>
                <h5 className="text-lg font-bold font-roboto">
                  124 Puchrest Gym, USA
                </h5>
              </div>
            </div>
          </article>
          <article className="h-[152px] overflow-hidden relative group text-black hover:text-white hover:bg-black duration-500 transition-all flex items-center justify-center bg-yellow">
            <Image
              width={63}
              height={83}
              alt="bg-yellow"
              className="absolute -top-10 left-[18px]"
              src="/home2/companies/card-yellow.png"
            />
            <Image
              width={63}
              height={83}
              alt="bg-yellow"
              className="absolute -bottom-10 left-24"
              src="/home2/companies/card-black.png"
            />
            <div data-aos="fade-up" className="flex items-center gap-4">
              <div className="rounded-full bg-black text-yellow text-2xl size-12  grid place-content-center group-hover:bg-yellow group-hover:text-black duration-500 transition-all">
                <IoMail />
              </div>
              <div className="flex flex-col ">
                <span className="text-sm font-medium">Our Email Address</span>
                <h5 className="text-lg font-bold font-roboto">
                  heytexico@gmail.com
                </h5>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Companies;
