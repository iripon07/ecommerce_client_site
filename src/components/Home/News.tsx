import Image from "next/image";
import { FaAngleRight, FaUser } from "react-icons/fa";
import { MdBrowserUpdated } from "react-icons/md";
import Headphone from "../../assets/headphone.jpeg";

const News = () => {
  return (
    <div>
      <div className="my-10">
        <h3 className="text-center text-[40px] font-extrabold text-primary">
          Our <span className="text-secondary">News</span>
          <div className="mx-auto w-[100px] rounded-full border-4 border-secondary"></div>
        </h3>
        <p className="text-grey text-sm font-normal text-center mt-4 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.
        </p>

        <div className="grid grid-cols-4 gap-6 px-4">
          <div className="rounded-2xl shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
            <Image
              className="mb-6 h-[300px] w-full rounded-t-2xl"
              src={Headphone}
              alt="Headphone"
            ></Image>
            <div className="px-6 pb-6">
              <h2 className="text-3xl font-bold text-primary">
                You will vainly look for fruit on it in autumn.
              </h2>
              <div className="mb-4 mt-6 flex items-center space-x-6 font-normal text-primary">
                <div className="flex items-center justify-center space-x-2">
                  <FaUser />
                  <h3>Admin</h3>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MdBrowserUpdated />
                  <h3>27 December, 2019</h3>
                </div>
              </div>
              <p className="text-base font-normal text-[#555]">
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>

              <div className="mt-6 flex items-center justify-start space-x-2 text-primary duration-300 hover:text-secondary">
                <button>Read More</button>
                <FaAngleRight />
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
            <Image
              className="mb-6 h-[300px] w-full rounded-t-2xl"
              src={Headphone}
              alt="Headphone"
            ></Image>
            <div className="px-6 pb-6">
              <h2 className="text-3xl font-bold text-primary">
                You will vainly look for fruit on it in autumn.
              </h2>
              <div className="mb-4 mt-6 flex items-center space-x-6 font-normal text-primary">
                <div className="flex items-center justify-center space-x-2">
                  <FaUser />
                  <h3>Admin</h3>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MdBrowserUpdated />
                  <h3>27 December, 2019</h3>
                </div>
              </div>
              <p className="text-base font-normal text-[#555]">
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>

              <div className="mt-6 flex items-center justify-start space-x-2 text-primary duration-300 hover:text-secondary">
                <button>Read More</button>
                <FaAngleRight />
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
            <Image
              className="mb-6 h-[300px] w-full rounded-t-2xl"
              src={Headphone}
              alt="Headphone"
            ></Image>
            <div className="px-6 pb-6">
              <h2 className="text-3xl font-bold text-primary">
                You will vainly look for fruit on it in autumn.
              </h2>
              <div className="mb-4 mt-6 flex items-center space-x-6 font-normal text-primary">
                <div className="flex items-center justify-center space-x-2">
                  <FaUser />
                  <h3>Admin</h3>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MdBrowserUpdated />
                  <h3>27 December, 2019</h3>
                </div>
              </div>
              <p className="text-base font-normal text-[#555]">
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>

              <div className="mt-6 flex items-center justify-start space-x-2 text-primary duration-300 hover:text-secondary">
                <button>Read More</button>
                <FaAngleRight />
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
            <Image
              className="mb-6 h-[300px] w-full rounded-t-2xl"
              src={Headphone}
              alt="Headphone"
            ></Image>
            <div className="px-6 pb-6">
              <h2 className="text-3xl font-bold text-primary">
                You will vainly look for fruit on it in autumn.
              </h2>
              <div className="mb-4 mt-6 flex items-center space-x-6 font-normal text-primary">
                <div className="flex items-center justify-center space-x-2">
                  <FaUser />
                  <h3>Admin</h3>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MdBrowserUpdated />
                  <h3>27 December, 2019</h3>
                </div>
              </div>
              <p className="text-base font-normal text-[#555]">
                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus
                nisi. Praesent vitae mattis nunc, egestas viverra eros.
              </p>

              <div className="mt-6 flex items-center justify-start space-x-2 text-primary duration-300 hover:text-secondary">
                <button>Read More</button>
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
