import Logo from "@/atomic-components/logo";
import MyButton from "@/atomic-components/myButton";
import Link from "next/link";

export default function Footer() {
  const navTwo = [
    { name: "special offers", link: "/specialoffers" },
    { name: "about us", link: "/aboutus" },
    { name: "contact us", link: "/contactus" },
  ];
  const navOne = [
    { name: "home", link: "/" },

    {
      name: "accessories",
      link: "/accessories",
    },
    {
      name: "cards",
      link: "/cards",
    },
    {
      name: "clothings",
      link: "/clothings",
    },
    {
      name: "handbags",
      link: "/handbags",
    },
    {
      name: "jewelries",
      link: "/jewelries",
    },
    {
      name: "office & stationaries",
      link: "/office & stationaries",
    },
    {
      name: "toys",
      link: "/toys",
    },
    {
      name: "wallets",
      link: "/wallets",
    },
  ];
  return (
    <div className=" flex flex-col gap-4 md:flex-row py-4 justify-evenly items-center md:items-start capitalize">
      <Logo />
      <div className="text-center">
        <ul>
          {navOne.map((nav) => (
            <li key={nav.name}>
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <ul>
          {navTwo.map((nav) => (
            <li key={nav.name}>
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h1 className="capitalize text-lg font-bold">sign up</h1>
        <input
          type="text"
          className="box  h-10 border border-neutral-300  text-black px-2"
          size={25}
        />
        <MyButton />
      </div>
    </div>
  );
}
