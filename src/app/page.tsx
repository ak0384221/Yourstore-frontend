import Image from "next/image";
import Link from "next/link";

export default function RootSelection() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center items-center text-white">
      <div className="text-center space-y-8">
        <div className="relative size-28 mx-auto">
          <Image
            alt="logo"
            src={"/regalo.png"}
            width={200}
            height={200}
            className="absolute w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to <span className="text-indigo-400">YourStore</span>
        </h1>
        <p className="text-gray-300 max-w-md mx-auto">
          Please choose how you want to continue.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link
            href="/user"
            className="px-10 py-5 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 text-lg font-medium text-center s"
          >
            Continue as User
          </Link>

          <Link
            href="/admin"
            className="px-10 py-5 rounded-2xl bg-rose-500 hover:bg-rose-600 transition-all duration-300 text-lg font-medium text-center "
          >
            Continue as Admin
          </Link>
        </div>
      </div>
    </div>
  );
}
