"use client";

import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import Search from "./Search";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Button from "../Button";
import FlyoutLink, { homeLinks, pageLinks } from "../Dropdown/FlyoutLink";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchOpen = () => setIsSearchOpen(true);
  const searchClose = () => setIsSearchOpen(false);

  return (
    <nav className=" flex     h-20 2xl:h-[100px]">
      <div className="2xl:basis-[300px] flex justify-center items-center  px-10 bg-logo bg-no-repeat bg-cover">
        <Link href="/" className="text-4xl font-roboto font-bold text-yellow">
          Kale Taksi<span className="text-black">.</span>
        </Link>
      </div>
      <div className=" hidden flex-1 xl:flex items-center justify-between bg-yellow px-10 2xl:px-16 gap-10 xl:gap-16">
        <ul className=" flex flex-1 text-lg font-semibold items-center justify-between gap-2 max-w-5xl mx-auto">
          <li>
            <FlyoutLink links={homeLinks}>
              <Link href="#">Anasayfa</Link>
            </FlyoutLink>
          </li>

          <li>
            <FlyoutLink links={pageLinks}>
              <Link href="#">pages</Link>
            </FlyoutLink>
          </li>
          <li>
            <Link
              className="hover:text-dark-green duration-500 transition-all"
              href="/services"
            >
              Hizmetler
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-dark-green duration-500 transition-all"
              href="/booking"
            >
            Taksi Çağır
            </Link>
          </li>
          {/* <li>
            <Link
              className="hover:text-dark-green duration-500 transition-all"
              href="/blog"
            >
              BLOG
            </Link>
          </li> */}
          <li>
            <Link
              className="hover:text-dark-green duration-500 transition-all"
              href="/contact"
            >
              İletişim
            </Link>
          </li>
        </ul>
        <div className=" flex items-center gap-5 ">
          <button onClick={searchOpen} className="px-5 text-2xl">
            <IoSearchOutline />
          </button>
          {isSearchOpen ? (
            <Search isSearchOpen={isSearchOpen} onClose={searchClose} />
          ) : null}
          <div className="hidden 2xl:block">
            <Button>Daha fazla ...</Button>
          </div>
        </div>
      </div>
      <div className=" basis-full xl:basis-64 bg-dark-green flex items-center 2xl:basis-[300px] justify-between">
        <Link className="flex group items-center" href="tel:+8895679875678">
          <span className="size-10 sm:size-[60px] shrink-0 rounded-full grid place-content-center border-4 border-dark-green -translate-x-1/2  bg-yellow text-xl group-hover:bg-white duration-500 transition-all">
            <FiPhoneCall />
          </span>

          <span className="hidden sm:flex flex-col font-roboto font-semibold">
            <span className="text-sm uppercase text-steel-gray">
              7/24 Ara ...
            </span>
            <span className="font-roboto text-xl text-yellow">
              0533 678 89 89
            </span>
          </span>
        </Link>
        <div className="mx-5 text-white xl:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
