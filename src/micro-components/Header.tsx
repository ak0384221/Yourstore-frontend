import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobileMenu";
import { FiShoppingCart } from "react-icons/fi";
import { FaBagShopping } from "react-icons/fa6";
import { category } from "@/staticTexts/categories";
import { fetchProductsName } from "@/utils/product/queries/fetchProductsName";
import SearchBar from "@/atomic-components/searchBar";

export default async function Header() {
  const products = await fetchProductsName();
  return (
    <header className=" w-full h-max   z-100 ">
      <section className="bg-[#1a1c1d] h-max py-2 flex justify-between items-center px-2">
        {/* Logo */}
        <div className="size-8 md:size-9    relative">
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
        <div className="flex flex-wrap  items-center md:mr-5 ">
          <div className="">
            <ul className="flex items-center  gap-3">
              <li>
                <SearchBar products={products} />
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
              <li className="md:hidden">
                <MobileMenu />
              </li>
              {/* <li className="flex text-[15px]  ">
                <button className="p-2 px-4 text-sm font-medium bg-pink-600 text-white rounded-3xl  cursor-pointer hover:bg-white hover:text-black transition-colors">
                  Sign In
                </button>
              </li> */}
              {/* <li className="flex text-[15px]  ">
                <Link
                  href={"/admin"}
                  className="p-2 px-4 text-sm font-medium bg-pink-600 text-white rounded-2xl  cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
                >
                  Admin
                </Link>
              </li> */}
              {/* Mobile menu toggle */}
            </ul>
          </div>
        </div>
      </section>

      {/* Collapsible menu */}

      <ul className="hidden md:flex justify-center gap-x-4 items-center  h-max px-2 py-1 flex-wrap bg-[#eff6f7] ">
        {category.map((item, index) => (
          <li key={index} className="text-black ">
            <Link
              href={`/user/products/category/${item}`}
              className="hover:text-pink-600 text-[12px] font-normal block capitalize"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
