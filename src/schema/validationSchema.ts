import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password length should be at least 6 characters")
    .max(10, "Password cannot exceed more than 10 characters"),
}).required();


export const signUpSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password length should be at least 6 characters")
    .max(10, "Password cannot exceed more than 10 characters"),
  acceptTerms: Yup.bool().oneOf([true], "Accept terms is required"),
}).required();


export const validationSchema = Yup.object().shape({
  id: Yup.string().required("ID is required"),
  name: Yup.string().required("Name is required"),
  slug: Yup.string().required("Slug is required"),
  category: Yup.string().required("Category is required"),
  brand: Yup.string().required("Brand is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required").positive(),
  discount: Yup.number().required("Discount is required").min(0).max(100),
  currency: Yup.string().required("Currency is required"),
  stock: Yup.number().required("Stock is required").integer().min(0),
  images: Yup
    .array()
    .of(
      Yup.object().shape({
        url: Yup.string().url().required("Image URL is required"),
        alt: Yup.string().required("Alt text is required"),
      }),
    )
    .min(1, "At least one image is required"),
  specifications: Yup.object().shape({
    batteryLife: Yup.string().required("Battery life is required"),
    connectivity: Yup.string().required("Connectivity is required"),
    color: Yup.string().required("Color is required"),
    dimensions: Yup.string().required("Dimensions are required"),
    weight: Yup.string().required("Weight is required"),
  }),
  variants: Yup
    .array()
    .of(
      Yup.object().shape({
        id: Yup.string().required("Variant ID is required"),
        color: Yup.string().required("Color is required"),
        price: Yup.number().required("Price is required").positive(),
        stock: Yup.number().required("Stock is required").integer().min(0),
      }),
    )
    .min(1, "At least one variant is required"),
});