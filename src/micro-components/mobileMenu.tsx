"use client";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNav = [
    { name: "Tshirt", link: "/products/category/tshirt" },
    { name: "Watch", link: "/products/category/watch" },
    { name: "shoes", link: "/products/category/shoes" },
    { name: "jewelry", link: "/products/category/jewelry" },
    { name: "about us", link: "/about" },
    { name: "profile", link: "/profile" },
  ];
  const liStyle =
    "hover:bg-neutral-800 w-full h-full flex justify-center items-center cursor-pointer";
  return (
    <div className="mobile  h-max nav 3dot lg:hidden relative border ">
      <MdOutlineMenu
        onClick={() => setIsOpen(!isOpen)}
        className="text-4xl cursor-pointer "
      />
      {isOpen && (
        <div className="mobile option absolute right-5 top-[7vh] w-[50dvw] bg-black h-[50dvh] text-white">
          <ul className="h-full  divide-y-1 divide-neutral-700 flex flex-col justify-evenly items-center">
            {mobileNav.map((nav) => (
              <Link
                onClick={() => setIsOpen(false)}
                className={`${liStyle}`}
                key={nav.name}
                href={nav.link}
              >
                {" "}
                <li>{nav.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
