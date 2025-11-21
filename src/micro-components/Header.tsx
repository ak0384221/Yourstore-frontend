import Link from "next/link";
import { highlightedCategories } from "@/staticTexts/categories";
import Image from "next/image";
import MobileMenu from "./mobileMenu";
import { FiShoppingCart } from "react-icons/fi";
import { FaBagShopping } from "react-icons/fa6";

export default async function Header() {
  return (
    <header className=" fixed top-0 w-full h-[15svh]  z-100 ">
      <section className="bg-[#1a1c1d] h-[9svh]  flex justify-between items-center px-2 ">
        {/* Logo */}
        <div className="size-8 md:size-12  relative">
          <Link href="/user">
            <Image
              src="/ecommerce.png"
              alt="logo"
              width={200}
              height={200}
              className="cursor-pointer absolute w-full h-full object-cover"
            />
          </Link>
        </div>

        {/* Search + Right Actions */}
        <div className="flex flex-wrap  items-center ">
          <div className="">
            <ul className="flex items-center gap-2 md:gap-5">
              <li>
                <input
                  type="text"
                  placeholder="Search ..."
                  className="border border-white text-white text-xs md:text-md p-2 pl-4 rounded-2xl w-[40svw] md:w-[30svw] focus:outline-0 placeholder:text-sm"
                />
              </li>
              <li title="orders" className=" cursor-pointer ">
                <Link href="/user/orders" className="">
                  <div className="">
                    <FaBagShopping className="text-2xl text-white" />
                  </div>
                </Link>
              </li>
              {/* Cart */}
              <li title="cart" className=" cursor-pointer relative">
                <Link href="/user/cart" className="">
                  <FiShoppingCart className="text-2xl hover:text-gray-400 text-white transition-colors" />
                </Link>
              </li>
              <li>
                <MobileMenu />
              </li>
              {/* <li className="flex text-[15px]  ">
                <button className="p-2 px-4 text-sm font-medium bg-pink-600 text-white rounded-2xl  cursor-pointer hover:bg-black hover:text-white transition-colors">
                  Sign In
                </button>
              </li> */}
              <li className="flex text-[15px]  ">
                <Link
                  href={"/admin"}
                  className="p-2 px-4 text-sm font-medium bg-pink-600 text-white rounded-2xl  cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
                >
                  Admin
                </Link>
              </li>
              {/* Mobile menu toggle */}
            </ul>
          </div>
        </div>
      </section>

      {/* Collapsible menu */}

      <ul className="flex justify-center gap-x-4 items-center  h-[6svh] px-2 flex-wrap bg-[#eff6f7] leading-tight py-1 ">
        {highlightedCategories.map((item, index) => (
          <li key={index} className="text-black ">
            <Link
              href={`/user/products/category/${item.name}`}
              className="hover:text-pink-600 text-[12px] font-normal block capitalize"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
``;
