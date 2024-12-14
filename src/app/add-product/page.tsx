"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/schema/validationSchema";

type Image = {
  url: string;
  alt: string;
};

type Variant = {
  id: string;
  color: string;
  price: number;
  stock: number;
};

type ProductFormData = {
  id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  discount: number;
  currency: string;
  stock: number;
  images: Image[];
  specifications: {
    batteryLife: string;
    connectivity: string;
    color: string;
    dimensions: string;
    weight: string;
  };
  variants: Variant[];
};

const AddProduct = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      id: "",
      name: "",
      slug: "",
      category: "",
      brand: "",
      description: "",
      price: 0,
      discount: 0,
      currency: "USD",
      stock: 0,
      images: [{ url: "", alt: "" }],
      specifications: {
        batteryLife: "",
        connectivity: "",
        color: "",
        dimensions: "",
        weight: "",
      },
      variants: [{ id: "", color: "", price: 0, stock: 0 }],
    },
  });

  const onSubmit = (data: ProductFormData) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto my-6">
      <div className="flex items-center justify-center">
        <div className="w-[600px] p-4 shadow-md">
          <p className="text-4xl text-secondary font-bold text-center mb-6">Add Your Product</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                className="mb-2 text-start text-[13px] text-primary"
                htmlFor=""
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base placeholder-slate-400 shadow-sm placeholder:text-base focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label
                className="mb-2 text-start text-[13px] text-primary"
                htmlFor=""
              >
                Brand
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base placeholder-slate-400 shadow-sm placeholder:text-base focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Enter product name"
              />
            </div>

            <div>
              <label
                className="mb-2 text-start text-[13px] text-primary"
                htmlFor=""
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base placeholder-slate-400 shadow-sm placeholder:text-base focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Product's description"
              />
            </div>

            <div>
              <label
                className="mb-2 text-start text-[13px] text-primary"
                htmlFor=""
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base placeholder-slate-400 shadow-sm placeholder:text-base focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Product's price"
              />
            </div>

            <div>
              <label
                className="mb-2 text-start text-[13px] text-primary"
                htmlFor=""
              >
               Stock
              </label>
              <input
                type="text"
                name="stock"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base placeholder-slate-400 shadow-sm placeholder:text-base focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                placeholder="Product's stock"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
