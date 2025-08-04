"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import SocialLinks from "./SocialLinks";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import Search from "./Search";
import Button from "../Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { homeLinks, pageLinks } from "../Dropdown/FlyoutLink";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = useCallback(() => setOpen(false), []);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchOpen = () => setIsSearchOpen(true);
  const searchClose = () => setIsSearchOpen(false);

  useEffect(() => {
    // This will close the menu when use pres Escape key
    const handleKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [closeMenu]);

  return (
    <>
      <button onClick={openMenu} className="xl:hidden text-3xl md:text-4xl">
        <FiMenu />
      </button>
      {open &&
        createPortal(
          <>
            <RemoveScroll>
              <FocusLock returnFocus>
                <div className="fixed  z-50 inset-0 p-4">
                  <div
                    onClick={closeMenu}
                    className="backdrop  text-dark-green absolute inset-0 z-40  bg-opacity-30 backdrop-blur-[3px]"
                  />
                  <div className="drawer bg-dark-hero absolute top-0 bottom-0 w-full max-w-md text-black bg-yellow  z-50  flex flex-col right-0">
                    <header className="px-4 pt-6  pb-8   flex justify-between items-center">
                      <Link
                        href="/"
                        className="text-5xl font-roboto font-bold text-black"
                      >
                        Kale Taksi<span className="text-black">.</span>
                      </Link>
                      <button onClick={closeMenu}>
                        <IoClose className="text-3xl" />
                      </button>
                    </header>
                    <div className="flex-1 pt-1 px-7 overflow-auto">
                      <div className="flex md:hidden pb-8 items-center gap-5">
                        <button
                          onClick={searchOpen}
                          className="size-[60px] bg-black text-white uppercase font-bold font-roboto hover:bg-dark-green grid place-content-center duration-500 transition-all  text-2xl rounded-full"
                        >
                          <IoSearchOutline />
                        </button>

                        {isSearchOpen ? (
                          <Search
                            isSearchOpen={isSearchOpen}
                            onClose={searchClose}
                          />
                        ) : null}

                        <Link href="tel:+905335228080" >0533 678 89 89</Link>
                      </div>
                      <div className="flex flex-col text-base font-medium  gap-5 ">
                        <Link onClick={closeMenu} href="/"
                           className="font-semibold hover:text-dark-green  duration-300 uppercase focus-visible:text-dark-green transition-all"
                           >
                                  Anasayfa
                                </Link>

                        <Link
                          onClick={closeMenu}
                          className="font-semibold hover:text-dark-green  duration-300 uppercase focus-visible:text-dark-green transition-all"
                          href="/contact"
                        >
                         Biz Nerdeyiz
                        </Link>

                        <Link
                          onClick={closeMenu}
                          className="font-semibold hover:text-dark-green  duration-300 uppercase focus-visible:text-dark-green transition-all"
                          href="/"
                        >
                          Taksi Çağır
                        </Link>

                        

                        <Link
                          onClick={closeMenu}
                          className="font-semibold hover:text-dark-green  duration-300 uppercase focus-visible:text-dark-green transition-all"
                          href="/contact"
                        >
                          İletişm
                        </Link>
                      </div>
                    </div>
                    <footer className="pt-2 pb-7 px-7 flex items-center justify-end gap-4">
                      <SocialLinks />
                    </footer>
                  </div>
                </div>
              </FocusLock>
            </RemoveScroll>
          </>,
          document.body
        )}
    </>
  );
};
export default MobileMenu;
