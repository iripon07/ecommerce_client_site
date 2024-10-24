
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="mx-auto max-w-[450px] px-5 py-8 shadow-xl">
        <h3 className="text-center text-4xl font-semibold uppercase">
          Log In
        </h3>

        <form action="" className="my-8">
         

          <div className="my-6">
            <label
              className="mb-2 text-start text-[13px] text-primary"
              htmlFor=""
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b-[1.25px] border-secondary pb-1 text-sm text-grey outline-none"
            />
          </div>

          <div>
            <label
              className="mb-2 text-start text-[13px] text-primary"
              htmlFor=""
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border-b-[1.25px] border-secondary pb-1 text-sm text-grey outline-none"
            />
          </div>

          <Link
            className="mt-1 block text-end text-xs text-primary duration-300 hover:underline"
            href="/"
          >
            Forgot Password
          </Link>

          <input
            type="submit"
            value="Sign up"
            className="mt-6 w-full rounded bg-[#143645] py-2 text-lg font-bold text-white duration-300 hover:bg-primary"
          />
        </form>
        <h6 className="text-center text-base font-medium text-grey">
          Not signed up?{" "}
          <Link
            className="text-secondary duration-300 hover:underline"
            href="/signup"
          >
            Create an account
          </Link>
        </h6>
        <h5 className="mt-4 text-center text-base font-medium text-[#858b9c]">
          Or, log in with
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

export default Login;
