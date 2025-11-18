import Image from "next/image";
import Link from "next/link";

export default function CategoryPicBox({
  item,
}: {
  item: {
    name: string;
    link: string;
    image: string;
  };
}) {
  return (
    <Link
      className="w-5/6 md:w-1/4 h-[40svh] md:h-[45svh]  flex flex-col justify-between items-center gap-4 pb-3 bg-[#e5dfcb96]"
      href={item.link}
    >
      <section className=" w-full h-full">
        <div className="pic w-5/6 mx-auto  h-4/5  relative">
          <Image
            alt="pic"
            height={200}
            width={200}
            className="absolute w-full h-full object-cover"
            src={item.image}
          />
        </div>
        <div className="border-b-3  py-2 w-5/6 mx-auto text-center text-black uppercase text-xs">
          {item.name}
        </div>
      </section>
    </Link>
  );
}
