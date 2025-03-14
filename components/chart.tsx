import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";

const lineChartData = [
  { name: "Nov 20", value: 10000 },
  { name: "Nov 25", value: 5000 },   
  { name: "Dec 1", value: 12000 },   
  { name: "Dec 10", value: 6000 },   
  { name: "Dec 20", value: 15000 },  
  { name: "Jan 1", value: 7000 },    
  { name: "Jan 10", value: 16000 },  
  { name: "Jan 21", value: 8000 },   
  { name: "Feb 1", value: 17000 },   
  { name: "Feb 15", value: 9000 },   
  { name: "Feb 21", value: 18000 },  
  { name: "Mar 1", value: 10000 },   
  { name: "Mar 10", value: 19000 },  
  { name: "Mar 21", value: 11000 },  
];

const barChartData = [
  { name: "Page A", uv: 5000 },
  { name: "Page B", uv: 1000 },
  { name: "Page C", uv: 4500 },
  { name: "Page D", uv: 1200 },
  { name: "Page E", uv: 4800 },
  { name: "Page F", uv: 900 },
  { name: "Page G", uv: 4700 },
  { name: "Page H", uv: 1500 },
  { name: "Page I", uv: 4900 },
  { name: "Page J", uv: 800 },
];


export default function Chart() {
  return (
    <div className="relative w-full mt-2"> 
      {/* Outer Container */}
      <div className="relative w-full p-3 border border-gray-500 bg-black rounded-2xl shadow-md flex flex-col">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
          <div className="rounded-lg w-fit p-2">
            <p className="font-bold text-sm text-white text-right">+12%</p>
            <p className="text-5xl font-bold text-green-300">192</p>
            <p className="text-xs text-white">Inflow Today</p>
          </div>
          <div className="rounded-lg lg:col-span-2 p-2">
            <LineChartComponent data={lineChartData} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 mt-2">
          <BarChartComponent data={barChartData} label="Inflow" value={80000} fill="#7bf1a8" />
          <BarChartComponent data={barChartData} label="Outflow" value={2000} fill="#e9d4ff" />
          <div className="rounded-lg lg:col-span-2 p-2 flex items-center justify-center">
            <p className="text-white text-sm">Nov Dec Jan Feb March</p>
          </div>
        </div>
      </div>

      {/* Background Shadow */}
      <div className="absolute top-1 left-1 w-full h-full bg-gray-500 rounded-2xl shadow-lg -z-10"></div>
    </div>
  );
}
