"use client";
import { category } from "@/staticTexts/categories";
import Link from "next/link";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const liStyle =
    "hover:bg-pink-600 hover:text-white text-black font-bold  transition-colors h-full flex justify-start items-center cursor-pointer p-2 text-sm ";
  return (
    <div className="mobile  h-max nav 3dot    ">
      <MdOutlineMenu
        onClick={() => setIsOpen(!isOpen)}
        className="text-4xl  cursor-pointer hover:text-gray-400 text-white transition-colors"
      />
      {isOpen && (
        <div className="mobile option mr-3 absolute right-5 top-[10vh] w-max p-1 md:hidden  backdrop-blur-xl bg-white/50 h-max text-white z-50 border border-pink-500 rounded-md ">
          <ul className="h-full grid grid-cols-2 gap-3 px-5  relative ">
            {category.map((nav) => (
              <Link
                onClick={() => setIsOpen(false)}
                className={`${liStyle}`}
                key={nav}
                href={`/user/products/category/${nav}`}
              >
                <li className="capitalize ">{nav}</li>
              </Link>
            ))}
            <IoCloseCircle
              onClick={() => setIsOpen(false)}
              className=" absolute top-0 text-white text-4xl  right-0 -m-4 bg-pink-500 rounded-full hover:bg-red-500 cursor-pointer  "
            />
          </ul>
        </div>
      )}
    </div>
  );
}
