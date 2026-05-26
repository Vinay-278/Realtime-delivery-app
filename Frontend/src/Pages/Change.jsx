import React from "react";

const Change = ({ email }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-500">Reset Password</h1>

          <p className="text-gray-500 mt-3 text-sm">Password reset for</p>

          <p className="text-orange-500 font-semibold break-all">{email}</p>
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <label className="font-medium text-gray-700">New Password</label>

          <input
            type="password"
            placeholder="Enter new password"
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

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="font-medium text-gray-700">Confirm Password</label>

          <input
            type="password"
            placeholder="Re-enter password"
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
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Change;
