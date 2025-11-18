import MyButton from "@/atomic-components/myButton";

export default function ShopByOccasionCard() {
  return (
    <>
      <div className="relative h-[35svh] md:w-2/5 w-5/6  flex justify-center items-center flex-col bg-sky-200">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/moneybags/02.jpg')] bg-no-repeat bg-cover bg-center opacity-40"></div>

        {/* Content */}
        <div className="relative text-center space-y-5">
          <h3 className="font-bold text-xl">Birthday gift</h3>
          <MyButton />
        </div>
      </div>
    </>
  );
}
