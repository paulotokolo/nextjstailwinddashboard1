"use client";

import { useState } from "react";

export default function Calendar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const dates = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="relative w-full overflow-hidden my-5">
      {/* Scrollable Container */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide p-2">
        {dates.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative px-4 py-2 rounded-md text-sm transition 
              ${
                activeIndex === index
                  ? "bg-black text-white shadow-lg"
                  : "bg-white border border-gray-500 text-black hover:bg-gray-200"
              }`}
          >
            {day}
            {/* Shadow Layer */}
            <div className="absolute top-1 left-1 w-full h-full bg-gray-500 rounded-md shadow-lg -z-10"></div>
          </button>
        ))}
      </div>
    </div>
  );
}
