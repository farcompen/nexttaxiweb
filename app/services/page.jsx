import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageHeading from "../../components/PageHeading/PageHeading";
import { services } from "@/utils/data";
import ServiceCard from "../../components/Service/ServiceCard";

const ServicesPage = () => {
  return (
    <>
      <Header />

      <section>
        <PageHeading>Services Page</PageHeading>

        <div className="max-w-container px-container mx-auto py-24 md:py-section">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ServicesPage;

export const metadata = {
  title: "Services - Taxpi",
  description: "services page",
};
