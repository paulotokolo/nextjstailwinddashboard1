import { Circle } from "lucide-react";

interface BadgeProps {
  text: string;
  fill: string;
}

export default function Badge({ text, fill }: BadgeProps) {
  return (
    <span className="inline-flex items-center justify-center rounded-full px-2 py-3 text-black text-sm">
      <Circle fill={fill} className="w-3 h-3 text-transparent" />
      <p className="whitespace-nowrap text-sm ml-1">{text}</p>
    </span>
  );
}
