"use client";

import { signUpSchema } from "@/schema/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  acceptTerms?: boolean;
};


const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = async (data: SignUpFormData) => {

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/create-user", data
      );
      console.log('Response from server', response);
      
    } catch (error) {
      console.log('Error sending data', error);
      
    }
    console.log(data);
    reset();
  };
  return (
    <div className="container mx-auto my-12">
      <div className="mx-auto max-w-[450px] px-5 py-8 shadow-xl">
        <h3 className="text-center text-4xl font-semibold uppercase">
          Sign Up
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="my-8">
          <div>
            <label
              className="mb-2 text-start text-[13px] text-primary"
              htmlFor=""
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              className="w-full border-b-[1.25px] border-secondary pb-1 text-sm text-grey outline-none"
            />
            {errors?.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="my-6">
            <label
              className="mb-2 text-start text-[13px] text-primary"
              htmlFor=""
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full border-b-[1.25px] border-secondary pb-1 text-sm text-grey outline-none"
            />{" "}
            {errors?.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              className="mb-2 text-start text-[13px] text-primary"
              htmlFor=""
            >
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full border-b-[1.25px] border-secondary pb-1 text-sm text-grey outline-none"
            />{" "}
            {errors?.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="mt-6 flex items-center justify-start">
            <input
              className="cursor-pointer accent-primary"
              type="checkbox"
              {...register("acceptTerms")}
            />

            <label className="ml-2 text-xs font-medium" htmlFor="">
              I agree to the
              <span className="text-secondary"> terms & conditions</span>
            </label>
          </div>
          {errors?.acceptTerms && (
            <p className="text-xs text-red-500">{errors.acceptTerms.message}</p>
          )}
          <input
            type="submit"
            value="Sign up"
            className="mt-3 w-full cursor-pointer rounded bg-[#143645] py-2 text-lg font-bold uppercase text-white duration-300 hover:bg-primary"
          />
        </form>
        <h6 className="text-center text-base font-medium text-grey">
          Already have an account?{" "}
          <Link
            className="text-secondary duration-300 hover:underline"
            href="/login"
          >
            Log in Now
          </Link>
        </h6>
        <h5 className="mt-4 text-center text-base font-medium text-[#858b9c]">
          Or, sign up with
        </h5>

        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="flex cursor-pointer items-center justify-center">
            <FcGoogle className="text-2xl text-[#1877F2]" />
            <input
              type="button"
              value="Google"
              className="ml-3 cursor-pointer text-grey"
            />
          </div>
          <div className="flex cursor-pointer items-center justify-center">
            <FaFacebook className="text-2xl text-[#1877F2]" />
            <input
              type="button"
              value="Facebook"
              className="ml-3 cursor-pointer text-grey"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
