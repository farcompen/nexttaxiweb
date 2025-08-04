import Image from "next/image";
import Button from "../Button";

const HeroCard = ({ hero }) => {
  const heroImageStyle = {
    backgroundImage: `url(${hero.cover})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <article style={heroImageStyle} className="relative  isolate">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="max-w-container min-h-[800px] mx-auto px-container flex items-center relative text-center sm:text-start">
        <div>
          <p
            data-aos="fade-up"
            className="text-purple text-yellow mb-6 font-semibold uppercase"
          >
            WELCOME TO OUR TAXICO COMPANY
          </p>
          <h1
            data-aos="fade-up"
            className="leading-tight max-w-[650px] mb-9 text-white font-extrabold text-6xl md:text-7x lg:text-7xl xl:text-[82px]"
          >
            {hero.title}
          </h1>
          <p className="text-light-gray mb-14 max-w-[630px]">
            Proin accumsan magna rutrum, faucibus erat vitae, interdum augue.
            Nam eget in to tortor. Sed nulla purus, laoreet eu turpis quis,
            lacinia rhoncus lorem
          </p>
          <div className="flex flex-col sm:flex-row relative items-center gap-7">
            <Button className="bg-yellow text-black hover:text-white">
              DISCOVER MORE
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
export default HeroCard;
