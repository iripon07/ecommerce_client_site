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
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <Image
            src={logo}
            width={150}
            height={150}
            quality={100}
            alt="Logo of this site"
          ></Image>
        </div>
        <div className="text-white text-xl font-semibold flex 2xl:space-x-8 space-x-4">
          <Link
            className={`link ${pathname === "/" ? "text-secondary" : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`link ${pathname === "/shop" ? "text-secondary" : ""}`}
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className={`link ${pathname === "/news" ? "text-secondary" : ""}`}
            href="/news"
          >
            News
          </Link>
          <Link
            className={`link ${pathname === "/contact" ? "text-secondary" : ""}`}
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className={`link ${pathname === "/about" ? "text-secondary" : ""}`}
            href="/about"
          >
            About
          </Link>
        </div>
        <div className="text-secondary text-2xl">
          <FaShoppingCart />
        </div>
      </nav>
    </div>
  );
};

export default Header;
