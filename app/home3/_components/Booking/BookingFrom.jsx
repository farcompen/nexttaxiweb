import Button from "@/components/Button";

const BookingFrom = () => {
  return (
    <form className=" w-full px-5 sm:px-12 py-10 sm:py-14">
      <div className=" grid gap-5  sm:grid-cols-2 mb-5">
        <input
          required
          placeholder="Your name"
          aria-label="Your name"
          className="text-sm text-dark-gray font-roboto font-bold bg-white p-5 placeholder:text-dark-gray focus-visible:outline-yellow"
          type="text"
        />
        <input
          required
          placeholder="Phone number"
          aria-label="Phone number"
          className="text-sm placeholder:text-dark-gray text-dark-gray font-roboto font-bold bg-white p-5 focus-visible:outline-yellow"
          type="text"
          pattern="^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$"
          title="Please enter a valid phone number format: (123) 456-7890 or 123-456-7890"
        />

        <select
          required
          aria-label="Ticket type"
          className="text-sm text-dark-gray font-roboto font-bold bg-white p-5 placeholder:text-dark-gray focus-visible:outline-yellow"
        >
          <option value="" disabled selected>
            Select Ticket Type
          </option>
          <option value="standard">Standard</option>
          <option value="business">Business</option>
          <option value="economy">Economy</option>
          <option value="vip-special">VIP Special</option>
          <option value="comfort">Comfort</option>
        </select>

        <select
          required
          aria-label="Number of passengers"
          className="text-sm text-dark-gray font-roboto font-bold bg-white p-5 placeholder:text-dark-gray focus-visible:outline-yellow"
        >
          <option disabled value="">
            Number of passengers
          </option>
          <option value="person1">1 Person</option>
          <option value="person2">2 Persons</option>
          <option value="person3">3 Persons</option>
          <option value="person4">4 Persons</option>
          <option value="person5">5 Persons</option>
        </select>

        <input
          required
          placeholder="Start destination"
          aria-label="Start destination"
          className="text-sm placeholder:text-dark-gray text-dark-gray font-roboto font-bold bg-white p-5 focus-visible:outline-yellow"
          type="text"
        />
        <input
          required
          placeholder="End destination"
          aria-label="End destination"
          className="text-sm placeholder:text-dark-gray text-dark-gray font-roboto font-bold bg-white p-5 focus-visible:outline-yellow"
          type="text"
        />

        <input
          required
          aria-label="Select time"
          className="text-sm placeholder:text-dark-gray text-dark-gray font-roboto font-bold bg-white p-5 focus-visible:outline-yellow"
          type="time"
        />

        <input
          required
        
          aria-label="Select date"
          className="text-sm placeholder:text-dark-gray text-dark-gray font-roboto font-bold bg-white p-5 focus-visible:outline-yellow"
          type="date"
        />
      </div>
      <Button className="text-black bg-yellow hover:bg-black hover:text-white w-full">
        BOOK TAXI NOW
      </Button>
    </form>
  );
};
export default BookingFrom;
