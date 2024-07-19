"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="">
      <nav className="flex my-4 border-b-4">
        <div className="text-white mr-auto font-extra bold text-xl md:text-2xl">
          <Link href="/">Todo</Link>
        </div>
        <div className="text-white">
          <Link href="/" className="font-semibold text-xl md:text-2xl pr-6 hover:text-zinc-500">
            Home
          </Link>
          <Link
            href={currentPath === "/login" ? "/signup" : "/login"}
            className="font-semibold text-xl md:text-2xl hover:text-zinc-500"
          >
            {currentPath === "/login" ? "SignUp" : "Login"}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
