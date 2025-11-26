"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

type productMinorData = {
  _id: string;
  name: string;
  productId: string;
};
type productMinorDataRes = {
  ok: boolean;
  error: null | string;
  data: productMinorData[];
};

export default function SearchBar({
  products,
}: {
  products: productMinorDataRes;
}) {
  const data = products.data ?? [];
  const [value, setValue] = useState("");
  const [productList, setProductList] = useState<productMinorData[]>([]);
  const router = useRouter();

  function search(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setValue(input);
    if (input.trim() === "") {
      setProductList([]);
      return;
    }

    const res = data.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );

    if (res.length > 10) {
      setProductList(res.slice(0, 10));
    } else {
      setProductList(res);
    }
  }

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setProductList([]);
      router.push(`/user/products?query=${encodeURIComponent(value)}`);
    }
  }
  return (
    <>
      <div className="flex justify-center items-center border rounded-l-md border-neutral-200  w-[50svw] md:w-[20svw] h-8 focus:outline-0 relative">
        <input
          value={value}
          onKeyDown={handleSearch}
          onChange={search}
          type="text"
          placeholder="Search ..."
          className="absolute h-full  w-full text-white text-xs md:text-md p-2 pl-4 focus:outline-0 placeholder:text-sm "
        />
        <IoIosSearch
          onClick={() => {
            setProductList([]);
            router.push(`/user/products?query=${encodeURIComponent(value)}`);
          }}
          className="absolute h-full w-8 right-0 inline  bg-neutral-200 text-black text-3xl p-1 "
        />
      </div>

      <div className="w-full absolute top-[7.25svh] left-0   flex justify-center md:justify-end ">
        <ul
          className={` w-[80svw]  md:w-[50svw] lg:w-[40svw] md:right-0 bg-[#1A1C1D] text-white rounded-md cursor-pointer md:mx-2 
             ${productList.length > 0 ? "border-green-500 p-3" : "p-0"}`}
        >
          {productList?.map((list, index) => (
            <li onClick={() => setProductList([])} key={index}>
              <Link
                className=" w-full  hover:bg-black block px-2 py-2 transition-colors "
                href={`/user/products/${list.productId}`}
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
