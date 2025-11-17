"use client";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNav = [
    { name: "beauty" },
    { name: "fragrances" },
    { name: "furniture" },
    { name: "groceries" },
    { name: "home-decoration" },
    { name: "kitchen-accessories" },
    { name: "laptops" },
    { name: "mens-shirts" },
    { name: "mens-shoes" },
    { name: "mens-watches" },
    { name: "mobile-accessories" },
    { name: "motorcycle" },
    { name: "skin-care" },
    { name: "smartphones" },
    { name: "sports-accessories" },
    { name: "sunglasses" },
    { name: "tablets" },
    { name: "tops" },
    { name: "vehicle" },
    { name: "womens-bags" },
    { name: "womens-dresses" },
    { name: "womens-jewellery" },
    { name: "womens-shoes" },
    { name: "womens-watches" },
  ];

  const liStyle =
    "hover:bg-pink-600 hover:text-white transition-colors h-full flex justify-center items-center cursor-pointer py-2 ";
  return (
    <div className="mobile  h-max nav 3dot    ">
      <MdOutlineMenu
        onClick={() => setIsOpen(!isOpen)}
        className="text-4xl  cursor-pointer hover:text-gray-400 text-white transition-colors"
      />
      {isOpen && (
        <div className="mobile option absolute right-5 top-[10vh] w-[90svw] md:w-[40svw] bg-[#1a1c1d] h-max text-white z-50">
          <ul className="h-full   grid grid-cols-2 gap-2 ">
            {mobileNav.map((nav, ind) => (
              <Link
                onClick={() => setIsOpen(false)}
                className={`${liStyle}`}
                key={nav.name}
                href={`/user/products/category/${nav.name}`}
              >
                <li className="capitalize">{nav.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
