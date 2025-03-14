import { LucideIcon } from "lucide-react";

interface CardProps {
  text1: LucideIcon;
  text2: string;
  text3: string;
  bgColor?: string;
}

export default function Card({ text1: Icon, text2, text3, bgColor = "bg-white" }: CardProps) {
  return (
    <div className="relative w-full mt-3">
      <button className={`relative w-full p-3 border h-32 border-gray-500 ${bgColor} rounded-2xl shadow-md flex flex-col items-center`}>
        <Icon className="w-6 h-6" />
        <p className="mt-2 text-sm">{text2}</p>
        <p className="font-bold">{text3}</p>
      </button>
      <div className="absolute top-1 left-1 w-full h-full bg-gray-500 rounded-2xl shadow-lg -z-10"></div>
    </div>
  );
}
