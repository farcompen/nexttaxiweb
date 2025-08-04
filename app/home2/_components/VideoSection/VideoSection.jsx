import Button from "@/components/Button";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { FaPlay } from "react-icons/fa6";
import VideoButtonWrapper from "@/components/VideoButtonWrapper";

const VideoSection = () => {
  return (
    <section className="h-fit   lg:min-h-[550px]  bg-vid-section bg-no-repeat  bg-cover lg:bg-center 2xl:bg-cover  ">
      <div className="max-w-container text-center  lg:text-start py-20 h-fit  lg:min-h-[550px] mx-auto px-container flex items-center flex-col   lg:flex-row gap-10 lg:gap-0">
        <div className="lg:flex-1  flex items-center justify-end">
          <div className="lg:translate-x-[130px]">
            <VideoButtonWrapper
              url={"https://www.youtube.com/watch?v=8oON21G1Bqg"}
            >
              <div className="relative cursor-pointer  overflow-hidden isolate shrink-0 rounded-full grid place-content-center duration-500 transition-all size-[140px] group">
                <div className="z-10 scale-0 rounded-full origin-center group-hover:scale-100 inset-0 absolute  duration-700 transition-all  bg-yellow/50"></div>
                <span className="z-20 size-[100px] shrink-0 rounded-full grid place-content-center pl-2 text-black  bg-yellow text-3xl">
                  <FaPlay />
                </span>
              </div>
            </VideoButtonWrapper>
          </div>
        </div>
        <div className="lg:flex-1 lg:pl-40 text-white">
          <h2
            data-aos="fade-up"
            className="text-5xl mx-auto lg:mx-0 mb-6 leading-snug font-extrabold max-w-lg"
          >
            Safe and reliable taxi service for you
          </h2>
          <p className="text-sm mx-auto lg:mx-0 pb-8 font-roboto max-w-md text-olive-gray">
            Phasellus rutrum nibh vitae magna finibus, vitae eleifend elit
            luctus. Quisque gravida enim nec augue tincidunt, vitae tincidunt
          </p>
          <div className="mb-10 w-fit mx-auto lg:mx-0">
            <Link
              className="flex group gap-3 items-center"
              href="tel:+45945654532"
            >
              <span className="size-10 sm:size-[60px] shrink-0 rounded-full grid place-content-center text-black  bg-yellow text-3xl">
                <FiPhoneCall />
              </span>

              <span className="flex flex-col font-roboto ">
                <span className=" font-medium uppercase text-olive-gray">
                  Call for book a taxi
                </span>
                <span className=" text-[30px] font-bold text-yellow">
                  + 459 4565 4532
                </span>
              </span>
            </Link>
          </div>
          <Button className="  bg-yellow text-black hover:text-white">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};
export default VideoSection;
