export default function Fetchfailed({ fetchcase }: { fetchcase: string }) {
  return (
    <>
      <div className="error text-neutral-700  text-center  my-2 p-4 ">
        <h1 className="text-[12svw] font-extrabold">404 Oops!</h1>
        <h1 className=" text-center text-4xl capitalize text-[5svw] ">
          Error loading {fetchcase} data
        </h1>
      </div>
    </>
  );
}
