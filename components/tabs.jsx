export default function Tabs() {
    return (
      <div className="py-1.5">
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>
  
          <select id="Tab" className="w-full rounded-md border-gray-200">
            <option select="true">Overview</option>
            <option>Transactions</option>
            <option>Reports</option>
            <option>Hire Bookkeeper</option>
          </select>
        </div>
  
        <div className="hidden sm:block">
          {/* Increased border thickness */}
          <div className="border-b-2 border-gray-500">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
              <a
                href="#"
                className="shrink-0 border-b-2 border-emerald-600 px-1 pb-4 text-sm font-bold"
              >
                Overview
              </a>
  
              <a
                href="#"
                className="shrink-0 border-b-4 border-transparent px-1 pb-4 text-sm font-bold text-gray-500 hover:border-emerald-600 hover:text-gray-700"
              >
                Transactions
              </a>
  
              <a
                href="#"
                className="shrink-0 border-b-4 border-transparent px-1 pb-4 text-sm font-bold text-gray-500 hover:border-emerald-600 hover:text-gray-700"
              >
                Reports
              </a>
  
              <a
                href="#"
                className="shrink-0 border-b-4 border-transparent px-1 pb-4 text-sm font-bold text-gray-500 hover:border-emerald-600 hover:text-gray-700"
                aria-current="page"
              >
                Hire Bookkeeper
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
  