import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogSideBar from "./_components/BlogSideBar";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BlogCard from "../../components/Blog/BlogCard";
import { latestBlogPosts } from "@/utils/data";
import PageHeading from "../../components/PageHeading/PageHeading";

const BlogPage = () => {
  return (
    <>
      <Header />
      <section>
        <PageHeading>Blog Page</PageHeading>

        <div>
          <div className="py-24 md:py-section max-w-container px-container mx-auto">
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="flex-1 mb-14">
                <div className="grid mb-14 gap-10 md:grid-cols-2 lg:grid-cols-1">
                  {latestBlogPosts.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
                <div className="flex items-center flex-wrap gap-2">
                  <Link
                    className="text-xl md:text-2xl font-bold grid place-content-center rounded-2xl size-10 md:size-[60px] text-dark hover:bg-yellow  duration-500 transition-all bg-white shadow-card-2"
                    href="#"
                  >
                    1
                  </Link>
                  <Link
                    className="text-xl md:text-2xl font-bold grid place-content-center rounded-2xl size-10 md:size-[60px] text-dark hover:bg-yellow  duration-500 transition-all bg-white shadow-card-2"
                    href="#"
                  >
                    2
                  </Link>
                  <Link
                    className="text-xl md:text-2xl font-bold grid place-content-center rounded-2xl size-10 md:size-[60px] text-dark hover:bg-yellow  duration-500 transition-all bg-white shadow-card-2"
                    href="#"
                  >
                    3
                  </Link>
                  <Link
                    className="text-xl md:text-2xl font-bold grid place-content-center rounded-2xl size-10 md:size-[60px] text-dark hover:bg-yellow  duration-500 transition-all bg-white shadow-card-2"
                    href="#"
                  >
                    4
                  </Link>
                  <Link
                    className="text-xl md:text-2xl font-bold grid place-content-center rounded-2xl size-10 md:size-[60px] text-dark hover:bg-yellow  duration-500 transition-all bg-white shadow-card-2"
                    href="#"
                  >
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
              <div className="basis-[370px]">
                <BlogSideBar />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default BlogPage;

export const metadata = {
  title: "Blog - Taxpi",
  description: "Blog page ",
};
