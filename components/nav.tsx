"use client";
import React, { useState } from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import Banner from "../public/Banner.png";
import Image from "next/image";
import { CgMenuGridO } from "react-icons/cg";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <CgMenuGridO
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] lg:hidden text-4xl hover:cursor-pointer"
      />
      {nav ? (
        <div className="fixed top-0 w-full h-screen bg-white/90 flex flex-col items-center justify-center z-20 ease-in-out duration-200 ">
          <ul className="flex flex-col items-center justify-center">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.name}
                  className="w-full flex flex-col items-center justify-center bg-gray-100 shadow-gray-300 rounded-full shadow-lg m-2 p-4"
                >
                  <Link href={link.link} onClick={handleNav}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="relative z-[999] hidden lg:block">
          <div>
            <nav className="flex fixed top-0 h-16 w-[100vw] py-2 sm:h-[initial] justify-between bg-[#F8F8F8]">
              <div className="pt-2">
                <Image src={Banner} alt="Banner" width="225" height="225" />
              </div>

              <ul className="flex flex-row gap-[2.5rem] px-16 text-xl items-center justify-center">
                {navLinks.map((link) => {
                  return (
                    <li
                      key={link.name}
                      className=" font-medium text-gray-700 hover:scale-105 hover:text-[#FD6343] hover:underline transition"
                    >
                      <Link href={link.link}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
export default Nav;
