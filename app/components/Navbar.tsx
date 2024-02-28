import Image from "next/image";
import Link from "next/link";
import UserNav from "./UserNav";

export default function Navbar() {
  return (
    <nav className="w-full border-b h-16 flex items-center ">
      <div className="container flex justify-between items-center mx-auto px-5">
        <Link href="/">
          <Image src="/airbnb-desktop.png" alt="logo" width="100" height="50" />
        </Link>
        <div className="px-5 w-[300px] rounded-full border">
          <h1>Hello From The Search</h1>
        </div>
        <UserNav />
      </div>
    </nav>
  );
}
