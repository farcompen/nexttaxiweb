import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { latestBlogPosts } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";

const Blog = () => {
  return (
    <section>
      <div className="mx-auto py-24 md:py-section max-w-container px-container">
        <SectionHeading className="text-yellow" label="OUR NEWS UPDATE">
          OUR LATEST NEWS
        </SectionHeading>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 ">
          {latestBlogPosts.map((blog) => (
            <article key={blog.id}>
              <div className="relative isolate">
                <div className="px-4 py-3 flex flex-col bottom-0 right-0 absolute bg-yellow text-xl font-roboto font-bold">
                  {blog.publishAt}
                </div>
                <Image
                  className="w-full h-[312px] object-cover"
                  width={468}
                  height={312}
                  alt={blog.title}
                  src={blog.image}
                />
              </div>
              <div>
                <div className="flex items-end justify-between">
                  <div className="relative isolate max-w-[150px]">
                    <Image
                      height={40}
                      width={148}
                      src="/home2/blog/blog-card.png"
                      alt="bg"
                      className="h-10 w"
                    />
                    <div
                      className="absolute h-10
                     top-0 flex items-center justify-center bottom-0 left-0 right-[28px] text-black font-roboto font-medium line-clamp-1 bg-yellow"
                    >
                      {blog.category}
                    </div>
                  </div>
                  <div>
                    <div className="flex text-nowrap text-dark-gray font-roboto items-center gap-2">
                      <VscAccount />
                      By {blog.author}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[22px] mb-3 font-bold line-clamp-2">
                    {blog.title}
                  </h3>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    href={`/blog/1`}
                    className="flex group hover:text-black duration-500 transition-all text-lg text-yellow font-roboto font-medium items-center gap-1"
                  >
                    Read More
                    <RiArrowRightDoubleLine className="text-black text-2xl group-hover:text-yellow duration-500 transition-all" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
