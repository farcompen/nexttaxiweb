import BookingFrom from "../BookingFrom/BookingFrom";
import Button from "../Button";
import { twMerge } from "tailwind-merge";

const Booking = () => {
  return (
    <div className="relative bg-yellow lg:bg-transparent flex min-h-[714px] isolate">
      <div className="hidden lg:block flex-1  bg-yellow bg-booking bg-left-bottom bg-no-repeat "></div>
      <div className="hidden  lg:block basis-[600px] bg-black"></div>

      <div className="lg:absolute  py-24 md:py-section inset-0 flex sm:items-center gap-16 sm:gap-20  max-w-container mx-auto px-container flex-col lg:flex-row">
        <div className="flex-1 text-center sm:text-start">
          <h4 className="text-2xl font-bold font-roboto mb-4">
            Call us to Book a Taxi
          </h4>

          <h2 className="text-5xl font-bold font-roboto mb-8">
            052 (699) 256 693
          </h2>
          <p className="text-lg font-roboto max-w-[510px] mb-12">
            Maintain optimal business optative products grow strategic and
            technically sound human capital distributed.
          </p>
          <Button>DISCOVER MORE</Button>
        </div>
        <div className="flex-1">
          <BookingFrom />
        </div>
      </div>
    </div>
  );
};
export default Booking;
