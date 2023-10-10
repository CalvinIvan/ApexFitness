import React from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import Banner from "../public/Banner.png";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="relative z-[999]">
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
    </header>
  );
}
