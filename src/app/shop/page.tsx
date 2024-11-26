import iphone16 from "@/assets/iphone-16-pro-max-256gb-black-titanium.jpeg";
import ProductCard from "@/components/ProductCard/ProductCard";
import Image from "next/image";

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Shop = () => {
  const products: IProduct[] = [
    {
      id: 1,
      title:
        "Riversong Motive 9 Bluetooth Calling Smart Watch with AMOLED Display",
      price: 3549,
      image:
        "https://s.yimg.com/ny/api/res/1.2/7s.m1tU_dhwx7b5xrnUecg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1MA--/https://media.zenfs.com/es/benzinga_espana_844/894dfc8c38009740b57618d6e90ec053",
    },
    {
      id: 3,
      title: "iPhone 16 Pro Max 256GB",
      price: 249999,
      image:
        "https://s.yimg.com/ny/api/res/1.2/7s.m1tU_dhwx7b5xrnUecg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1MA--/https://media.zenfs.com/es/benzinga_espana_844/894dfc8c38009740b57618d6e90ec053",
    },
    {
      id: 2,
      title: "Meko T3 Wireless Earbuds",
      price: 2999,
      image:
        "https://s.yimg.com/ny/api/res/1.2/7s.m1tU_dhwx7b5xrnUecg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1MA--/https://media.zenfs.com/es/benzinga_espana_844/894dfc8c38009740b57618d6e90ec053",
    },
    {
      id: 4,
      title: "iPhone 15 128GB Blue",
      price: 24999,
      image:
        "https://s.yimg.com/ny/api/res/1.2/7s.m1tU_dhwx7b5xrnUecg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1MA--/https://media.zenfs.com/es/benzinga_espana_844/894dfc8c38009740b57618d6e90ec053",
    },
    {
      id: 5,
      title: "iPhone 16 Pro Max 256GB",
      price: 240000,
      image:
        "https://s.yimg.com/ny/api/res/1.2/7s.m1tU_dhwx7b5xrnUecg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1MA--/https://media.zenfs.com/es/benzinga_espana_844/894dfc8c38009740b57618d6e90ec053",
    },
  ];

  return (
    <div className="container mx-auto my-10 px-5 font-poppins">
      <div className="grid grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}

        <div className="rounded-md px-3 py-2 duration-300 hover:shadow-md">
          <Image src={iphone16} alt=" Mobile" />

          <div className="flex h-[65px] items-center">
            <p className="mt-2 text-center text-xl font-semibold text-primary">
              iPhone 16 Pro Max 256GB iPhone 16 Pro M
            </p>
          </div>
          <p className="my-1 text-center text-lg font-medium text-secondary">
            ৳ 249000
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
      </div>
    </div>
  );
};

export default Shop;

// <h3
//             className="text-md font-semibold leading-tight text-gray-800 line-clamp-2 h-[48px]"
//           ></h3>
