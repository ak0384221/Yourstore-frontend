type textName = {
  title: string;
};
export default function CategoryTitle({ title }: textName) {
  return (
    <h1 className=" w-max text-categoryHeader mx-auto px-4 py-3 border-b-3 border-[#b85151] capitalize text-2xl font-bold">
      {title}
    </h1>
  );
}
