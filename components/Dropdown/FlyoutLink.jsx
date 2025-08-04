"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const pageLinks = [
  { label: "error-404", href: "/404" },
  { label: "Blog details", href: "/blog/1" },
  { label: "About Us", href: "/about" },
  { label: "Our Taxi", href: "/taxi" },
  { label: "Our Drivers", href: "/drivers" },
];
export const homeLinks = [
  { label: "home", href: "/" },
  { label: "home 2", href: "/home2" },
  { label: "home 3", href: "/home3" },
];

const FlyoutLink = ({ children, links }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <div className="capitalize">{children}</div>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <div className="w-fit  bg-white p-6 shadow-xl ">
              <div className="space-y-3">
                {links?.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href + link.label}
                    className="block text-nowrap  uppercase text-sm font-semibold  hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;
