import Image from "next/image";


interface IProduct {
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({product}:{product:IProduct}) => {
    const {  title, price, image} = product;
    
  return (
    <div className="rounded-md px-3 py-2 duration-300 hover:shadow-md">
      <Image src={image} alt=" Mobile"  width={400} height={400} quality={100}/>

      <div className="flex h-[65px] items-center">
        <p className="mt-2 text-center text-xl font-semibold text-primary">
         {title}
        </p>
      </div>
      <p className="my-1 text-center text-lg font-medium text-secondary">
        ৳ {price}
      </p>
      <p className="text-center text-base font-light text-grey">
        Not Review Yet
      </p>
      <div className="mt-2 flex items-center justify-between">
        <button className="min-w-[120px] rounded-full border-[1px] border-secondary py-2 font-semibold text-secondary duration-300 hover:bg-secondary hover:text-white">
          Buy Now
        </button>
        <button className="min-w-[120px] rounded-full border-[1px] border-primary py-2 font-semibold text-primary duration-300 hover:bg-primary hover:text-white">
          Add to Card
        </button>
      </div>
    </div>
  );
}

export default ProductCard