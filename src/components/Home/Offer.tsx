const Offer = () => {
  return (
    <div className="container mx-auto">
      <div   className="bg-[url('/assets/kendall.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div
          style={{
            backgroundImage:
              "linear-gradient(100deg, #051922 0%, #00000000 100%)",
          }}
          className="grid h-[60vh] w-full grid-cols-2 bg-transparent"
        >
          <div  className="flex items-center px-12">
            <div  className="">
              <h5 className="mb-6 text-xl font-bold text-white">
                Limited Time Offer
              </h5>
              <h3 className="mb-4 text-[42px] font-bold text-secondary">
                Special Edition
              </h3>
              <p className="mb-6 text-sm font-normal text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate nisi ut culpa in ullam tempora. Cupiditate nisi ut
                culpa in ullam tempora.
              </p>
              <h5 className="mb-10 text-xl font-bold text-white">
                Buy gadgets At 20% Discount, Use Code
                <span className="text-secondary">OFF20</span>
              </h5>
              <button className="bg-white px-6 py-3 text-lg font-semibold text-primary duration-300 hover:bg-secondary hover:text-white">
                Shop Now
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
