import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Image from "next/image";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { PiSteeringWheelBold } from "react-icons/pi";

const Pricing = () => {
  return (
    <section>
      <div className="py-24 md:py-section max-w-container px-container mx-auto">
        <SectionHeading label="hey taxico service">
          Our Taxi Pricing Table
        </SectionHeading>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article className=" pt-10 bg-white border border-dem-gray relative isolate overflow-hidden  hover:border-yellow duration-500 transition-all">
            <header className="text-center mb-8">
              <h5 className="text-2xl font-bold">Standard Taxi</h5>
              <span className="block font-bold text-dark-gray">Germany</span>
            </header>
            <div className="flex px-10 flex-col gap-3 mb-16">
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">Base Rate:</span>
                <span className="font-bold">$2.50</span>
              </div>
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">
                  Full Day Trip:
                </span>
                <span className="font-bold">$4.00</span>
              </div>
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">
                  Additional Kilos:
                </span>
                <span className="font-bold">$3.00</span>
              </div>
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">Passenger:</span>
                <span className="font-bold">6</span>
              </div>
            </div>
            <footer className="relative isolate">
              <Image
                width={380}
                height={250}
                alt="bg"
                src="/home3/pricing/car.webp"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 grid place-content-center isolate">
                <div className="grid place-content-center size-[65px] border-[6px] border-white absolute top-0 left-1/2 text-yellow bg-black text-3xl rounded-full -translate-y-1/2 -translate-x-1/2">
                  <PiSteeringWheelBold />
                </div>
                <button className="flex items-center gap-1 w-[155px]  px-2 h-[50px]  uppercase font-bold font-roboto text-sm bg-yellow text-dark-green  duration-500 justify-center transition-all group">
                  Read More{" "}
                  <RiArrowRightDoubleLine className="text-xl group-hover:translate-x-1 duration-500 transition-all" />
                </button>
              </div>
            </footer>
          </article>
          <article className=" pt-10 bg-white border border-dem-gray relative isolate overflow-hidden  hover:border-yellow duration-500 transition-all">
            <header className="text-center mb-8">
              <h5 className="text-2xl font-bold">Additional Taxi</h5>
              <span className="block font-bold text-dark-gray">Dubai</span>
            </header>
            <div className="flex px-10 flex-col gap-3 mb-16">
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">Base Rate:</span>
                <span className="font-bold">$2.50</span>
              </div>
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">
                  Full Day Trip:
                </span>
                <span className="font-bold">$4.00</span>
              </div>
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">
                  Additional Kilos:
                </span>
                <span className="font-bold">$3.00</span>
              </div>
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">Passenger:</span>
                <span className="font-bold">6</span>
              </div>
            </div>
            <footer className="relative isolate">
              <Image
                width={380}
                height={250}
                alt="bg"
                src="/home3/pricing/car.webp"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 grid place-content-center isolate">
                <div className="grid place-content-center size-[65px] border-[6px] border-white absolute top-0 left-1/2 text-yellow bg-black text-3xl rounded-full -translate-y-1/2 -translate-x-1/2">
                  <PiSteeringWheelBold />
                </div>
                <button className="flex items-center gap-1 w-[155px]  px-2 h-[50px]  uppercase font-bold font-roboto text-sm bg-yellow text-dark-green  duration-500 justify-center transition-all group">
                  Read More{" "}
                  <RiArrowRightDoubleLine className="text-xl group-hover:translate-x-1 duration-500 transition-all" />
                </button>
              </div>
            </footer>
          </article>
          <article className=" pt-10 bg-white border border-dem-gray relative isolate overflow-hidden  hover:border-yellow duration-500 transition-all">
            <header className="text-center mb-8">
              <h5 className="text-2xl font-bold">Premium Taxi</h5>
              <span className="block font-bold text-dark-gray">Poland</span>
            </header>
            <div className="flex px-10 flex-col gap-3 mb-16">
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">Base Rate:</span>
                <span className="font-bold">$2.50</span>
              </div>
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">
                  Full Day Trip:
                </span>
                <span className="font-bold">$4.00</span>
              </div>
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">
                  Additional Kilos:
                </span>
                <span className="font-bold">$3.00</span>
              </div>
              <div className="flex items-center font-roboto justify-between">
                <span className="font-medium text-dark-gray">Passenger:</span>
                <span className="font-bold">6</span>
              </div>
            </div>
            <footer className="relative isolate">
              <Image
                width={380}
                height={250}
                alt="bg"
                src="/home3/pricing/car.webp"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 grid place-content-center isolate">
                <div className="grid place-content-center size-[65px] border-[6px] border-white absolute top-0 left-1/2 text-yellow bg-black text-3xl rounded-full -translate-y-1/2 -translate-x-1/2">
                  <PiSteeringWheelBold />
                </div>
                <button className="flex items-center gap-1 w-[155px]  px-2 h-[50px]  uppercase font-bold font-roboto text-sm bg-yellow text-dark-green  duration-500 justify-center transition-all group">
                  Read More{" "}
                  <RiArrowRightDoubleLine className="text-xl group-hover:translate-x-1 duration-500 transition-all" />
                </button>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
