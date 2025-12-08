type Tsize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export default function ProductName({
  name,
  size,
}: {
  name: string;
  size: Tsize;
}) {
  return (
    <>
      <h1 className={`text-${size} font-bold capitalize leading-tight`}>
        {name}
      </h1>
    </>
  );
}
