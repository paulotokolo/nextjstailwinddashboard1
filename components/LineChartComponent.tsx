import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";

type ChartData = {
  name: string;
  value: number;
}[];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          padding: "5px 10px",
          borderRadius: "4px",
          color: "#fff",
        }}
      >
        ${payload[0].value}
      </div>
    );
  }
  return null;
};

// Custom Dot Component (renders only at the last point & blinks)
const CustomDot = (props: any) => {
  const { cx, cy, index, data } = props;
  const isLastPoint = index === data.length - 1; // Check if it's the last point

  return isLastPoint ? (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      fill="#7bf1a8"
      stroke="#7bf1a8"
      strokeWidth={2}
      style={{
        animation: "blink 1s infinite alternate",
      }}
    />
  ) : null;
};

// CSS for Blinking Effect
const BlinkingStyle = () => (
  <style>
    {`
      @keyframes blink {
        0% { opacity: 1; }
        100% { opacity: 0.2; }
      }
    `}
  </style>
);

const LineChartComponent = ({ data }: { data: ChartData }) => {
  return (
    <>
      <BlinkingStyle />
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#fff" }} />
          <Line
            type="basis"
            dataKey="value"
            stroke="#7bf1a8"
            strokeWidth={2}
            dot={(props) => {
              const { key, ...restProps } = props;
              return <CustomDot key={key} {...restProps} data={data} />;
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartComponent;
