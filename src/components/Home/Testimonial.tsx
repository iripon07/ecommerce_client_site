"use client"

import { FaQuoteRight } from "react-icons/fa";
import Kendall from "@/assets/kendall Jenner.jpg"
import Gigi from "@/assets/Gigi Hadid.webp"
import GOAT from "@/assets/Goat.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from "swiper/modules";


const Testimonial = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto my-10">
        <Swiper
        loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="relative mb-[60px] flex items-center justify-center">
                <div className="max-w-[540px] rounded-2xl bg-white px-8 py-12 shadow-[0px_1px_2px_0px_#F28123]">
                  <FaQuoteRight className="mx-auto text-6xl text-secondary" />
                  <p className="text-center text-sm font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti earum animi id ea ipsa facilis unde magni sapiente
                    asperiores pariatur fugit, officia provident cupiditate
                    architecto aut aperiam fuga adipisci deleniti.
                  </p>
                </div>
                <Image
                  className="absolute -bottom-[25%] h-[100px] w-[100px] rounded-full"
                  quality={100}
                  src={Gigi}
                  alt="Gigi Hadid"
                ></Image>
              </div>
              <h3 className="text-center text-2xl font-semibold text-secondary">
                Gigi Hadid
              </h3>
              <h6 className="text-center text-base font-medium text-primary">
                Local Shop Owner
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <div className="relative mb-[60px] flex items-center justify-center">
                <div className="max-w-[540px] rounded-2xl bg-white px-8 py-12 shadow-[0px_1px_2px_0px_#F28123]">
                  <FaQuoteRight className="mx-auto text-6xl text-secondary" />
                  <p className="text-center text-sm font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti earum animi id ea ipsa facilis unde magni sapiente
                    asperiores pariatur fugit, officia provident cupiditate
                    architecto aut aperiam fuga adipisci deleniti.
                  </p>
                </div>
                <Image
                  className="absolute -bottom-[25%] h-[100px] w-[100px] rounded-full"
                  quality={100}
                  src={GOAT}
                  alt="GOAT"
                ></Image>
              </div>
              <h3 className="text-center text-2xl font-semibold text-secondary">
                Messi
              </h3>
              <h6 className="text-center text-base font-medium text-primary">
                Local Shop Owner
              </h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <div className="relative mb-[60px] flex items-center justify-center">
                <div className="max-w-[540px] rounded-2xl bg-white px-8 py-12 shadow-[0px_1px_2px_0px_#F28123]">
                  <FaQuoteRight className="mx-auto text-6xl text-secondary" />
                  <p className="text-center text-sm font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti earum animi id ea ipsa facilis unde magni sapiente
                    asperiores pariatur fugit, officia provident cupiditate
                    architecto aut aperiam fuga adipisci deleniti.
                  </p>
                </div>
                <Image
                  className="absolute -bottom-[25%] h-[100px] w-[100px] rounded-full"
                  quality={100}
                  src={Kendall}
                  alt="Kendall Jenner"
                ></Image>
              </div>
              <h3 className="text-center text-2xl font-semibold text-secondary">
                Kendall Jenner
              </h3>
              <h6 className="text-center text-base font-medium text-primary">
                Local Shop Owner
              </h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
