import Image from "next/image";
import { Header } from "../../components/Header/Header";
import PageHeading from "../../components/PageHeading/PageHeading";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Footer from "../home2/_components/Footer/Footer";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa6";
import { drivers } from "@/utils/data";
import Link from "next/link";
import Button from "../../components/Button";
const DriversPage = () => {
  return (
    <>
      <Header />

      <section>
        <PageHeading>Our Drivers</PageHeading>

        <div className="max-w-container px-container mx-auto py-24 md:py-section">
          <SectionHeading className="text-yellow " label="Our Drivers">
            Our Expert Drivers
          </SectionHeading>
          <div className="grid gap-7 gap-y-36 md:grid-cols-2 pt-20 lg:grid-cols-3 ">
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
      </section>
      <div className=" bg-yellow min-h-[530px] flex items-center justify-center flex-col text-center px-container relative isolate overflow-hidden">
        <Image
          className="absolute -translate-y-1/2 top-0 left-[5%]"
          width={350}
          height={365}
          alt="bg-left"
          src="/drivers/bg-left.png"
        />
        <Image
          className="absolute translate-y-1/2 bottom-0 right-[5%]"
          width={350}
          height={365}
          alt="bg-right"
          src="/drivers/bg-right.png"
        />

        <div className="relative z-20">
          <span className="text-lg block mb-8 font-roboto">
            24 hours service available
          </span>
          <h2 className="text-5xl leading-snug mb-10 font-extrabold max-w-xl text-center">
            Call now and book our taxi for your next ride
          </h2>
          <Button>Book a taxi</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DriversPage;

export const metadata = {
  title: "Drivers - Taxpi",
  description: "Drivers page",
};
