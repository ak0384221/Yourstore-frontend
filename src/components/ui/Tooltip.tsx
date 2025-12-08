import { totalDiscount } from "@/utils/product/mutations/pricingFunctions";

export default function Tooltip({
  discount,
  saleDiscount,
}: {
  discount: number;
  saleDiscount: number;
}) {
  const total = totalDiscount(discount, saleDiscount);

  return (
    <div className="px-3 text-xs py-2  w-max  rounded-3xl shadow-md absolute top-0 left-0 m-5 bg-discountTooltipBg text-discountTooltipText">
      {` ${total} % off`}
    </div>
  );
}
