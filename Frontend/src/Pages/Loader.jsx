import React from "react";

export default function StatusLoader({ state }) {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="relative flex items-center justify-center">
        {/* LOADING */}
        {state === "loading" && (
          <div className="w-40 h-40 rounded-full border-[8px] border-orange-200 border-t-orange-500 animate-spin"></div>
        )}

        {/* SUCCESS */}
        {state === "success" && (
          <div className="relative flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-[8px] border-green-200 border-t-green-500 animate-spin"></div>

            <svg className="absolute w-30 h-30" viewBox="0 0 52 52">
              <path
                d="M14 27 L22 35 L38 18"
                fill="none"
                stroke="#22c55e"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tick-path"
              />
            </svg>
          </div>
        )}

        {/* REJECT */}
        {state === "reject" && (
          <div className="relative flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-[8px] border-red-200 border-t-red-500 animate-spin"></div>

            <svg className="absolute w-30 h-30" viewBox="0 0 52 52">
              <path
                d="M16 16 L36 36"
                fill="none"
                stroke="#ef4444"
                strokeWidth="6"
                strokeLinecap="round"
                className="cross-path-1"
              />

              <path
                d="M36 16 L16 36"
                fill="none"
                stroke="#ef4444"
                strokeWidth="6"
                strokeLinecap="round"
                className="cross-path-2"
              />
            </svg>
          </div>
        )}
      </div>

      <style>
        {`
          .tick-path {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            animation: drawTick 0.8s ease forwards;
          }

          .cross-path-1,
          .cross-path-2 {
            stroke-dasharray: 40;
            stroke-dashoffset: 40;
            animation: drawCross 0.5s ease forwards;
          }

          @keyframes drawTick {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes drawCross {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
