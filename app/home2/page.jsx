import { Header } from "../../components/Header/Header";
import About from "./_components/About/About";
import Blog from "./_components/Blog/Blog";
import Booking from "./_components/Booking/Booking";
import Companies from "./_components/Companies/Companies";
import Drivers from "./_components/Drivers/Drivers";
import Footer from "./_components/Footer/Footer";

import Hero from "./_components/Hero/Hero";
import Services from "./_components/Services/Services";
import Testimonials from "./_components/Testimonials/Testimonials";
import VideoSection from "./_components/VideoSection/VideoSection";

const HomePage2 = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Drivers />
        <Services />
        <Testimonials />
        <Booking />
        <Blog />
        <Companies />
      </main>
      <Footer />
    </>
  );
};
export default HomePage2;
