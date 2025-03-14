export default function Table2() {
  return (
    <div>
      <h1 className="font-bold text-xl my-5">Payable & Owing</h1>
      <div className="flex justify-center space-x-8 mt-5">
        {/* Invoices Payable Section */}
        <div className="w-1/2">
          <h2 className="font-bold text-lg text-center">
            Invoices payable to you
          </h2>
          <div className="border rounded-lg p-3 flex justify-between items-center mt-2">
            <span>Coming Due</span>
            <span>$0.00</span>
          </div>
          <div className="border rounded-lg p-3 flex justify-between items-center mt-2">
            <span>1-30 days overdue</span>
            <span>$0.00</span>
          </div>
          <div className="border rounded-lg p-3 flex justify-between items-center mt-2">
            <span>31-60 Overdue</span>
            <span>$0.00</span>
          </div>
        </div>

        {/* Bills You Owe Section */}
        <div className="w-1/2">
          <h2 className="font-bold text-lg text-center">Bills you owe</h2>
          <div className="border rounded-lg p-3 flex justify-between items-center mt-2">
            <span>Coming Due</span>
            <span>$0.00</span>
          </div>
          <div className="border rounded-lg p-3 flex justify-between items-center mt-2">
            <span>1-30 days overdue</span>
            <span>$0.00</span>
          </div>
          <div className="border rounded-lg p-3 flex justify-between items-center mt-2">
            <span>31-60 Overdue</span>
            <span>$0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
