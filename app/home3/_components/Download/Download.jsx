import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay, FaApple } from "react-icons/fa6";

const Download = () => {
  return (
    <section className="bg-dem-gray">
      <div className="gap-10  flex max-w-7xl px-container  mx-auto py-24 md:py-section flex-col lg:flex-row   lg:items-center">
        <div className="flex-1">
          <Image
            data-aos="fade-up"
            src="/home3/download/download.png"
            width={800}
            height={480}
            className="w-full h-auto"
            alt="laptop"
          />
        </div>

        <div className="flex-1 text-center lg:text-start">
          <h5
            data-aos="fade-up"
            className="text-yellow mb-7 font-bold font-roboto"
          >
            DOWNLOAD HEY TEXICO APP
          </h5>
          <h2
            data-aos="fade-up"
            className="max-w-96 font-bold text-black text-4xl sm:leading-tight leading-snug font-roboto sm:text-5xl mb-8 mx-auto lg:mx-0"
          >
            Get a Free Mobile Application
          </h2>
          <p className="max-w-[520px] text-dark-gray mb-11 mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            vehicula lorem. Aliquam euismod auctor posuere. Fusce lacinia
            maximus elit ac tempus. Fusce nulla sem, tincidunt sit amet
          </p>

          <div className="flex gap-7 flex-col sm:flex-row justify-center lg:justify-start lg:justify-star items-center sm:items-start">
            <Link
              className="flex items-center h-20 px-10 rounded-full  bg-black text-white gap-4 w-fit hover:bg-yellow hover:text-black duration-500 transition-all"
              href="#"
            >
              <FaGooglePlay className="text-3xl" />
              <div>
                <span className="text-sm font-roboto block ">
                  Download from
                </span>
                <h5 className="text-[22px] font-bold">Google Play</h5>
              </div>
            </Link>
            <Link
              className="flex items-center h-20 px-10 rounded-full  bg-black text-white gap-4 w-fit hover:bg-yellow hover:text-black duration-500 transition-all"
              href="#"
            >
              <FaApple className="text-3xl" />
              <div>
                <span className="text-sm font-roboto block ">
                  Download from
                </span>
                <h5 className="text-[22px] font-bold">Apple Store</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Download;
