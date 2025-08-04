import About from "../components/About/About";
import Achievement from "../components/Achievement/Achievement";
import Blog from "../components/Blog/Blog";
import Booking from "../components/Booking/Booking";
import CallToAction from "../components/CallToAction/CallToAction";
import Companies from "../components/Companies/Companies";
import Download from "../components/Download/Download";
import Drivers from "../components/Drivers/Drivers";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import Safety from "../components/Safety/Safety";
import Service from "../components/Service/Service";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <Booking />
        <Drivers />
        <Download />
        <Testimonials />
        <Pricing />
        <Companies />
        <Safety />
        <Achievement />
        <Blog />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
