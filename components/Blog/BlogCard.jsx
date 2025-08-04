import Image from "next/image";

import { GoPlus, GoComment } from "react-icons/go";
import { IoPricetagOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ blog }) => {
  return (
    <article className="group shadow-card w-full">
      <div className="relative isolate">
        <div className="absolute inset-0 bg-[#090e38] bg-opacity-0 group-hover:bg-opacity-50 duration-500 transition-all  grid place-content-center  text-white  text-7xl">
          <GoPlus className="scale-0  duration-500 transition-all group-hover:scale-100" />
        </div>
        <div className="absolute px-5 h-8 bg-yellow text-black font-bold font-roboto flex  items-center right-0 top-5">
          {blog.publishAt}
        </div>
        <Image
          width={370}
          height={240}
          alt={blog.title}
          src={blog.image}
          className="w-full object-cover h-80 md:h-60"
        />
      </div>
      <div className="py-[30px] px-4 sm:px-10 bg-white">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex text-nowrap text-dark-gray font-roboto items-center gap-2">
            <VscAccount />
            By {blog.author}
          </div>
          <div className="flex text-nowrap text-dark-gray font-roboto items-center gap-2">
            <IoPricetagOutline />
            By {blog.category}
          </div>
        </div>
        <h2 className="text-[22px] leading-snug font-extrabold mb-8">
          {blog.title}
        </h2>
        <p className="text-dark-gray font-roboto mb-8">{blog.disc}</p>

        <div className="w-full flex ">
          <div className="flex-1 pl-5 bg-dem-gray h-[58px] flex items-center">
            <div className="flex text-dark-gray font-roboto items-center gap-2">
              <GoComment />
              {blog.numberOfComment} Comments
            </div>
          </div>
          <Link
            className="size-[58px] grid place-content-center bg-yellow text-black hover:text-white hover:bg-black duration-500 transition-all"
            href={`blog/${blog.id}`}
          >
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default BlogCard;
