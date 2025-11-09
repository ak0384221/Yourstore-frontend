import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <div className="title">
          <h3 className="uppercase text-2xl font-extrabold  ">regalo</h3>
          <h4 className="text-sm">Gift shop</h4>
        </div>
      </Link>
    </>
  );
}
