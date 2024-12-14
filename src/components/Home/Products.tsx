"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard, { IImage } from "../ProductCard/ProductCard";

interface IProduct {
    _id:string
  name: string;
  price: number;
  images: IImage[];
}


const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/product/get-all-products")
      .then((res) => setProducts(res.data.data));
  }, []);

  console.log("Product check", products);

  return (
    <div>
        <div>
            <h1>Hello Product check</h1>
        </div>
      {products.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
