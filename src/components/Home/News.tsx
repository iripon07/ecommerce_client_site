import Image from "next/image";
import MacBook from "../../assets/macBook.webp"
import { FaAngleRight, FaUser } from "react-icons/fa";
import { MdBrowserUpdated } from "react-icons/md";

const News = () => {
  return (
    <div>
      <div className="my-10">
        <h3 className="text-center text-[40px] font-extrabold text-primary">
          Our <span className="text-secondary">News</span>
          <div className="mx-auto w-[100px] rounded-full border-4 border-secondary"></div>
        </h3>

        <div className="grid grid-cols-3 gap-6">
          <div className="p-10 rounded-2xl shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
            <Image src={MacBook} alt="MacBook"></Image>
            <div>
              <h2 className="text-4xl font-bold text-primary">
                You will vainly look for fruit on it in autumn.
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <FaUser />
                  <h3>Admin</h3>
                </div>
                <div className="flex items-center justify-center">
                  <MdBrowserUpdated />
                  <h3>27 December, 2019</h3>
                </div>
              </div>
              <p>
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>

              <div
                style={{ border: "1px solid green" }}
                className="flex items-center justify-center space-x-2"
              >
                <button>Read More</button>
                <FaAngleRight />
              </div>
            </div>
          </div>
          <div className="p-10 shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
            <Image className="w-full" src={MacBook} alt="MacBook"></Image>
            <div>
              <h2 className="text-4xl font-bold text-primary">
                You will vainly look for fruit on it in autumn.
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <FaUser />
                  <h3>Admin</h3>
                </div>
                <div className="flex items-center justify-center">
                  <MdBrowserUpdated />
                  <h3>27 December, 2019</h3>
                </div>
              </div>
              <p>
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>

              <div
                style={{ border: "1px solid green" }}
                className="flex items-center justify-center space-x-2"
              >
                <button>Read More</button>
                <FaAngleRight />
              </div>
            </div>
          </div>
          <div className="p-10 shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
            <Image src={MacBook} alt="MacBook"></Image>
            <div>
              <h2 className="text-4xl font-bold text-primary">
                You will vainly look for fruit on it in autumn.
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <FaUser />
                  <h3>Admin</h3>
                </div>
                <div className="flex items-center justify-center">
                  <MdBrowserUpdated />
                  <h3>27 December, 2019</h3>
                </div>
              </div>
              <p>
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>

              <div
                style={{ border: "1px solid green" }}
                className="flex items-center justify-center space-x-2"
              >
                <button>Read More</button>
                <FaAngleRight />
              </div>
            </div>
          </div>
          <div className="p-10 shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
            <Image src={MacBook} alt="MacBook"></Image>
            <div>
              <h2 className="text-4xl font-bold text-primary">
                You will vainly look for fruit on it in autumn.
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <FaUser />
                  <h3>Admin</h3>
                </div>
                <div className="flex items-center justify-center">
                  <MdBrowserUpdated />
                  <h3>27 December, 2019</h3>
                </div>
              </div>
              <p>
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>

              <div
                style={{ border: "1px solid green" }}
                className="flex items-center justify-center space-x-2"
              >
                <button>Read More</button>
                <FaAngleRight />
              </div>
            </div>
          </div>
          

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default News;
