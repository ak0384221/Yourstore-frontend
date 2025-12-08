import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href={"/user"}>
        <div className="title">
          <h3 className="uppercase text-xl font-extrabold  ">regalo</h3>
          <h4 className="text-xs">Gift shop</h4>
        </div>
      </Link>
    </>
  );
}
