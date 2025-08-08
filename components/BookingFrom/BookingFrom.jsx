import Button from "../Button";

const BookingFrom = () => {
  return (
    <form className="shadow-card  w-full bg-white px-5 sm:px-12 py-10 sm:py-14">
      <header>
        <h3 className="text-2xl font-bold font-roboto mb-6">
        Taksi Çağır
        </h3>
      </header>
      <div className=" grid gap-5  sm:grid-cols-2 mb-5">
        <input
          required
          placeholder="Adınız"
          aria-label="Your name"
          className="text-sm text-dark-gray font-roboto font-bold bg-dem-gray p-5 placeholder:text-dark-gray focus-visible:outline-yellow"
          type="text"
        />
        <input
          required
          placeholder="Telefon No"
          aria-label="Phone number"
          className="text-sm placeholder:text-dark-gray text-dark-gray font-roboto font-bold bg-dem-gray p-5 focus-visible:outline-yellow"
          type="text"
          pattern="^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$"
          title="Please enter a valid phone number format: (123) 456-7890 or 123-456-7890"
        />

        <select
          defaultValue={'DEFAULT'}
          required
          aria-label="Ticket type"
          className="text-sm text-dark-gray font-roboto font-bold bg-dem-gray p-5 placeholder:text-dark-gray focus-visible:outline-yellow"
        >
          <option value="Default" disabled>
            Yolculuk Türü seçiniz
          </option>
          <option value="standard">Standard</option>
          <option value="business">Business</option>
          <option value="economy">Economy</option>
          <option value="vip-special">VIP Special</option>
          <option value="comfort">Comfort</option>
        </select>

        <select
          defaultValue={'DEFAULT'}
          required
          aria-label="Number of passengers"
          className="text-sm text-dark-gray font-roboto font-bold bg-dem-gray p-5 placeholder:text-dark-gray focus-visible:outline-yellow"
        >
          <option disabled value="Default">
         Yolcu sayısı
          </option>
          <option value="person1">1 Person</option>
          <option value="person2">2 Persons</option>
          <option value="person3">3 Persons</option>
          <option value="person4">4 Persons</option>
          <option value="person5">5 Persons</option>
        </select>

        <input
          required
          placeholder="Binilecek adres"
          aria-label="Start destination"
          className="text-sm placeholder:text-dark-gray text-dark-gray font-roboto font-bold bg-dem-gray p-5 focus-visible:outline-yellow"
          type="text"
        />
        <input
          required
          placeholder="Gidilecek adres"
          aria-label="End destination"
          className="text-sm placeholder:text-dark-gray text-dark-gray font-roboto font-bold bg-dem-gray p-5 focus-visible:outline-yellow"
          type="text"
        />

        <input
          required
          aria-label="Select time"
          className="text-sm placeholder:text-dark-gray text-dark-gray font-roboto font-bold bg-dem-gray p-5 focus-visible:outline-yellow"
          type="time"
        />

        <input
          required
          aria-label="Select date"
          className="text-sm placeholder:text-dark-gray text-dark-gray font-roboto font-bold bg-dem-gray p-5 focus-visible:outline-yellow"
          type="date"
        />
      </div>
      <Button className="text-black bg-yellow hover:bg-black hover:text-white w-full">
        Taksi Çağır
      </Button>
    </form>
  );
};
export default BookingFrom;
