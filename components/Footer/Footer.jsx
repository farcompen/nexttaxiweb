import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import {
  FaArrowRightLong,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black py-24 md:py-section relative isolate">
        <Image
          className="absolute bottom-0 right-0 z-[-1]"
          width={200}
          height={310}
          alt="footer effect"
          src="/footer/footer-eff.png"
        />
        <div className="flex flex-wrap  gap-10 max-w-container mx-auto px-container">
          <div>
            <Link
              href="/"
              className="text-5xl block mb-10 font-roboto font-bold text-yellow"
            >
            Kırıkkale Konak Taksi<span className="text-white">.</span>
            </Link>
            <p className="max-w-[270px] text-silver-gray mb-8 font-roboto ">
             25 Yıllık Deneyimimiz ile Kırıkkale'nin güvenilir Taksi Durağı hizmeti
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex group items-center gap-3">
                <MdOutlineMail className="text-yellow text-lg" />
                <span className="text-silver-gray group-hover:text-white duration-500 transition-all font-roboto">
                 konaktaksi@gmail.com
                </span>
              </div>
              <div className="flex group items-center gap-3">
                <IoLocationSharp className="text-yellow text-lg" />
                <span className="text-silver-gray group-hover:text-white duration-500 transition-all font-roboto">
                 Fabrikalar mah fevzi çakmak cad no 3 Merkez KIRIKKALE 
                </span>
              </div>
            </div>
          </div>
         
          <div>
            <h4 className="text-xl font-roboto text-white font-bold mb-10">
              Social Links
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              <SocialCard
                alt="Instagram"
                image="/footer/footer1.png"
                href="https://instagram.com/"
                Icon={FaInstagram}
              />
              <SocialCard
                alt="Facebook"
                image="/footer/footer2.png"
                href="https://facebook.com/"
                Icon={FaFacebookF}
              />
              <SocialCard
                alt="Linkedin"
                image="/footer/footer3.png"
                href="https://linkedin.com/"
                Icon={FaLinkedinIn}
              />
              <SocialCard
                alt="Pinterest"
                image="/footer/footer4.png"
                href="https://pinterest.com/"
                Icon={FaPinterest}
              />
              <SocialCard
                alt="Facebook"
                image="/footer/footer2.png"
                href="https://facebook.com/"
                Icon={FaFacebookF}
              />
              <SocialCard
                alt="Linkedin"
                image="/footer/footer3.png"
                href="https://linkedin.com/"
                Icon={FaLinkedinIn}
              />
            </div>
          </div>
         
        </div>
      </div>
      <div className="bg-[#151513] py-6 ">
        <div className="max-w-container mx-auto flex items-center justify-between px-container flex-col gap-5 sm:flex-row">
          <span className="font-medium font-roboto text-silver-gray">
            Bu site  <span className="text-yellow">Faruk GÜNGÖR</span> tarafından geliştirilmiştir.© Tüm hakları saklıdır. {new Date().getFullYear()}  
          </span>
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="https://instagram.com/"
                target="_blank"
                className="size-[38px] grid place-content-center bg-black text-white hover:text-black hover:bg-yellow transition-all duration-500"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://facebook.com/"
                target="_blank"
                className="size-[38px] grid place-content-center bg-black text-white hover:text-black hover:bg-yellow transition-all duration-500"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                className="size-[38px] grid place-content-center bg-black text-white hover:text-black hover:bg-yellow transition-all duration-500"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://pinterest.com/"
                target="_blank"
                className="size-[38px] grid place-content-center bg-black text-white hover:text-black hover:bg-yellow transition-all duration-500"
              >
                <FaPinterest />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const SocialCard = ({ href, image, Icon, alt = "" }) => {
  return (
    <Link href={href} className="relative  group isolate">
      <Image
        width={70}
        height={70}
        className="size-[70px] object-cover group-hover:blur-[1px] duration-500 transition-all h-auto"
        alt={alt}
        src={image}
      />
      <div className="absolute inset-0 will-change-transform  grid place-content-center bg-yellow duration-500 transition-all bg-opacity-0 group-hover:bg-opacity-100">
        <div className="w-full h-full scale-0 group-hover:scale-100 duration-500 transition-all text-black grid place-content-center  text-lg">
          <Icon />
        </div>
      </div>
    </Link>
  );
};
