import Image from "next/image";
import { HiArrowUturnLeft } from "react-icons/hi2";

const Comments = () => {
  return (
    <div>
      <div data-aos="fade-up" className="text-4xl font-roboto font-bold mb-6">
        01 Comments
      </div>
      <article className="py-[26px] flex-col sm:flex-row pl-[26px] flex items-center gap-7 pr-10 shadow-card-2 rounded-2xl">
        <div className="shrink-0">
          <Image
            width={154}
            height={154}
            alt=""
            className="size-24 sm:size-32 rounded-full  md:size-[154px] object-cover"
            src="/home1/testimonials/team1.png"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center mb-4 sm:mb-5 justify-between gap-2">
            <span className="text-gray">September 6, 2022 at 1:28 pm </span>
            <button className="text-blue font-bold text-sm hover:text-dark-green duration-500 transition-all flex items-center gap-1">
              <HiArrowUturnLeft className="text-lg" />
              <span>Reply</span>
            </button>
          </div>
          <div>
            <h4 className="text-xl font-roboto md:text-[22px] font-bold mb-3">
              Jonathon Lopez
            </h4>
            <p className="text-gray">
              Lorem ipsum dolor sit amet consectetur adipi vestibulum lectus
              egestas cubilia nam sagittis, nulla posuere habitant
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default Comments;
