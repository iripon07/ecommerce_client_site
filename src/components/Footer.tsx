import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary font-semibold text-white">
      <div className="container mx-auto">
        {/* <h1>Quality Finds, Delivered with Love!</h1> */}

        <div className="grid grid-cols-4 justify-between py-[150px]">
          <div>
            <h3 className="text-3xl font-medium">About us</h3>
            <div className="my-6 w-[20px] border-2 border-secondary" />
            <p className="pr-5 text-base">
              Ut enim ad minim veniam perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Get in Touch</h3>
            <div className="my-6 w-[20px] border-2 border-secondary" />
            <p className="text-base font-normal">
              34/8, East Hukupara, Gifirtok, Sadan. support@fruitkha.com +00 111
              222 3333
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Pages</h3>
            <div className="my-6 w-[20px] border-2 border-secondary" />
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Subscribe</h3>
            <div className="my-6 w-[20px] border-2 border-secondary" />
            <p className="mb-6 text-base font-normal">
              Subscribe to our mailing list to get the latest updates.
            </p>
            <form className="bg-#012738">
              <input
                type="text"
                placeholder="Email"
                className="placeholder:bg-#012738"
              />
              <button type="submit" className="text-yellow-200">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div></div>

      <div className="border-t-[1.5px] border-secondary">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <h6 className="text-[15px] font-normal">
              Copyrights © 2024 -{" "}
              <span className="text-base font-bold text-secondary">
                Md. Asadul Islam
              </span>
              , All Rights Reserved.
            </h6>
            <div className="flex space-x-6 text-2xl">
              <FaFacebookF className="duration-300 hover:text-[23px] hover:text-secondary" />
              <FaXTwitter className="duration-300 hover:text-[23px] hover:text-secondary" />
              <FaInstagram className="duration-300 hover:text-[23px] hover:text-secondary" />
              <FaLinkedinIn className="duration-300 hover:text-[23px] hover:text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
