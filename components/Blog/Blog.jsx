import { latestBlogPosts } from "@/utils/data";
import SectionHeading from "../SectionHeading/SectionHeading";

import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section>
      <div className="pb-24 md:pb-section mx-auto max-w-container px-container">
        <SectionHeading label="Our News & Blogs">
          Latest News & Articles From the Blog
        </SectionHeading>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 ">
          {latestBlogPosts.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
