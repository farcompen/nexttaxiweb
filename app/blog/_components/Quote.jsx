import { FaQuoteRight } from "react-icons/fa6";

const Quote = () => {
  return (
    <div className="flex text-center  gap-5 items-center justify-center flex-col">
      <div className="text-6xl text-yellow">
        <FaQuoteRight />
      </div>
      <blockquote className="text-dark font-roboto text-xl font-bold max-w-3xl">
        Diam luctus nostra dapibus varius et semper semper rutrum ad risus felis
        eros. Cursus libero viverra tempus netus diam vestibulum
      </blockquote>
      <span className="text-dark-gray">David Backhum</span>
    </div>
  );
};
export default Quote;
