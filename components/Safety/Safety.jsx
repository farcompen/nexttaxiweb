import { RiTaxiWifiFill } from "react-icons/ri";
import FeaturedVideo from "./FeaturedVideo";
import { FaTaxi } from "react-icons/fa6";

const Safety = () => {
  return (
    <div className="relative flex flex-col lg:flex-row  isolate">
      <div className="flex-[9] min-h-[600px] bg-yellow ">
        <FeaturedVideo />
      </div>
      <div className=" flex-[10] min-h-[600px] bg-dem-gray pl-container pr-container lg:pl-20 flex items-center bg-safety bg-bottom bg-no-repeat">
        <div>
          <h2
            data-aos="fade-up"
            className="text-4xl sm:text-5xl mb-7 font-bold font-space_grotesk sm:leading-snug leading-snug max-w-xl"
          >
            Safe and Reliable Supper Taxi Service for You
          </h2>
          <p className="text-dark-gray max-w-[580px] mb-8">
            Phasellus rutrum nibh vitae magna finibus, vitae eleifend elit
            luctus. Quisque gravida enim nec augue tincidunt, vitae tincidunt
          </p>
          <div className="mb-10">
            <div className="flex group  mb-8 items-center gap-6">
              <div className="size-[70px] bg-yellow text-black grid place-content-center text-4xl rounded-full bg-purple group-hover:bg-black  group-hover:text-white transition-all duration-500 shrink-0">
                <RiTaxiWifiFill />
              </div>

              <div>
                <h5 className="mb-1 text-xl font-bold">Professional Driver</h5>
                <p className="text-dark-gray leading-normal max-w-[330px]">
                  Fusce luctus ante eget urna elementaa molestie tortor congue.
                  In hacplate
                </p>
              </div>
            </div>

            <div className="flex group  gap-6 items-center">
              <div className="size-[70px] bg-yellow text-black grid place-content-center text-4xl rounded-full bg-purple group-hover:bg-black group-hover:text-white transition-all duration-500 shrink-0">
                <FaTaxi />
              </div>

              <div>
                <h5 className="mb-1 text-xl font-bold">Supper Taxi Car</h5>
                <p className="text-dark-gray leading-normal max-w-[330px]">
                  Fusce luctus ante eget urna elementaa molestie tortor congue.
                  In hacplate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Safety;
