import Link from "next/link";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary font-semibold text-white">
      <div className="container mx-auto">
        {/* <h1>Quality Finds, Delivered with Love!</h1> */}

        <div
          className="font-poppins grid grid-cols-1 justify-between gap-6 px-4 py-[150px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div>
            <h3 className="font-prostoOne text-xl font-medium md:text-2xl lg:text-[28px] xl:text-3xl">
              About us
            </h3>
            <div className="my-3 w-[20px] border-2 border-secondary md:my-4 lg:my-5 xl:my-6" />
            <p className="pr-5 text-xs md:text-sm lg:text-base xl:text-lg">
              Shop cutting-edge gadgets and accessories with ease. Your one-stop
              online store for quality tech, unbeatable prices, and top-notch
              service.
            </p>
          </div>
          <div>
            <h3 className="font-prostoOne text-xl font-medium md:text-2xl lg:text-[28px] xl:text-3xl">
              Get in Touch
            </h3>
            <div className="my-3 w-[20px] border-2 border-secondary md:my-4 lg:my-5 xl:my-6" />
            <p className="pr-5 text-xs md:text-sm lg:text-base xl:text-lg">
              34/8, Charbagdanga, Chapainawabganj. support@technest.com <br />{" "}
              +00 111 111 11
            </p>
          </div>
          <div>
            <h3 className="font-prostoOne text-xl font-medium md:text-2xl lg:text-[28px] xl:text-3xl">
              Pages
            </h3>
            <div className="my-3 w-[20px] border-2 border-secondary md:my-4 lg:my-5 xl:my-6" />
            <ul className="space-y-1 md:text-lg text-base font-medium text-white">
              <li className="flex items-center justify-start duration-300 hover:text-secondary">
                <FaAngleRight className="mr-2 text-secondary" />
                <Link href="/">Home</Link>
              </li>
              <li className="flex items-center justify-start duration-300 hover:text-secondary">
                <FaAngleRight className="mr-2 text-secondary" />
                <Link href="/shop">Shop</Link>
              </li>
              <li className="flex items-center justify-start duration-300 hover:text-secondary">
                <FaAngleRight className="mr-2 text-secondary" />
                <Link href="/news">News</Link>
              </li>
              <li className="flex items-center justify-start duration-300 hover:text-secondary">
                <FaAngleRight className="mr-2 text-secondary" />
                <Link href="/contact">Contact</Link>
              </li>
              <li className="flex items-center justify-start duration-300 hover:text-secondary">
                <FaAngleRight className="mr-2 text-secondary" />
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-prostoOne text-xl font-medium md:text-2xl lg:text-[28px] xl:text-3xl">
              Subscribe
            </h3>
            <div className="my-3 w-[20px] border-2 border-secondary md:my-4 lg:my-5 xl:my-6" />
            <p className="xl:mb-6 lg:mb-5 md:mb-4 mb-3 text-base font-normal">
              Subscribe to our mailing list to get the latest updates.
            </p>
            <form  className="flex w-full items-center space-x-3">
              <input
                type="text"
                placeholder="Email"
                className="rounded-l-xl w-full bg-[#012738] p-4 font-medium outline-none placeholder:text-white"
              />
              <button
                type="submit"
                className="rounded-r-xl  bg-[#012738] p-4 text-secondary duration-300 hover:bg-secondary hover:text-black"
              >
                <FaPaperPlane className="text-2xl" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t-[1.5px] border-secondary">
        <div className="container mx-auto p-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <h6 className="mb-2 text-xs font-normal md:mb-0 md:text-[15px]">
              Copyrights © 2024 -{" "}
              <span className="text-base font-bold text-secondary">
                Md. Asadul Islam
              </span>
              , All Rights Reserved.
            </h6>
            <div className="flex space-x-6 text-xl md:text-2xl">
              <FaFacebookF className="duration-300 hover:text-secondary" />
              <FaXTwitter className="duration-300 hover:text-secondary" />
              <FaInstagram className="duration-300 hover:text-secondary" />
              <FaLinkedinIn className="duration-300 hover:text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
