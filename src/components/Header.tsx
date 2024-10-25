"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
      const pathname = usePathname();
  return (
    <div className="bg-primary">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <Image
            src={logo}
            width={150}
            height={150}
            quality={100}
            alt="Logo of this site"
          ></Image>
        </div>
        <div className="flex space-x-4 text-xl font-semibold text-white 2xl:space-x-8">
          <Link
            className={`link ${pathname === "/" ? "text-secondary" : "hover:text-secondary duration-300"}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`link ${pathname === "/shop" ? "text-secondary" : "hover:text-secondary duration-300"}`}
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className={`link ${pathname === "/news" ? "text-secondary" : "hover:text-secondary"} duration-300`}
            href="/news"
          >
            News
          </Link>
          <Link
            className={`link ${pathname === "/contact" ? "text-secondary" : "hover:text-secondary duration-300"}`}
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className={`link ${pathname === "/about" ? "text-secondary" : "hover:text-secondary duration-300"}`}
            href="/about"
          >
            About
          </Link>
        </div>
        <div className="text-2xl text-secondary">
          <FaShoppingCart />
        </div>
      </nav>
    </div>
  );
};

export default Header;
