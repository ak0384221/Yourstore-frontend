import Link from "next/link";
import { TGetProduct } from "@/features/product/types/product";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Breadcrumb({
  categoryName,
  item,
}: {
  categoryName?: string;
  item?: TGetProduct;
}) {
  let category;

  if (!item) {
    category = categoryName;
  } else {
    category = item.category?.toLowerCase();
  }

  return (
    <nav className="text-sm text-gray-600 flex items-center gap-1 flex-wrap  w-1/2 ">
      <Link href="/user" className="hover:text-blue-600 transition">
        Home
      </Link>
      <IoChevronForwardOutline className="text-gray-400" />
      <Link
        href={`/user/products/category/${category}`}
        className="hover:text-blue-600 capitalize transition"
      >
        {category}
      </Link>

      {item && (
        <>
          <IoChevronForwardOutline className="text-gray-400" />
          <span className="text-gray-900 font-medium truncate max-w-[150px] md:max-w-xs">
            {item.name}
          </span>
        </>
      )}
    </nav>
  );
}
