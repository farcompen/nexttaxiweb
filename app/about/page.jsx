import { Header } from "../../components/Header/Header";

import Footer from "../../components/Footer/Footer";
import PageHeading from "../../components/PageHeading/PageHeading";
import About from "../home3/_components/About/About";
import Drivers from "../home2/_components/Drivers/Drivers";
import Testimonials from "../home3/_components/Testimonials/Testimonials";
import VideoSection from "../home2/_components/VideoSection/VideoSection";

const AboutPage = () => {
  return (
    <>
      <Header />

      <section>
        <PageHeading>Hakkımızda</PageHeading>

        <div className="py-24 md:py-section">
          <About />
          <VideoSection />
          <Drivers />
          <Testimonials />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default AboutPage;

export const metadata = {
  title: "About - Taxpi",
  description: "about us page",
};
