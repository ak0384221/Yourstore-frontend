"use client";
import { allCategories } from "@/staticTexts/categories";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const liStyle =
    "hover:bg-pink-600 hover:text-white transition-colors h-full flex justify-start items-center cursor-pointer py-2 px-3 ";
  return (
    <div className="mobile  h-max nav 3dot    ">
      <MdOutlineMenu
        onClick={() => setIsOpen(!isOpen)}
        className="text-4xl  cursor-pointer hover:text-gray-400 text-white transition-colors"
      />
      {isOpen && (
        <div className="mobile option absolute right-5 top-[10vh] w-[40svw] py-5 px-2 md:w-[20svw] bg-[#1a1c1d] h-max text-white z-50">
          <ul className="h-full   gap-2 ">
            {allCategories.map((nav, ind) => (
              <Link
                onClick={() => setIsOpen(false)}
                className={`${liStyle}`}
                key={nav.name}
                href={`/user/products/category/${nav.name}`}
              >
                <li className="capitalize ">{nav.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
