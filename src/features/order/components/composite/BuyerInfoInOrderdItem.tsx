import { TBuyerInfo } from "../../types/order";

export default function BuyerInfoInOrderedItems({
  buyer,
  payment,
}: {
  buyer: TBuyerInfo;
  payment: string;
}) {
  return (
    <div className="p-3">
      <div className="font-medium">{buyer?.name}</div>
      <div className="text-xs ">{buyer?.email}</div>
      <div className="text-xs ">{buyer?.phone}</div>
      <div className="text-xs ">{buyer?.location}</div>
      <div className="text-xs ">{payment}</div>
    </div>
  );
}
