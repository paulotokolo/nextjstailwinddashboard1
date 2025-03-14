import { ResponsiveContainer, BarChart, Bar } from "recharts";

type ChartData = {
  name: string;
  uv: number;
}[];

type BarChartProps = {
  data: ChartData;
  label: string;
  value: number;
  fill: string;
};

const BarChartComponent = ({ data, label, value, fill }: BarChartProps) => {
  return (
    <div className="h-20 flex flex-col items-center justify-between px-7 rounded-lg">
      {/* Chart Container */}
      <div className="w-full h-12">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="uv" fill={fill} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Label & Value */}
      <div className="text-center">
        <p className="font-bold text-white text-sm">${value.toLocaleString()}</p>
        <p className="text-xs text-white">{label}</p>
      </div>
    </div>
  );
};

export default BarChartComponent;
