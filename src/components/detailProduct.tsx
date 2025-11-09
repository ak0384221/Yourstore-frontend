import ProductsPcsAdd from "@/atomic-components/addProductsQuanity";
import TextStyleInItem from "@/atomic-components/textStyleOfItem";
import Image from "next/image";

export default function ProductDetails({ item }: { item: any }) {
  const discountedPrice = (
    item.price -
    (item.price * item.discount) / 100
  ).toFixed(2);

  return (
    <div className="details border border-neutral-400 w-5/6 mt-[5vh] md:mt-[10dvh] p-2 flex flex-col gap-8   mx-auto  justify-center md:flex-row ">
      <div className="img w-full h-[60dvh]  flex justify-center items-center">
        <Image
          alt={item?.name}
          src={item?.images[0]}
          height={200}
          width={200}
          className=" w-auto h-full bg-red-500  object-cover"
        />
      </div>
      <div className="details w-full px-5 space-y-3  ">
        <p>product ID: {item?._id}</p>

        <TextStyleInItem style="category" text={item?.category} />
        <div className="border p-2">
          <sub>Original price </sub>
          <b className="text-3xl">${item?.price}</b>
          <br />
          <b className="text-3xl">{discountedPrice}$</b>
          <sub>final price </sub>
        </div>

        <p>{item?.name}</p>
        <p>{item?.description}</p>
        <div className=" flex gap-3 items-center justify-start">
          <ProductsPcsAdd item={item} />
        </div>
        <div className="">
          <b className="capitalize text-xl">free shipping on over 50$ order</b>
          <ul className="list-disc ml-5 ">
            <li>No-Risk Money Back Guarantee!</li>
            <li>No Hassle Refunds</li>
            <li>Secure Payments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
