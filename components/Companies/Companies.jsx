"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <section className="border-t  border-dem-gray">
      <div className="max-w-container px-container py-24 md:py-section mx-auto">
        <Marquee pauseOnHover>
          <div className="flex justify-evenly items-center flex-wrap">
            <Image
              className=" mx-16"
              src="/home1/companies/c1.png"
              width={70}
              height={60}
              alt=""
            />
            <Image
              className=" mx-16"
              src="/home1/companies/c2.png"
              width={70}
              height={60}
              alt=""
            />

            <Image
              className=" mx-16"
              src="/home1/companies/c3.png"
              width={70}
              height={60}
              alt=""
            />
            <Image
              className=" mx-16"
              src="/home1/companies/c4.png"
              width={70}
              height={60}
              alt=""
            />
            <Image
              className=" mx-16"
              src="/home1/companies/c5.png"
              width={70}
              height={60}
              alt=""
            />
            <Image
              className=" mx-16"
              src="/home1/companies/c1.png"
              width={70}
              height={60}
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};
export default Companies;
