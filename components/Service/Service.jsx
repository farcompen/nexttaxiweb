import ServiceCard from "./ServiceCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import { services } from "@/utils/data";

const Service = () => {
  return (
    <section className=" bg-dem-gray  bg-service bg-center bg-no-repeat">
      <div className="bg-service-2 py-24 md:py-section bg-no-repeat bg-right-bottom">
        <div className="max-w-container mx-auto px-container">
          <SectionHeading label="TAXI SERVICE">
            Best Taxi Service For You
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
