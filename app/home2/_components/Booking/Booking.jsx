import BookingFrom from "@/components/BookingFrom/BookingFrom";
import Button from "@/components/Button";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

const Booking = () => {
  return (
    <section>
      <div className="max-w-container mx-auto px-container">
        <header
          data-aos="fade-up"
          className="w-full max-w-[840px] mx-auto  md:py-5 bg-black text-white flex divide-y-2 md:divide-y-0 md:divide-x-2 justify-center flex-col md:flex-row lg:justify-between text-center  divide-yellow font-bold font-roboto uppercase items-center mb-12"
        >
          <span className="block w-full md:w-fit  py-5 md:py-0 px-0 md:px-5 lg:px-8">
            STANDARD
          </span>
          <span className="block w-full md:w-fit  py-5 md:py-0 px-0 md:px-5 lg:px-8">
            BUSINESS
          </span>
          <span className="block w-full md:w-fit  py-5 md:py-0 px-0 md:px-5 lg:px-8">
            ECONOMY
          </span>
          <span className="block w-full md:w-fit  py-5 md:py-0 px-0 md:px-5 lg:px-8">
            VIP
          </span>
          <span className="block w-full md:w-fit  py-5 md:py-0 px-0 md:px-5 lg:px-8">
            MINIVAN
          </span>
          <span className="block w-full md:w-fit  py-5 md:py-0 px-0 md:px-5 lg:px-8">
            COMFORT
          </span>
        </header>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 ">
          <div className="lg:flex-1 min-h-[520px] relative isolate bg-booking-2 bg-cover bg-no-repeat">
            <div className="absolute w-[60px] h-full right-2 bottom-0    top-0   overflow-hidden   font-bold text-yellow uppercase">
              <span className="text-6xl translate-y-96 block -rotate-90 text-nowrap">
                HEY TEXICO
              </span>
            </div>

            <div className="inset-0 isolate bg-black/70 pt-10 px-12 absolute">
              <span className="text-yellow font-medium uppercase font-roboto mb-5 block">
                WHY CHOOSE HEY TAXICO
              </span>
              <h3 className="text-3xl sm:text-5xl line-clamp-2 mb-5 leading-snug text-white font-semibold ">
                Get Our Hey <span className="text-yellow">Texico</span> <br />
                Booking Form
              </h3>
              <p className="font-roboto line-clamp-3 text-olive-gray mb-6">
                Quisque sit amet varius libero. Sed tempor metus ut suscipit
                finibus. Etiam sagittis commodo facilisis. Aliquam erat
                volutpat. Suspendisse tempor hendrerit leo, aliquet dictum nisi
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[22px] block mb-1 text-white font-medium font-roboto">
                  David Smith
                </span>
                <span className="text-yellow text-sm font-roboto">_</span>
                <span className="text-yellow text-sm font-roboto">
                  Head of Idea
                </span>
              </div>

              <Link
                data-aos="fade-up"
                href="tel:+45945654532"
                className="w-full max-w-[360px] absolute bottom-0 md:left-1/2 md:-translate-x-1/2 h-28 bg-white px-7 flex group gap-3 items-center "
              >
                <span className="size-[60px] shrink-0 rounded-full grid place-content-center  text-white  bg-black text-3xl">
                  <FiPhoneCall />
                </span>

                <span className="flex flex-col font-roboto ">
                  <span className=" font-medium uppercase text-dark-green">
                    Call for book a taxi
                  </span>
                  <span className=" text-[30px] font-bold text-yellow">
                    + 459 4565 4532
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="basis-[530px] bg-yellow flex items-center">
            <BookingFrom />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Booking;
