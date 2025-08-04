import Button from "@/components/Button";

const HeroCard = ({ hero }) => {
  const heroImageStyle = {
    backgroundImage: `url(${hero.cover})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover ",
  };

  return (
    <article style={heroImageStyle} className="relative bg-cover  isolate">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-container min-h-[800px] md:min-h-[1000px] mx-auto px-container text-center sm:text-start flex justify-center flex-col relative text-white 2xl:pt-16">
        <span
          data-aos="fade-up"
          className="text-2xl font-roboto font-medium mb-5 text-white"
        >
          24/7 Online Taxi Service
        </span>
        <h1
          data-aos="fade-up"
          className="text-6xl sm:text-7xl md:text-[80px] mb-8 text-white font-bold leading-tight max-w-2xl"
        >
          {hero.title}
        </h1>
        <p className="text-dem-gray mb-8 max-w-[600px]">
          Proin accumsan magna rutrum, faucibus erat vitae, interdum augue. Nam
          eget in to tortor. Sed nulla purus, laoreet eu turpis quis, lacinia
          rhoncus lorem
        </p>
        <div className="flex items-center gap-5 justify-center sm:justify-start">
          <Button className="text-black bg-yellow hover:bg-black hover:text-white">
            LEARN MORE
          </Button>
          <Button className="hover:text-black hover:bg-yellow">
            BOOK A TAXI
          </Button>
        </div>
      </div>
    </article>
  );
};
export default HeroCard;
