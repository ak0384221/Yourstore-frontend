import TextStyleInItem from "@/atomic-components/textStyleOfItem";
import Tooltip from "@/atomic-components/tooltip";
import Image from "next/image";
import Link from "next/link";
//--------------------------------------//
type Tproduct = {
  _id: number;
  name: string;
  category: string;
  price: number;
  discount: number;
  description: string;
  images: string[];
  stock: number;
  arrivalDate: string;
  sale: number;
};

export default function Item({ item }: { item: Tproduct }) {
  console.log(item);
  return (
    <Link
      className="w-full h-[70dvh] md:h-[55dvh]  md:w-[40dvw] lg:w-1/4 relative "
      href={`/products/${item?._id}`}
    >
      <div className="item  h-full  bg-[#f0f0f0] p-2 ">
        <div className="pic h-[75%]  capitalize relative ">
          <Image
            src={item?.images[0]}
            width={200}
            height={300}
            alt="pic"
            className="w-auto h-full mx-auto object-cover"
          />
        </div>
        <section className="mt-2 px-2 h-[25%]">
          <TextStyleInItem style="category" text={item?.category} />
          <TextStyleInItem style="name" text={item?.name} />
          <TextStyleInItem style="cost" text={item?.price} />
        </section>
      </div>
      <Tooltip text={item.sale} />
    </Link>
  );
}
