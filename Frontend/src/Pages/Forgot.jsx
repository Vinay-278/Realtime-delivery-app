import React from "react";

const Forgot = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-500">
            Forgot Password
          </h1>

          <p className="text-gray-500 mt-3 text-sm leading-6">
            Enter your registered email address. We’ll send you a verification
            code to reset your password.
          </p>
        </div>

        {/* Input */}
        <div className="mb-6">
          <label className="font-medium text-gray-700">Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full
              border
              border-gray-300
              p-3
              rounded-xl
              mt-2
              outline-none
              focus:border-orange-500
              focus:ring-2
              focus:ring-orange-200
              transition
            "
          />
        </div>

        {/* Button */}
        <button
          className="
            w-full
            bg-orange-500
            text-white
            py-3
            rounded-xl
            font-semibold
            hover:bg-orange-600
            transition
            duration-300
            shadow-md
          "
        >
          Send Code
        </button>

        {/* Back to Login */}
        <div className="text-center mt-6">
          <button className="text-orange-500 hover:underline text-sm">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
