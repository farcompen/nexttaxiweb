import BookingFrom from "../../components/BookingFrom/BookingFrom";
import Button from "../../components/Button";
import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import PageHeading from "../../components/PageHeading/PageHeading";

const BookingPage = () => {
  return (
    <>
      <Header />

      <section>
        <PageHeading>Book a Ride</PageHeading>

        <div className="max-w-container px-container mx-auto py-24 md:py-section">
          <BookingFrom />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default BookingPage;

export const metadata = {
  title: "Booking - Taxpi",
  description: "Booking page",
};
