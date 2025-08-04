"use client";
import { CiPlay1 } from "react-icons/ci";

import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

const LazyReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

//method call
const FeaturedVideo = () => {
  const videoUrl =
    "https://www.youtube.com/embed/K4DyBUG242c?si=y05o4Db44jM4XZRV";
  const [play, setPlay] = useState(false);

  return (
    <section id="featured_music" className="">
      <div>
        <div className="flex-1 relative isolate">
          {!play && (
            <div className="absolute pointer-events-none inset-0 flex justify-center items-center group flex-row-reverse gap-5 ">
              <Image
                src={"/home1/safety/WATCH.png"}
                width={172}
                height={95}
                alt=""
                className="hidden md:block"
              />

              <div className="cursor-pointer w-20 h-20 rounded-full  text-xl grid text-black hover:bg-black hover:text-white duration-500 transition-all  place-content-center bg-yellow mb-[-30px]">
                <CiPlay1 />
              </div>
            </div>
          )}
          <div className="flex justify-center">
            <LazyReactPlayer
              url={videoUrl}
              width="100%"
              height="600px"
              controls
              onPlay={() => {
                setPlay(true);
              }}
              onPause={() => {
                setPlay(false);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedVideo;
