"use client";
import { useState } from "react";
import { BellDot, CalendarRange, MessageCircleMore, Menu } from "lucide-react";
import IconButton from "./iconbutton";
import SearchBar from "./searchbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full p-3">
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <h1 className="font-bold text-xl">Accounting</h1>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            <Menu className="p-1" />
          </IconButton>
        </div>

        {/* Icon Buttons + Profile (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-2">
          <IconButton>
            <CalendarRange className="p-1" />
          </IconButton>
          <IconButton>
            <BellDot className="p-1" />
          </IconButton>
          <IconButton>
            <MessageCircleMore className="p-1" />
          </IconButton>
          <IconButton imageUrl="https://i.pinimg.com/1200x/b9/85/b9/b985b93854b204a54f0bf4c3e75eef54.jpg" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div>
          <div className="md:hidden flex flex-col items-center mt-2">
            <SearchBar />
          </div>
          <div className="md:hidden flex items-center mt-2 justify-center gap-3">
            <IconButton>
              <CalendarRange className="p-1" />
            </IconButton>
            <IconButton>
              <BellDot className="p-1" />
            </IconButton>
            <IconButton>
              <MessageCircleMore className="p-1" />
            </IconButton>
            <IconButton imageUrl="https://i.pinimg.com/1200x/b9/85/b9/b985b93854b204a54f0bf4c3e75eef54.jpg" />
          </div>
        </div>
      )}
    </div>
  );
}
