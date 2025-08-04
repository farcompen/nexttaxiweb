import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Link from "next/link";
import { FaCarOn } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Services = () => {
  return (
    <section className="py-24 relative isolate md:py-section mx-auto max-w-container px-container">
      <div className="hidden  lg:block w-[123px] h-[140px] bg-yellow absolute top-0 left-0"></div>

      <SectionHeading className="text-yellow " label="Taxi Service">
        Our Services
      </SectionHeading>
      <div className="grid pt-10 gap-7 md:grid-cols-2 lg:grid-cols-3">
        <article className=" bg-black ">
          <div className="py-8  bg-black  px-9      ">
            <div className="flex  flex-col items-center">
              <div className="size-[100px] shrink-0 rounded-full bg-yellow grid place-content-center  text-5xl text-black">
                <FaCarOn />
              </div>
              <h5 className="text-2xl mt-4 font-bold font-roboto text-yellow">
                Airport Transfer
              </h5>
              <p className="text-center text-sm font-medium font-roboto text-dem-gray my-5">
                Suspendisse potenti. Duis non purus nulla. Nporta, velit nec
                gravida tincidunt, est mauris msuada risus, sed fringilla nibh
                risus eget diam
              </p>
              <Link
                href={`/services/1`}
                className="flex group hover:text-white duration-500 transition-all text-yellow font-roboto font-medium items-center gap-1"
              >
                Read More
                <RiArrowRightDoubleLine className="text-white text-xl group-hover:text-yellow duration-500 transition-all" />
              </Link>
            </div>
          </div>
        </article>
        <article className=" bg-black ">
          <div className="py-8  bg-black  px-9      ">
            <div className="flex  flex-col items-center">
              <div className="size-[100px] shrink-0 rounded-full bg-yellow grid place-content-center  text-5xl text-black">
                <FaCarOn />
              </div>
              <h5 className="text-2xl mt-4 font-bold font-roboto text-yellow">
                Address Pickup
              </h5>
              <p className="text-center text-sm font-medium font-roboto text-dem-gray my-5">
                Suspendisse potenti. Duis non purus nulla. Nporta, velit nec
                gravida tincidunt, est mauris msuada risus, sed fringilla nibh
                risus eget diam
              </p>
              <Link
                href={`/services/1`}
                className="flex group hover:text-white duration-500 transition-all text-yellow font-roboto font-medium items-center gap-1"
              >
                Read More
                <RiArrowRightDoubleLine className="text-white text-xl group-hover:text-yellow duration-500 transition-all" />
              </Link>
            </div>
          </div>
        </article>
        <article className=" bg-black ">
          <div className="py-8  bg-black  px-9      ">
            <div className="flex  flex-col items-center">
              <div className="size-[100px] shrink-0 rounded-full bg-yellow grid place-content-center  text-5xl text-black">
                <FaCarOn />
              </div>
              <h5 className="text-2xl mt-4 font-bold font-roboto text-yellow">
                Business Transfer
              </h5>
              <p className="text-center text-sm font-medium font-roboto text-dem-gray my-5">
                Suspendisse potenti. Duis non purus nulla. Nporta, velit nec
                gravida tincidunt, est mauris msuada risus, sed fringilla nibh
                risus eget diam
              </p>
              <Link
                href={`/services/1`}
                className="flex group hover:text-white duration-500 transition-all text-yellow font-roboto font-medium items-center gap-1"
              >
                Read More
                <RiArrowRightDoubleLine className="text-white text-xl group-hover:text-yellow duration-500 transition-all" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Services;
