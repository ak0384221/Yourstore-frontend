export default async function LatestPage() {
  return (
    <>
      <h1>latestPage</h1>
      {/* {latestData?.length > 0 && (
        <>
          <div className="newArrival my-5 ">
            <CategoryTitle title="New Arrival" />
            <Link
              className="text-right  capitalize block mr-5  text-categoryHeader"
              href="/user/products/latest"
            >
              see all
            </Link>
            <div className="flex justify-center gap-4  my-5 w-full  mx-auto flex-wrap items-center">
              {latestData?.map((product, index: number) => (
                <Item item={product} key={index} />
              ))}
            </div>
          </div>
        </>
      )} */}
    </>
  );
}
