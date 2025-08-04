import Button from "@/components/Button";
import Link from "next/link";
import { IoCallOutline, IoLocation, IoMail } from "react-icons/io5";

import {
  FaArrowRightLong,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black lg:pt-[76px]">
        <div className="max-w-container py-24 md:py-section  bg-footer-2 bg-no-repeat bg-center text-white mx-auto justify-start px-container flex gap-16 flex-wrap sm:justify-evenly">
          <div>
            <span className="text-lg font-bold font-roboto">
              ABOUT HEY TAXICO{" "}
            </span>
            <p className="max-w-[270px] text-light-gray font-roboto text-sm my-9">
              Duis blandit ultricies massa vel laoree Nam lacinia, leo nec
              finibus feugiat, tellus sem facilisis leo, vitae varius dolor
              justo id turpis. Donec justo arcu, elementum quis commodo et,
              facilisis et quam.
            </p>
            <Button className="  bg-yellow text-black hover:text-white">
              Contact Us
            </Button>
          </div>
          <div>
            <h4 className="text-xl text-nowrap uppercase font-roboto text-white font-bold mb-8">
              Usefull Links
            </h4>

            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  className="text-white hover:text-yellow duration-500 transition-all"
                  href="/"
                >
                  Client support
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-yellow duration-500 transition-all"
                  href="/"
                >
                  Pricing packages
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-yellow duration-500 transition-all"
                  href="/"
                >
                  Company story
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-yellow duration-500 transition-all"
                  href="/"
                >
                  Latest news
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-yellow duration-500 transition-all"
                  href="/"
                >
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl text-nowrap uppercase font-roboto text-white font-bold mb-8">
              Contact Us
            </h4>
            <div className="flex flex-col  gap-5">
              <div className="flex items-center gap-4 group">
                <div className="rounded-full bg-yellow text-black text-2xl size-12 shrink-0 group-hover:bg-white group-hover:text-black duration-500 transition-all  grid place-content-center  ">
                  <IoCallOutline />
                </div>
                <div className="flex flex-col ">
                  <span className="text-lg text-yellow text-nowrap font-bold font-roboto">
                    Phone Number
                  </span>
                  <h5 className="text-sm font-medium text-nowrap ">
                    + (450) 458 987 345
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="rounded-full bg-yellow text-black text-2xl size-12 shrink-0 group-hover:bg-white group-hover:text-black duration-500 transition-all  grid place-content-center  ">
                  <IoLocation />
                </div>
                <div className="flex flex-col ">
                  <span className="text-lg text-yellow text-nowrap font-bold font-roboto">
                    Our Location
                  </span>
                  <h5 className="text-sm font-medium text-nowrap ">
                    124 Puchrest Gym, USA
                  </h5>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="rounded-full bg-yellow text-black text-2xl size-12 shrink-0 group-hover:bg-white group-hover:text-black duration-500 transition-all  grid place-content-center  ">
                  <IoMail />
                </div>
                <div className="flex flex-col ">
                  <span className="text-lg text-yellow text-nowrap font-bold font-roboto">
                    Our Email Address
                  </span>
                  <h5 className="text-sm font-medium text-nowrap ">
                    heytexico@gmail.com
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-80">
            <h4 className="text-xl font-roboto uppercase text-white font-bold mb-8">
              Get News Letter
            </h4>
            <p className="text-steel-gray mb-8 max-w-[330px]">
              Sign up for get advantage and our upcoming events s article our
              hey texico
            </p>
            <div>
              <form className="flex mb-7  rounded-2xl h-11 bg-white  w-full ">
                <input
                  placeholder="Your Email Address"
                  className="flex-1  text-ash placeholder:text-ash text-sm px-5 h-11 focus-visible:outline-none bg-transparent"
                  type="email"
                />
                <button className="basis-[60px] hover:bg-white hover:text-black duration-500 transition-all border-l border-yellow h-11 grid place-content-center bg-yellow rounded-e-2xl text-black">
                  <FaArrowRightLong />
                </button>
              </form>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="https://instagram.com/"
                target="_blank"
                className="size-[38px] rounded-full grid place-content-center bg-white text-black hover:text-black hover:bg-yellow transition-all duration-500"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://facebook.com/"
                target="_blank"
                className="size-[38px] rounded-full grid place-content-center bg-white text-black hover:text-black hover:bg-yellow transition-all duration-500"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                className="size-[38px] rounded-full grid place-content-center bg-white text-black hover:text-black hover:bg-yellow transition-all duration-500"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://pinterest.com/"
                target="_blank"
                className="size-[38px] rounded-full grid place-content-center bg-white text-black hover:text-black hover:bg-yellow transition-all duration-500"
              >
                <FaPinterest />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow h-16 sm:h-20 flex items-center justify-center">
        <span className="text-black font-roboto font-medium">
          © Hey Texico All Right Reseve. nsstheme
        </span>
      </div>
    </footer>
  );
};
export default Footer;
