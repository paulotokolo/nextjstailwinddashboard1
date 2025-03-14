"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface IconButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  imageUrl?: string; // Optional profile image URL
}

export default function IconButton({ children, onClick, imageUrl }: IconButtonProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative inline-block mt-4 align-middle" ref={dropdownRef}>
      <motion.button
        onClick={() => {
          setOpen(!open);
          onClick?.();
        }}
        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 5, 0], transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.9 }}
        className={`relative border bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center ${imageUrl ? "overflow-hidden border-gray-500" : "border-black"}`}
      >
        {imageUrl ? (
          <img src={imageUrl} className="w-full h-full object-cover" alt="Profile" />
        ) : (
          children
        )}
      </motion.button>

      {imageUrl && open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 shadow-md rounded-md"
        >
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-200"
            onClick={() => alert("Signing out...")}
          >
            Sign Out
          </button>
        </motion.div>
      )}
      {!imageUrl && (
        <div className="absolute top-1 left-0 w-full h-full bg-gray-500 border border-black rounded-full shadow-lg -z-10"></div>
      )}
    </div>
  );
}
