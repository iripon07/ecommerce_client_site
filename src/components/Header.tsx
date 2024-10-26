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
      <nav className="font-poppins container mx-auto flex items-center justify-between px-4">
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
          className={`hidden space-x-4 text-xl font-semibold text-white md:flex 2xl:space-x-8 ${open ? "top-5 space-y-4 border-b-[1px] border-b-red-500 bg-secondary text-center" : ""}`}
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
          <Link
            className="text-xl text-white duration-300 hover:text-secondary"
            href="/signup"
          >
            Sign Up
          </Link>

          <Link
            className="text-xl text-white duration-300 hover:text-secondary"
            href="/login"
          >
            Login
          </Link>

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
