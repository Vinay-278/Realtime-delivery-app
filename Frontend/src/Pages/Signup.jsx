import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[350px] bg-white p-6 rounded-xl shadow-lg">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-orange-500">Sign Up</h1>

          <p className="text-gray-500 mt-2">Please signup to get started</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="font-medium">Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-2 rounded-lg mt-1 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-2 rounded-lg mt-1 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="font-medium">Password</label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 p-2 rounded-lg mt-1 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="font-medium">Re-type Password</label>

            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full border border-gray-300 p-2 rounded-lg mt-1 outline-none focus:border-orange-500"
            />
          </div>

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
