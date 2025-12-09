import Link from "next/link";

export default function AdminNavbar() {
  return (
    <>
      <nav className="bg-[#0e0d0d] py-2 ">
        <ul className=" flex justify-evenly items-center  bg-[#151616] border border-neutral-600 text-white  capitalize w-5/6 md:w-1/3 mx-auto  rounded-4xl ">
          <li className=" w-1/2  hover:bg-white hover:text-black transition-colors rounded-l-4xl text-center h-full flex justify-center items-center">
            <Link className="w-full h-full py-3" href={"/admin"}>
              Orders
            </Link>
          </li>
          <li className=" w-1/2  hover:bg-white hover:text-black transition-colors  text-center h-full flex justify-center items-center">
            <Link className=" w-full h-full py-3" href={"/admin/store"}>
              store
            </Link>{" "}
          </li>
          <li className=" w-1/2  hover:bg-white hover:text-black transition-colors rounded-r-4xl text-center h-full flex justify-center items-center">
            <Link className=" w-full h-full py-3" href={"/user"}>
              User page
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}
