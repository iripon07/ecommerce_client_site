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
          <p className="mb-6 text-center text-4xl font-bold text-secondary">
            Add Your Product
          </p>
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
                htmlFor="brand"
              >
                Brand
              </label>
              <div className="relative mt-1">
                <select
                  id="brand"
                  name="brand"
                  className="block w-full appearance-none rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-gray-900 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                >
                  <option value="0">Select Brand</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                  <option value="5">Honda</option>
                  <option value="6">Jaguar</option>
                  <option value="7">Land Rover</option>
                  <option value="8">Mercedes</option>
                  <option value="9">Mini</option>
                  <option value="10">Nissan</option>
                  <option value="11">Toyota</option>
                  <option value="12">Volvo</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 01.894.553l5 9a1 1 0 01-.894 1.447H4a1 1 0 01-.894-1.447l5-9A1 1 0 0110 3zm0 3a1 1 0 00-.894.553l-5 9a1 1 0 00.894 1.447h10a1 1 0 00.894-1.447l-5-9A1 1 0 0010 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
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
