import Button from "@/components/Button";

const MessageForm = () => {
  return (
    <div>
      <div className="mb-10">
        <h2 data-aos="fade-up" className="text-4xl font-roboto font-bold mb-5">
          Let’s Get in Touch
        </h2>
        <span className="text-sm text-dark-green">
          Your email address will not be published. Required fields are marked *
        </span>
      </div>
      <form className="flex flex-col gap-5">
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Your Name*"
            className="text-dark-green  placeholder:text-dark-green py-4 px-8 bg-dem-gray focus-visible:outline-yellow rounded-2xl"
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="text-dark-green  placeholder:text-dark-green py-4 px-8 bg-dem-gray focus-visible:outline-yellow rounded-2xl"
          />
        </div>
        <input
          type="text"
          placeholder="Website*"
          className="text-dark-green  placeholder:text-dark-green py-4 px-8 bg-dem-gray focus-visible:outline-yellow rounded-2xl"
        />
        <textarea
          placeholder="Write Message*"
          className="text-dark-green min-h-36 placeholder:text-dark-green py-4 px-8 bg-dem-gray focus-visible:outline-yellow rounded-2xl"
        />
        <Button className="w-full hover:bg-purple border-none sm:w-fit">
          SEND YOUR MESSAGE
        </Button>
      </form>
    </div>
  );
};
export default MessageForm;
