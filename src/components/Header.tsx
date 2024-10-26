"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";import { IoMdClose } from "react-icons/io";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-primary">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <div>
          <Link href="/" className="cursor-pointer">
            <Image
              src={logo}
              quality={100}
              className="h-[80px] w-[100px] md:h-[110px] md:w-[120px] lg:h-[150px] lg:w-[150px]"
              alt="Logo of this site"
            ></Image>
          </Link>
        </div>

        <div
          className={`md:flex space-x-4 text-xl hidden font-semibold text-white 2xl:space-x-8 ${open ? " text-center space-y-4 bg-secondary top-5 border-b-[1px] border-b-red-500":""}`}
        >
          <Link
            className={`link ${pathname === "/" ? "text-secondary" : "duration-300 hover:text-secondary"}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`link ${pathname === "/shop" ? "text-secondary" : "duration-300 hover:text-secondary"}`}
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
            className={`link ${pathname === "/contact" ? "text-secondary" : "duration-300 hover:text-secondary"}`}
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className={`link ${pathname === "/about" ? "text-secondary" : "duration-300 hover:text-secondary"}`}
            href="/about"
          >
            About
          </Link>
        </div>

        <div className="flex space-x-4 text-3xl text-secondary">
          <FaShoppingCart />

          <div className="block md:hidden">
            {open ? (
              <IoMdClose onClick={() => setOpen(!open)} />
            ) : (
              <AiOutlineMenu
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
