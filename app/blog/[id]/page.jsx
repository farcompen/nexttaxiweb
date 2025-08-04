import { IoShareSocialSharp } from "react-icons/io5";
import BlogSideBar from "../_components/BlogSideBar";
import Comments from "../_components/Comments";
import MessageForm from "../_components/MessageForm";
import Link from "next/link";
import Quote from "../_components/Quote";
import Image from "next/image";
import { Header } from "@/components/Header/Header";
import PageHeading from "@/components/PageHeading/PageHeading";
import Footer from "@/components/Footer/Footer";

const BlogDetails = () => {
  return (
    <>
      <Header />
      <section>
        <PageHeading>Blog details</PageHeading>

        <div>
          <div className="py-24 md:py-section max-w-container px-container mx-auto">
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="flex-1 mb-14">
                <header>
                  <Image
                    width={740}
                    src="/blog/blog.png"
                    height={450}
                    alt="title"
                    className="w-full mb-10 md:mb-12 h-auto"
                  />
                  <h2 className="text-4xl font-roboto font-bold leading-snug mb-6">
                    Easy & most powerful server platform.
                  </h2>
                  <div className="text-sm uppercase font-bold text-blue mb-8">
                    March 23, 2022 _ DEVELOPMENT _ BY Katty Olson _ 2 Comments
                  </div>
                </header>

                <article>
                  <div className="mb-14">
                    <p className="text-dark-gray max-w-3xl">
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it’s no surprise that different
                      approaches to online marketing are becoming available. One
                      of these new approaches is performance marketing or
                      digital performance marketing. Keep reading to learn all
                      about performance marketing, from how it works to how it
                      compares to digital marketing. Plus, get insight into the
                      benefits and risks of performance marketing and how it can
                      affect your company’s long-term success and profitability.
                      Performance marketing is an approach to digital marketing
                      or advertising where businesses only pay when a specific
                      result occurs. This result could be a new lead, sale, or
                      other outcome agreed upon by the advertiser and business.
                      Performance marketing involves channels such as affiliate
                      marketing, online advertising.
                    </p>
                  </div>
                  <div className="grid gap-8 mb-12 md:grid-cols-2">
                    <Image
                      width={750}
                      height={240}
                      alt=""
                      className="w-full h-auto rounded-2xl"
                      src="/blog/blog2.png"
                    />
                    <Image
                      width={750}
                      height={240}
                      alt=""
                      className="w-full h-auto rounded-2xl"
                      src="/blog/blog3.png"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-roboto font-bold  mb-6">
                      Latest articles ipdated daily
                    </h2>
                    <p className="text-dark-gray max-w-3xl leading-normal mb-12">
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it’s no surprise that different
                      approaches to online marketing are becoming available. One
                      of these new approaches is performance marketing or
                      digital performance marketing. Keep reading to learn all
                      about performance marketing
                    </p>
                  </div>
                  <div className="pb-[52px] mb-5 border-b border-[#e0e0e0]">
                    <Quote />
                  </div>

                  <div className="flex mb-14 md:mb-16 items-center  gap-5 border-light-gray justify-between">
                    <div className="flex items-center gap-3">
                      <h5 className="hidden sm:block text-[22px] font-bold">
                        Posted in:
                      </h5>
                      <div className="flex flex-wrap items-center gap-2">
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
                    <Link
                      className="size-[38px] shrink-0 rounded-full bg-black text-white hover:bg-yellow duration-500 transition-all grid place-content-center hover:text-black"
                      href="#"
                    >
                      <IoShareSocialSharp className="text-2xl" />
                    </Link>
                  </div>

                  <div className="mb-14">
                    <Comments />
                  </div>

                  <div>
                    <MessageForm />
                  </div>
                </article>
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
export default BlogDetails;

export const metadata = {
  title: "Title of the blog",
  description: "Blog details page",
};
