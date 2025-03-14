"use client";

import { ArrowDownLeft, ArrowRightLeft, ArrowUpRight } from "lucide-react";
import DropdownButton from "./DropdownButton";
import Badge from "./badge";
import Card from "./card";
import Calendar from "./calendar";
import Table from "./table";
import Chart from "./chart";
import Table2 from "./table2";

export default function CashAndProfit() {
  const titles = ["Fiscal Year?", "2020", "2021"];
  const data = [
    { "Fiscal Year?": "Income", "2020": "$44,491.53", "2021": "$244,834.70" },
    { "Fiscal Year?": "Expense", "2020": "$162,383.46", "2021": "$242,466.60" },
    {
      "Fiscal Year?": "Net Income",
      "2020": "-$117,891.93",
      "2021": "$2,368.10",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
      {/* Cash Flow Section */}
      <div className="rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl">Cash Flow</h1>

          {/* Dropdown Buttons Aligned Right */}
          <div className="flex items-center gap-2">
            <DropdownButton>1-6 Months</DropdownButton>
            <DropdownButton>View Report</DropdownButton>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          Cash coming in and going out of your business
        </p>

        {/* Badge */}
        <Badge text="Inflow" fill="#7bf1a8" />
        <Badge text="Outflow" fill="black" />
        <Badge text="Net Changes" fill="#e9d4ff" />

        {/* Card  */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
          <div>
            <Card
              text1={ArrowDownLeft}
              text2="Inflow"
              text3="$80000"
              bgColor="bg-green-300"
            />
          </div>
          <div>
            <Card
              text1={ArrowUpRight}
              text2="Outflow"
              text3="$12000"
              bgColor="bg-purple-200"
            />
          </div>
          <div>
            <Card
              text1={ArrowRightLeft}
              text2="Net Changes"
              text3="$2000"
              bgColor="bg-orange-200"
            />
          </div>
        </div>
        <Calendar />

        <h1 className="font-bold text-xl my-5">Net Income</h1>

        <Table titles={titles} data={data} />
      </div>

      {/* Profit and Loss Section */}
      <div className="rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl">Profit and loss</h1>

          {/* Dropdown Buttons Aligned Right */}
          <div className="flex items-center gap-2">
            <DropdownButton>1-6 Months</DropdownButton>
            <DropdownButton>View Report</DropdownButton>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          Income and expenses on (Includes unpaid invoice and bills)
        </p>

        {/* Badge */}
        <Badge text="Inflow" fill="#7bf1a8" />
        <Badge text="Outflow" fill="#e9d4ff" />
        <Chart />
        <Table2 />
      </div>
    </div>
  );
}
