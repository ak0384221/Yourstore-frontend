export default function OrderItem() {
  return (
    <div className="flex gap-3  w-max p-2 border border-neutral-700">
      <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
      <div>
        <p className="font-medium">Nike Air Max 90</p>
        <p className="text-xs ">ASHU52156</p>

        <p className="text-xs ">Nike • Shoes </p>
        <p className="text-xs "> Size 42 • Black</p>

        <p className="text-xs ">Final: $102.6</p>
      </div>
    </div>
  );
}
