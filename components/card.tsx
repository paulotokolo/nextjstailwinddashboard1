import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface CardProps {
  text1: LucideIcon;
  text2: string;
  text3: string;
  bgColor?: string;
}

export default function Card({ text1: Icon, text2, text3, bgColor = "bg-white" }: CardProps) {
  return (
    <div className="relative w-full mt-3">
      <motion.button
        whileHover={{ scale: 1.05, rotate: [0, 2, -2, 2, 0], transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-full p-3 border h-32 border-gray-500 ${bgColor} rounded-2xl shadow-md flex flex-col items-center`}
      >
        <Icon className="w-6 h-6" />
        <p className="mt-2 text-sm">{text2}</p>
        <p className="font-bold">{text3}</p>
      </motion.button>
      <div className="absolute top-1 left-1 w-full h-full bg-gray-500 rounded-2xl shadow-lg -z-10"></div>
    </div>
  );
}
