import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const TopBar = () => {
  return (
    <div className="h-[var(--top-bar-height)] font-dmSans px-container lg:px-8 2xl:px-14  bg-black text-white hidden  sm:flex items-center justify-between">
      <div className="flex items-center gap-10 lg:gap-20">
        <div className="flex items-center gap-4">
          <IoLocationOutline className="text-xl" />
          <span className="hidden lg:block">
           Fabrikalar mah fevzi çakmak cad no 3 KIRIKKALE
          </span>
        </div>
        <Link
          href="mailto:needhelpvapez@gmail.com"
          className="flex items-center gap-4"
        >
          <MdOutlineMailOutline className="text-xl" />
          <span className="hidden lg:block">konaktaksi@gmail.com</span>
        </Link>
      </div>
      <div className="flex items-center gap-9">
        <span className="hidden lg:block">Bizi Takip edin:</span>
        <SocialLinks />
      </div>
    </div>
  );
};
export default TopBar;
