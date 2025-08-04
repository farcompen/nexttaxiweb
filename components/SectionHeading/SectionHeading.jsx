import { twMerge } from "tailwind-merge";

const SectionHeading = ({ label, children, className }) => {
  return (
    <header
      className={twMerge(
        "text-center text-dark-gray mb-10 sm:mb-12",
        className
      )}
    >
      <span
        data-aos="fade-up"
        className="font-bold uppercase  font-roboto text-inherit block mb-5"
      >
        {label}
      </span>
      <h2
        data-aos="fade-up"
        className="mx-auto text-4xl max-w-lg sm:leading-snug leading-snug sm:text-5xl font-extrabold text-black"
      >
        {children}
      </h2>
    </header>
  );
};
export default SectionHeading;
