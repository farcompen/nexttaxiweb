import { latestBlogPosts } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { LuClock5 } from "react-icons/lu";

const categories = [
  {
    id: 1,
    label: "Cloud Service",
    href: "/categories/cloud-service",
  },
  {
    id: 2,
    label: "Web Development",
    href: "/categories/web-development",
  },
  {
    id: 3,
    label: "UI/UX Designing",
    href: "/categories/ui-ux-designing",
  },
  {
    id: 4,
    label: "IT Management",
    href: "/categories/it-management",
  },
  {
    id: 5,
    label: "Data Visualization",
    href: "/categories/data-visualization",
  },
  {
    id: 6,
    label: "Security System",
    href: "/categories/security-system",
  },
];

const BlogSideBar = () => {
  return (
    <aside className="text-dark flex flex-col gap-10 md:gap-12">
      <div>
        <h4 className="text-2xl mb-6 font-bold font-space_grotesk ">Search</h4>
        <form className="flex rounded-2xl border border-transparent focus-within:border-yellow flex-1 bg-dem-gray w-full h-12 ">
          <input
            placeholder="Search..."
            className="flex-1 text-black placeholder:text-black font-dmSans focus-visible:outline-none pl-5 bg-transparent h-full"
            type="search"
          />
          <button className="px-5 text-2xl">
            <IoSearchOutline />
          </button>
        </form>
      </div>

      <div>
        <h4 className="text-2xl mb-6 font-bold font-space_grotesk ">
          Recent Post
        </h4>
        <div className="flex flex-col gap-3">
          {latestBlogPosts.slice(0, 3).map((blog) => (
            <Link
              href={`/blog/${blog.id}`}
              className="flex items-center gap-7 bg-white shadow-card-2 rounded-2xl p-[10px] pr-3 border border-transparent hover:border-yellow duration-500 transition-all"
              key={blog.id}
            >
              <Image
                width={220}
                height={220}
                src={blog.image}
                alt={blog.title}
                className="shrink-0 h-24 w-24 rounded-2xl object-cover"
              />
              <div>
                <h5 className="text-base font-bold mb-3 line-clamp-2">
                  {blog.title}
                </h5>
                <div className="text-dark-gray text-sm flex items-center gap-2">
                  <LuClock5 />
                  {blog.publishAt}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-2xl mb-6 font-bold font-space_grotesk ">
          Categories
        </h4>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <Link
              className="p-5 h-[52px] hover:bg-yellow text-black transition-all duration-500 bg-white rounded-2xl shadow-card-2  flex font-semibold items-center justify-between"
              key={category.id}
              target="_blank"
              href={category.href}
            >
              <span>{category.label}</span>
              <FaArrowRightLong />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-2xl mb-6 font-bold font-space_grotesk ">Links</h4>

        <div className="flex items-center gap-2 flex-wrap">
          <Link
            className="h-[34px] px-[14px] hover:text-black transition-all duration-500 hover:bg-yellow flex items-center justify-center text-dark font-medium rounded-2xl border border-sky bg-white hover:border-yellow"
            href="#"
          >
            Development
          </Link>
          <Link
            className="h-[34px] px-[14px] hover:text-black transition-all duration-500 hover:bg-yellow flex items-center justify-center text-dark font-medium rounded-2xl border border-sky bg-white hover:border-yellow"
            href="#"
          >
            Design
          </Link>
          <Link
            className="h-[34px] px-[14px] hover:text-black transition-all duration-500 hover:bg-yellow flex items-center justify-center text-dark font-medium rounded-2xl border border-sky bg-white hover:border-yellow"
            href="#"
          >
            Tech
          </Link>
          <Link
            className="h-[34px] px-[14px] hover:text-black transition-all duration-500 hover:bg-yellow flex items-center justify-center text-dark font-medium rounded-2xl border border-sky bg-white hover:border-yellow"
            href="#"
          >
            Software
          </Link>
          <Link
            className="h-[34px] px-[14px] hover:text-black transition-all duration-500 hover:bg-yellow flex items-center justify-center text-dark font-medium rounded-2xl border border-sky bg-white hover:border-yellow"
            href="#"
          >
            AI
          </Link>
        </div>
      </div>
    </aside>
  );
};
export default BlogSideBar;
