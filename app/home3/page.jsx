import { Header } from "../../components/Header/Header";
import Blog from "../home2/_components/Blog/Blog";
import Drivers from "../home2/_components/Drivers/Drivers";
import Footer from "../home2/_components/Footer/Footer";
import About from "./_components/About/About";
import Booking from "./_components/Booking/Booking";
import Companies from "./_components/Companies/Companies";
import Download from "./_components/Download/Download";
import Hero from "./_components/Hero/Hero";
import Pricing from "./_components/Pricing/Pricing";
import Services from "./_components/Services/Services";
import Testimonials from "./_components/Testimonials/Testimonials";

const HomePage3 = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Drivers />
        <Pricing />
        <Download />
        <Booking />
        <Testimonials />
        <Blog />
        <Companies />
      </main>
      <Footer />
    </>
  );
};
export default HomePage3;
