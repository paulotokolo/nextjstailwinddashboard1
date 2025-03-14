import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm"> {/* Reduced size */}
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 border border-black rounded-3xl shadow-md bg-white focus:outline-none text-sm"
      />
      <div className="border border-black absolute top-1 left-1 w-full h-full bg-gray-500 rounded-3xl shadow-lg -z-10"></div>
    </div>
  );
};

export default SearchBar;
