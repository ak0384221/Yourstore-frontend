import { TOrderItem } from "@/types/order";
import Image from "next/image";

export default function OrderItem({ item }: { item: TOrderItem }) {
  return (
    <div className="flex gap-3  w-max p-2 border border-neutral-500  ">
      <div className="w-12 h-12 bg-gray-200 text-black rounded-md relative">
        <Image
          src={item.images[0].url}
          alt={item.images[0].alt}
          width={500}
          height={500}
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="font-sm">{item?.name}</p>
        <p className="text-xs ">{item?._id}</p>

        <p className="text-xs ">{item?.category} </p>
        <p className="text-xs ">
          Size {item?.size} • {item?.color}
        </p>

        <p className="text-xs ">Final: ${item?.finalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
