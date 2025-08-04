import Link from "next/link";
import { Header } from "../../components/Header/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import PageHeading from "../../components/PageHeading/PageHeading";

const ContactPage = () => {
  return (
    <>
      <Header />

      <section>
        <PageHeading>Contact Page</PageHeading>

        <div className="max-w-container px-container mx-auto py-24 md:py-section">
          <div className="grid gap-20  lg:grid-cols-2 mb-20 md:mb-24">
            <div>
              <Image
                src="/home1/contact/contact.jpg"
                width={600}
                height={550}
                className="w-full object-cover h-[550px] rounded-2xl"
                alt="contact"
              ></Image>
            </div>
            <div>
              <div className="mb-9">
                <h2
                  data-aos="fade-up"
                  className="text-dark mb-6 text-4xl md:text-5xl font-bold font-space_grotesk"
                >
                  Let’s Get in Touch
                </h2>
                <p className="leading-loose text-gray ">
                  A vast majority of the app marketers mainly concent
                  post-launch app marketing techniques and measures while
                  completely missing pre-launch campaign. This prevents the
                </p>
              </div>
              <div>
                <h5 className="text-blue font-bold font-space_grotesk text-2xl mb-6">
                  Contact Info
                </h5>
                <div className="mb-9 flex flex-col gap-5">
                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">
                      Address
                    </h6>
                    <div className="text-gray">
                      254, North City, Blex Center, New York
                    </div>
                  </div>

                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">Phone</h6>
                    <div className="text-gray">
                      09 (354) 587 874 or 10 (698) 852 741
                    </div>
                  </div>
                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">Email</h6>
                    <div className="text-gray">
                      info@example.com or info@example.com
                    </div>
                  </div>
                </div>

                <Link
                  data-aos="fade-up"
                  target="_blank"
                  className="text-lg font-bold text-blue tracking-[6px] hover:underline"
                  href="http://www.taxpi.com"
                >
                  www.taxpi.com
                </Link>
              </div>
            </div>
          </div>

          <form className="bg-dem-gray py-10 p-5  sm:p-10 md:p-16 xl:p-[75px] rounded-2xl">
            <header className="mb-10">
              <h3
                data-aos="fade-up"
                className="text-dark mb-2 text-3xl sm:text-4xl font-bold font-space_grotesk"
              >
                Contact With Us
              </h3>
              <p data-aos="zoom-in" className="text-sm text-gray ">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </header>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  required
                  type="text"
                  placeholder="Your Name*"
                  className="bg-white text-gray w-full focus-visible:outline-yellow placeholder:text-gray rounded-2xl  py-5 px-8"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email*"
                  className="bg-white text-gray w-full focus-visible:outline-yellow placeholder:text-gray rounded-2xl  py-5 px-8"
                />
              </div>
              <input
                required
                type="text"
                placeholder="Your Website*"
                className="bg-white text-gray w-full focus-visible:outline-yellow placeholder:text-gray rounded-2xl  py-5 px-8"
              />
              <textarea
                required
                placeholder="Write Message*"
                className="bg-white text-gray w-full focus-visible:outline-yellow h-36 placeholder:text-gray rounded-2xl  py-5 px-8"
              />

              <Button className="text-black bg-yellow hover:bg-black hover:text-white w-full sm:w-fit">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        <div className="relative isolate">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.967410377096!2d-111.89998968453055!3d33.31966746342457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE5JzEwLjgiTiAxMTHCsDUzJzUyLjEiVw!5e0!3m2!1sen!2sus!4v1516690469899"
            width="600"
            height="450"
            className=" w-full h-[480px]"
            style={{ border: 0 }}
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ContactPage;

export const metadata = {
  title: "Contact - Taxpi",
  description: "contact page",
};
