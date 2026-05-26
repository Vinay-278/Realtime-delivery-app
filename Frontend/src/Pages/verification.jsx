import React, { useRef, useState } from "react";

const Verification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value;

    setOtp(newOtp);

    // Move cursor automatically
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[350px] shadow-lg rounded-xl p-6 bg-white">
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-orange-500">Verification</div>

          <div className="text-gray-500 mt-2 text-sm">
            We have sent a code to your email
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          {otp.map((item, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={item}
              onChange={(e) => handleChange(e.target.value, index)}
              className="
                w-14
                h-14
                text-center
                text-xl
                font-bold
                rounded-xl
                bg-gray-100
                border
                border-gray-300
                outline-none
                focus:border-orange-500
                focus:ring-2
                focus:ring-orange-200
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Verification;
