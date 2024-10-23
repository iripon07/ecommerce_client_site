import Image from "next/image";
import Link from "next/link";
import Gigi from "@/assets/Gigi Hadid.webp"


const About = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Image src={Gigi} alt="Gigi Hadid"></Image>
        </div>
        <div className="flex items-center">
          <div>
            <h6 className="mb-4 text-xl font-medium text-gray-400">
              Since Year 1999
            </h6>
            <h1 className="mb-3 text-6xl font-bold text-primary">
              We are <span className="text-secondary">Technest</span>
            </h1>
            <p className="mb-6 text-sm font-normal text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              consequatur ut quos praesentium rem aspernatur recusandae, ipsum
              deserunt corrupti illo provident veniam repudiandae error aliquid!
              Incidunt repellat ex quidem tempora ipsam dolor perspiciatis, et
              error sunt obcaecati suscipit iusto aspernatur? <br /> <br />{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium sint sit quo corrupti alias laboriosam veritatis
              assumenda culpa aperiam cumque?
            </p>

            <Link
              className="border-1 bg-primary px-5 py-3 text-lg font-semibold text-white duration-300 hover:bg-secondary"
              href="/about"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About