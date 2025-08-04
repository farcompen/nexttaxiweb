import { twMerge } from "tailwind-merge";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "h-[60px] bg-black text-white uppercase font-bold font-roboto text-sm hover:bg-dark-green duration-500 transition-all px-12",
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
