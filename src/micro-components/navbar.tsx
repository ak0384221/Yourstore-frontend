import Logo from "@/atomic-components/logo";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import MobileMenu from "./mobileMenu";
import { fetchCartItem } from "@/utils/cart/fetchCartItem";

export default async function Navbar() {
  const navbar = [
    { name: "home", link: "/" },
    {
      name: "shop",
      link: "/",
      children: [
        {
          name: "tshirt",
          link: "/products/category/tshirt",
        },
        {
          name: "watch",
          link: "/products/category/watch",
        },
        {
          name: "shoes",
          link: "/products/category/shoes",
        },
        {
          name: "jewelry",
          link: "/products/category/jewelry",
        },
      ],
    },
    { name: "about us", link: "/about" },
  ];
  interface Tnavbar {
    name: string;
    link: string;
    children?: { name: string; link: string }[];
  }
  const items = await fetchCartItem();

  return (
    <div className="navbar fixed bg-white z-100 top-0 left-0 w-full flex justify-between items-center py-4 px-6 md:justify-evenly mb-[10dvh]">
      <Logo />
      <nav className="bg-transparent hidden md:flex   text-[#272727] text-sm w-max px-8 ">
        <ul className="flex  gap-3 ">
          {navbar.map((nav: Tnavbar) => {
            return (
              <li className="group relative capitalize" key={nav.name}>
                <Link href={nav.link}>{nav.name}</Link>

                {nav.children && nav.children.length > 0 && (
                  <ul className="hidden group-hover:block bg-white text-black  absolute  z-100 w-[15dvw]  border-t-2   ">
                    <div className="  w-full ">
                      {nav.children.map((nav) => (
                        <Link
                          key={nav.name}
                          className="bg-blue-300 "
                          href={nav.link}
                        >
                          <li className="font-light  py-2 px-4 w-full h-full  hover:bg-neutral-200">
                            {nav.name}
                          </li>
                        </Link>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="cart flex gap-4 ">
        <IoIosSearch className="text-xl " />
        <Link href={"/cart"} className=" relative">
          <FiShoppingCart className=" text-xl" />
          <div className="absolute -top-5 -right-5 size-6 bg-[#fff347] text-sm flex justify-center items-center rounded-full">
            {items?.length || 0}
          </div>
        </Link>

        <Link href={"/"} className="">
          <FaUserAlt className=" text-xl text-neutral-700" />
        </Link>
      </div>
      <MobileMenu />
    </div>
  );
}
