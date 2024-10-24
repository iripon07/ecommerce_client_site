import * as Yup from "yup";



  export const loginSchema = Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password length should be at least 6 characters")
        .max(10, "Password cannot exceed more than 10 characters"),
    })
    .required();
