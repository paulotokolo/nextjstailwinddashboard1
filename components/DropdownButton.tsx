"use client";

import { useState, ReactNode } from "react";

interface DropdownButtonProps {
  children: ReactNode;
}

export default function DropdownButton({ children }: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-2 px-3 py-1 text-sm border border-gray-500 bg-white rounded-2xl shadow-md"
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="absolute top-1 left-1 w-full h-full bg-gray-500 rounded-2xl shadow-lg -z-10"></div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-48 rounded-2xl border border-gray-300 bg-white shadow-lg"
          role="menu"
        >
          <div className="p-2">
            <a
              href="#"
              className="block rounded-lg px-3 py-1 text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              View on Storefront
            </a>
            <a
              href="#"
              className="block rounded-lg px-3 py-1 text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              View Warehouse Info
            </a>
            <a
              href="#"
              className="block rounded-lg px-3 py-1 text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Duplicate Product
            </a>
            <a
              href="#"
              className="block rounded-lg px-3 py-1 text-xs text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Unpublish Product
            </a>
            <form method="POST" action="#">
              <button
                type="submit"
                className="flex w-full items-center gap-2 rounded-lg px-3 py-1 text-xs text-red-700 hover:bg-red-50"
                role="menuitem"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
