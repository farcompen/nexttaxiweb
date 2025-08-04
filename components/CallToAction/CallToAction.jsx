import Button from "../Button";

const CallToAction = () => {
  return (
    <section className="bg-yellow text-black bg-cta bg-right-bottom bg-no-repeat relative isolate">
      <div className="pt-14 pb-16 mx-auto max-w-container px-container ">
        <div className="flex flex-col items-center gap-5 justify-between md:flex-row relative z-10">
          <h2
            data-aos="fade-up"
            className="text-4xl leading-tight sm:text-[40px] font-bold max-w-[600px] text-center md:text-start"
          >
            Call Now and Book Our Taxi for Your Next Ride
          </h2>
          <Button className="">CHOOSE YOUR TAXI</Button>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
