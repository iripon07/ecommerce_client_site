import Image from "next/image";
import MacBook from "../../assets/macBook.webp"
import { FaUser } from "react-icons/fa";
import { MdBrowserUpdated } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

const News = () => {
  return (
    <div>
      <div className="my-10">
        <h3 className="text-[40px] text-primary text-center font-extrabold">
          Our <span className="text-secondary">News</span>
          <div className="border-4 border-secondary w-[100px] mx-auto rounded-full"></div>
        </h3>

        <div>
          <div>
            <Image src={MacBook} alt="MacBook"></Image>
            <div>
              <h2>Apple MacBook Air 13.3-Inch</h2>
              <div>
                <div>
                  <FaUser />
                  <h3>Admin</h3>
                </div>
                <div>
                  <MdBrowserUpdated />
                  <h3>27 December, 2019</h3>
                </div>
              </div>
              <p>
                Apples thinnest, lightest notebook, completely transformed by
                the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up
                to 5x faster. Our most advanced Neural Engine for up to 9x
                faster machine learning
              </p>

              <button>
                Read More 
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default News;
