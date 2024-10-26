"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaAngleRight, FaUser } from "react-icons/fa";
import { MdBrowserUpdated } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const headphoneImage = "/assets/headphone.jpeg";

const News = () => {
  const router = useRouter();

  return (
    <div>
      <div
        className="container mx-auto my-10"
      >
        <h3 className="font-poppins text-center text-[40px] font-extrabold text-primary">
          Our <span className="text-secondary">News</span>
          <div className="mx-auto w-[100px] rounded-full border-2 border-secondary"></div>
        </h3>
        <p className="font-handwriting mb-8 mt-4 text-center text-sm font-normal text-grey md:text-base lg:text-lg xl:text-xl">
          Stay updated on the latest trends, innovations, and insights in
          E-commerce.
        </p>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              width: 1280,
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1536: {
              width: 1536,
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="p-2">
            <div className="rounded-2xl shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
              <Image
                className="mb-4 h-[250px] w-full rounded-t-2xl"
                src={headphoneImage}
                alt="headphoneImage"
                width={300}
                height={250}
              ></Image>
              <div className="font-poppins px-4 pb-4">
                <h2 className="font-prostoOne text-3xl font-bold text-primary">
                  You will vainly look for fruit on it.
                </h2>

                <div className="my-4 flex items-center space-x-6 font-normal text-primary">
                  <div className="flex items-center justify-center space-x-2">
                    <FaUser />
                    <h3>Admin</h3>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MdBrowserUpdated />
                    <h3>27 December, 2019</h3>
                  </div>
                </div>
                <p className="font-inter text-base font-normal text-[#555]">
                  Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                  rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                  eros.
                </p>

                <div className="mt-4 flex items-center justify-start space-x-2 text-primary duration-300 hover:text-secondary">
                  <button>Read More</button>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide className="p-2">
            <div className="rounded-2xl shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
              <Image
                className="mb-4 h-[250px] w-full rounded-t-2xl"
                src={headphoneImage}
                alt="headphoneImage"
                width={300}
                height={250}
              ></Image>
              <div className="font-poppins px-4 pb-4">
                <h2 className="font-prostoOne text-3xl font-bold text-primary">
                  You will vainly look for fruit on it.
                </h2>

                <div className="my-4 flex items-center space-x-6 font-normal text-primary">
                  <div className="flex items-center justify-center space-x-2">
                    <FaUser />
                    <h3>Admin</h3>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MdBrowserUpdated />
                    <h3>27 December, 2019</h3>
                  </div>
                </div>
                <p className="font-inter text-base font-normal text-[#555]">
                  Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                  rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                  eros.
                </p>

                <div className="mt-4 flex items-center justify-start space-x-2 text-primary duration-300 hover:text-secondary">
                  <button>Read More</button>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-2">
            <div className="rounded-2xl shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
              <Image
                className="mb-4 h-[250px] w-full rounded-t-2xl"
                src={headphoneImage}
                alt="headphoneImage"
                width={300}
                height={250}
              ></Image>
              <div className="font-poppins px-4 pb-4">
                <h2 className="font-prostoOne text-3xl font-bold text-primary">
                  You will vainly look for fruit on it.
                </h2>

                <div className="my-4 flex items-center space-x-6 font-normal text-primary">
                  <div className="flex items-center justify-center space-x-2">
                    <FaUser />
                    <h3>Admin</h3>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MdBrowserUpdated />
                    <h3>27 December, 2019</h3>
                  </div>
                </div>
                <p className="font-inter text-base font-normal text-[#555]">
                  Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                  rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                  eros.
                </p>

                <div className="mt-4 flex items-center justify-start space-x-2 text-primary duration-300 hover:text-secondary">
                  <button>Read More</button>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-2">

            <div className="rounded-2xl shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
              <Image
                className="mb-4 h-[250px] w-full rounded-t-2xl"
                src={headphoneImage}
                alt="headphoneImage"
                width={300}
                height={250}
              ></Image>
              <div className="font-poppins px-4 pb-4">
                <h2 className="font-prostoOne text-3xl font-bold text-primary">
                  You will vainly look for fruit on it.
                </h2>

                <div className="my-4 flex items-center space-x-6 font-normal text-primary">
                  <div className="flex items-center justify-center space-x-2">
                    <FaUser />
                    <h3>Admin</h3>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MdBrowserUpdated />
                    <h3>27 December, 2019</h3>
                  </div>
                </div>
                <p className="font-inter text-base font-normal text-[#555]">
                  Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                  rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                  eros.
                </p>

                <div className="mt-4 flex items-center justify-start space-x-2 text-primary duration-300 hover:text-secondary">
                  <button>Read More</button>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-2">
            <div className="rounded-2xl shadow-[0px_8px_24px_#eaebed] duration-300 hover:shadow-none">
              <Image
                className="mb-4 h-[250px] w-full rounded-t-2xl"
                src={headphoneImage}
                alt="headphoneImage"
                width={300}
                height={250}
              ></Image>
              <div className="font-poppins px-4 pb-4">
                <h2 className="font-prostoOne text-3xl font-bold text-primary">
                  You will vainly look for fruit on it.
                </h2>

                <div className="my-4 flex items-center space-x-6 font-normal text-primary">
                  <div className="flex items-center justify-center space-x-2">
                    <FaUser />
                    <h3>Admin</h3>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MdBrowserUpdated />
                    <h3>27 December, 2019</h3>
                  </div>
                </div>
                <p className="font-inter text-base font-normal text-[#555]">
                  Vivamus lacus enim, pulvinar vel nulla sed, scelerisque
                  rhoncus nisi. Praesent vitae mattis nunc, egestas viverra
                  eros.
                </p>

                <div className="mt-4 flex items-center justify-start space-x-2 text-primary duration-300 hover:text-secondary">
                  <button>Read More</button>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

        <button
          onClick={() => router.push("/news")}
          className="font-inter mx-auto mt-10 block rounded-full bg-secondary px-6 py-3 text-lg font-semibold text-white duration-300 hover:bg-primary hover:text-secondary"
        >
          More News
        </button>
      </div>
    </div>
  );
};

export default News;
