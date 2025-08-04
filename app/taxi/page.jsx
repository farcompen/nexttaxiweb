import Image from "next/image";
import { Header } from "../../components/Header/Header";
import PageHeading from "../../components/PageHeading/PageHeading";
import Footer from "../home2/_components/Footer/Footer";
import Button from "../../components/Button";

const TaxiPage = () => {
  return (
    <>
      <Header />

      <section>
        <PageHeading>Sizin Taksiniz</PageHeading>

        <div className="max-w-container py-24 md:py-section mx-auto px-container">
          <header
            data-aos="fade-up"
            className="w-full max-w-[840px] mx-auto  md:py-5 bg-yellow text-black flex divide-y-2 md:divide-y-0 md:divide-x-2 justify-center flex-col md:flex-row lg:justify-between text-center  divide-black font-bold font-roboto uppercase items-center mb-12"
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="p-10 bg-white border border-dem-gray relative isolate overflow-hidden group hover:border-yellow duration-500 transition-all">
              <header className="text-center mb-8">
                <h5 className="text-2xl font-bold">Standard Taxi</h5>
                <span className="block font-bold text-dark-gray">Germany</span>
              </header>
              <div className="flex flex-col gap-3 mb-10">
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
              <footer>
                <Button className="hover:bg-yellow hover:text-black text-nowrap w-full ">
                  Order Taxi Now
                </Button>
                <div>
                  <Image
                    src="/home1/pricing/car.png"
                    width={300}
                    height={200}
                    className="w-full"
                    alt="car"
                  />
                </div>
              </footer>

              <div className="size-[314px] z-[-1] rounded-full bg-black absolute bottom-0 right-0 translate-y-1/2 group-hover:bg-yellow duration-500 transition-all translate-x-1/2"></div>
            </article>
            <article className="p-10 bg-white border border-dem-gray relative isolate overflow-hidden group hover:border-yellow duration-500 transition-all">
              <header className="text-center mb-8">
                <h5 className="text-2xl font-bold">Additional Taxi</h5>
                <span className="block font-bold text-dark-gray">Dubai</span>
              </header>
              <div className="flex flex-col gap-3 mb-10">
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
              <footer>
                <Button className="hover:bg-yellow hover:text-black text-nowrap w-full ">
                  Order Taxi Now
                </Button>
                <div>
                  <Image
                    src="/home1/pricing/car.png"
                    width={300}
                    height={200}
                    className="w-full"
                    alt="car"
                  />
                </div>
              </footer>

              <div className="size-[314px] z-[-1] rounded-full bg-black absolute bottom-0 right-0 translate-y-1/2 group-hover:bg-yellow duration-500 transition-all translate-x-1/2"></div>
            </article>
            <article className="p-10 bg-white border border-dem-gray relative isolate overflow-hidden group hover:border-yellow duration-500 transition-all">
              <header className="text-center mb-8">
                <h5 className="text-2xl font-bold">Premium Taxi</h5>
                <span className="block font-bold text-dark-gray">Poland</span>
              </header>
              <div className="flex flex-col gap-3 mb-10">
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
              <footer>
                <Button className="hover:bg-yellow hover:text-black text-nowrap w-full ">
                  Order Taxi Now
                </Button>
                <div>
                  <Image
                    src="/home1/pricing/car.png"
                    width={300}
                    height={200}
                    className="w-full"
                    alt="car"
                  />
                </div>
              </footer>

              <div className="size-[314px] z-[-1] rounded-full bg-black absolute bottom-0 right-0 translate-y-1/2 group-hover:bg-yellow duration-500 transition-all translate-x-1/2"></div>
            </article>
            <article className="p-10 bg-white border border-dem-gray relative isolate overflow-hidden group hover:border-yellow duration-500 transition-all">
              <header className="text-center mb-8">
                <h5 className="text-2xl font-bold">Standard Taxi</h5>
                <span className="block font-bold text-dark-gray">Germany</span>
              </header>
              <div className="flex flex-col gap-3 mb-10">
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
              <footer>
                <Button className="hover:bg-yellow hover:text-black text-nowrap w-full ">
                  Order Taxi Now
                </Button>
                <div>
                  <Image
                    src="/home1/pricing/car.png"
                    width={300}
                    height={200}
                    className="w-full"
                    alt="car"
                  />
                </div>
              </footer>

              <div className="size-[314px] z-[-1] rounded-full bg-black absolute bottom-0 right-0 translate-y-1/2 group-hover:bg-yellow duration-500 transition-all translate-x-1/2"></div>
            </article>
            <article className="p-10 bg-white border border-dem-gray relative isolate overflow-hidden group hover:border-yellow duration-500 transition-all">
              <header className="text-center mb-8">
                <h5 className="text-2xl font-bold">Additional Taxi</h5>
                <span className="block font-bold text-dark-gray">Dubai</span>
              </header>
              <div className="flex flex-col gap-3 mb-10">
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
              <footer>
                <Button className="hover:bg-yellow hover:text-black text-nowrap w-full ">
                  Order Taxi Now
                </Button>
                <div>
                  <Image
                    src="/home1/pricing/car.png"
                    width={300}
                    height={200}
                    className="w-full"
                    alt="car"
                  />
                </div>
              </footer>

              <div className="size-[314px] z-[-1] rounded-full bg-black absolute bottom-0 right-0 translate-y-1/2 group-hover:bg-yellow duration-500 transition-all translate-x-1/2"></div>
            </article>
            <article className="p-10 bg-white border border-dem-gray relative isolate overflow-hidden group hover:border-yellow duration-500 transition-all">
              <header className="text-center mb-8">
                <h5 className="text-2xl font-bold">Premium Taxi</h5>
                <span className="block font-bold text-dark-gray">Poland</span>
              </header>
              <div className="flex flex-col gap-3 mb-10">
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
              <footer>
                <Button className="hover:bg-yellow hover:text-black text-nowrap w-full ">
                  Order Taxi Now
                </Button>
                <div>
                  <Image
                    src="/home1/pricing/car.png"
                    width={300}
                    height={200}
                    className="w-full"
                    alt="car"
                  />
                </div>
              </footer>

              <div className="size-[314px] z-[-1] rounded-full bg-black absolute bottom-0 right-0 translate-y-1/2 group-hover:bg-yellow duration-500 transition-all translate-x-1/2"></div>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default TaxiPage;

export const metadata = {
  title: "Taxi - Taxpi",
  description: "about us page",
};
