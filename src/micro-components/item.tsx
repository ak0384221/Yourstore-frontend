import TextStyleInItem from "@/atomic-components/textStyleOfItem";
import Tooltip from "@/atomic-components/tooltip";
import { TProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
//--------------------------------------//

export default function Item({ item }: { item: TProduct }) {
  return (
    <Link
      className="w-4/5 h-[45dvh] bg-[#d1ddeb] 
       md:h-[55dvh]  md:w-[40dvw] lg:w-1/4 lg:h-[45dvh] xl:w-1/5 relative "
      href={`/user/products/${item?.productId}`}
    >
      <div className="item  h-full   p-2 ">
        <div className="pic h-[75%]  capitalize relative ">
          <Image
            src={item?.images[0].url}
            width={200}
            height={300}
            alt="pic"
            className="w-auto h-full mx-auto object-cover"
          />
        </div>
        <section className="mt-2 px-2 h-[25%]">
          <TextStyleInItem style="category" text={item?.category} />
          <TextStyleInItem style="name" text={item?.name} />
          <TextStyleInItem style="cost" text={item?.basePrice} />
        </section>
      </div>
      <Tooltip
        discount={item.discountPercent}
        saleDiscount={item.salePercent}
      />
    </Link>
  );
}
