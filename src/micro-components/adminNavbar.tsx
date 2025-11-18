import Link from "next/link";

export default function AdminNavbar() {
  return (
    <>
      <nav className="bg-[#dcdcdf] text-black ">
        <ul className="w-full flex justify-evenly items-center h-[10svh] ">
          <li className=" w-1/2 border text-center h-full flex justify-center items-center">
            <Link href={"/admin"}>Orders</Link>
          </li>
          <li className=" w-1/2 border text-center h-full flex justify-center items-center">
            <Link href={"/admin/store"}>store</Link>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}
