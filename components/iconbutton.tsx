"use client";
import { ReactNode, useState } from "react";

interface IconButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  imageUrl?: string; // Optional profile image URL
}

export default function IconButton({ children, onClick, imageUrl }: IconButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block mt-4 align-middle">
      <button
        onClick={() => {
          setOpen(!open);
          onClick?.();
        }}
        className={`relative border bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center ${imageUrl ? "overflow-hidden border-gray-500" : "border-black"}`}
      >
        {imageUrl ? (
          <img src={imageUrl} className="w-full h-full object-cover" alt="Profile" />
        ) : (
          children
        )}
      </button>

      {imageUrl && open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 shadow-md rounded-md">
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-200"
            onClick={() => alert("Signing out...")}
          >
            Sign Out
          </button>
        </div>
      )}
      {!imageUrl && (
        <div className="absolute top-1 left-0 w-full h-full bg-gray-500 border border-black rounded-full shadow-lg -z-10"></div>
      )}
    </div>
  );
}