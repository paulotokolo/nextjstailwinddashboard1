interface TableProps {
  titles: string[];
  data: { [key: string]: string }[];
}

export default function Table({ titles, data }: TableProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full min-w-max border-collapse">
        {/* Table Head */}
        <thead>
          <tr className="bg-white">
            {titles.map((title, index) => (
              <th
                key={index}
                className="px-6 py-3 text-gray-700 text-center border-b border-black"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td colSpan={titles.length} className="py-2">
                <div className="flex justify-between items-center bg-white px-6 py-3 text-gray-800 border border-black rounded-lg shadow-md">
                  {titles.map((title, colIndex) => (
                    <span key={colIndex} className="w-1/3 text-center rounded-full px-4 py-2">
                      {row[title] || "-"}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}