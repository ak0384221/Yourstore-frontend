import Link from "next/link";
import { highlightedCategories } from "@/staticTexts/categories";
import Image from "next/image";
import MobileMenu from "./mobileMenu";
import { FiShoppingCart } from "react-icons/fi";

export default async function Header() {
  return (
    <header className="shadow-lg fixed top-0 w-full h-max  z-100 ">
      <section className="bg-[#262c35] h-[10dvh] flex justify-between items-center px-2 ">
        {/* Logo */}
        <div className="size-8 md:size-12   relative">
          <Link href="/user" className="">
            <Image
              src="/ecommerce.png"
              alt="logo"
              width={40}
              height={40}
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
                  className="border border-white text-white text-xs md:text-md p-2 pl-4 rounded-2xl w-[40dvw] md:w-[30dvw] focus:outline-0 placeholder:text-sm"
                />
              </li>
              {/* Cart */}
              <li className=" cursor-pointer relative">
                <Link href="/user/cart" className="relative">
                  <FiShoppingCart className="text-2xl hover:text-gray-400 text-white transition-colors" />
                </Link>
              </li>
              <li>
                <MobileMenu />
              </li>

              {/* Sign In */}
              <li className="flex text-[15px]  ">
                <button className="p-2 px-4 text-sm font-medium bg-pink-600 text-white rounded-2xl  cursor-pointer hover:bg-black hover:text-white transition-colors">
                  Sign In
                </button>
              </li>

              {/* Mobile menu toggle */}
              <li> </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Collapsible menu */}

      <ul className="flex justify-center gap-x-4 items-start  py-2 px-2 flex-wrap bg-white ">
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
