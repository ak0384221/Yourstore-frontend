import Link from "next/link";
export default function Navbar({ category }: { category: string[] }) {
  return (
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
  );
}
