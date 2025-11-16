import Image from "next/image";

export default function EmptyData({ fetchcase }: { fetchcase: string }) {
  return (
    <>
      <div className="error text-neutral-700  text-center  my-2 p-4 ">
        <h1 className="text-[12dvw] font-extrabold">Oops!</h1>
        <h1 className=" text-center text-4xl capitalize text-[5dvw] ">
          {fetchcase} is empty
        </h1>
      </div>
    </>
  );
}
