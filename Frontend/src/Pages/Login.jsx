import React from "react";
import { FaFacebookF, FaTwitter, FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-500">Log In</h1>

          <p className="text-gray-500 mt-2 text-sm">
            Please sign in to your existing account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="font-medium text-gray-700">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-xl mt-2 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-3 rounded-xl mt-2 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label className="text-gray-600">Remember me</label>
            </div>

            <button type="button" className="text-orange-500 hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Button */}
          <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-300">
            Log In
          </button>
        </form>

        {/* Signup */}
        <div className="flex justify-center gap-2 mt-6 text-sm">
          <p className="text-gray-500">Don’t have an account?</p>

          <button className="text-orange-500 font-semibold hover:underline">
            SIGN UP
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>

          <p className="px-3 text-gray-400 text-sm">OR</p>

          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5">
          <div className="bg-blue-600 text-white p-4 rounded-full cursor-pointer hover:scale-110 transition duration-300 shadow-md">
            <FaFacebookF size={18} />
          </div>

          <div className="bg-sky-500 text-white p-4 rounded-full cursor-pointer hover:scale-110 transition duration-300 shadow-md">
            <FaTwitter size={18} />
          </div>

          <div className="bg-black text-white p-4 rounded-full cursor-pointer hover:scale-110 transition duration-300 shadow-md">
            <FaApple size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
