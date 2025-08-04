import Image from "next/image";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div>
        <header className=" h-[400px] md:h-[550px] 2xl:h-[650px] flex justify-center bg-[#222221] items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Error Page
          </h1>
        </header>
        <div className="py-24 md:py-section px-container">
          <Image
            src="/404.png"
            width={550}
            height={230}
            alt="404"
            className="w-full max-w-[550px] mx-auto mb-5 h-auto"
          />
          <h3 className="text-4xl text-center font-bold text-black mb-8">
            Sorry we can’t find this page!
          </h3>
          <p className="text-dark-gray text-center mx-auto font-roboto mb-9">
            The page your’e looking for was never existed
          </p>

          <form className="mx-auto mb-10 relative bg-white  max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 ">
            <input
              placeholder="your keyword here"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-black text-white    border hover:bg-yellow hover:text-black duration-500 transition-all overflow-hidden uppercase flex justify-center font-roboto font-bold relative rounded-xl "
            >
              <span className="flex  text-sm font-semibold whitespace-nowrap truncate  items-center opacity-1">
                Search
              </span>
            </button>
          </form>

          <Link
            href="/"
            className="h-[60px] grid place-content-center uppercase font-bold font-roboto text-sm duration-500 transition-all px-12 text-black bg-yellow hover:bg-black hover:text-white w-fit mx-auto"
          >
            Back To Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default NotFoundPage;

export const metadata = {
  title: "Not Found - Taxpi",
  description: "404 page",
};
