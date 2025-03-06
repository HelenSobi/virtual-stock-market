import {useSelector} from 'react-redux';
import { useMemo } from "react";

const StocksList=()=>{
  const stocks=useSelector(store => store.stocks?.stocksList);
  // Memoize the sliced stock list to prevent unnecessary re-renders
  const displayedStocks = useMemo(() => stocks?.slice(0, 10) || [], [stocks]);
  if (!displayedStocks || !Array.isArray(displayedStocks) || displayedStocks.length === 0) return "error";
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedStocks.map((stock, index) => {
            const isPositive = stock.change >= 0;
            return (
              <div key={index} className="bg-white shadow-lg rounded-lg p-5 relative border border-gray-300">
                <h2 className="text-sm">{stock.Company_Name}</h2>
                <p className="text-sm">₹{stock.LTP} {stock.currency}</p>
                <p className={`text-xs ${isPositive ? "text-green-600" : "text-red-600"}`}>
                  {isPositive ? "▲" : "▼"} {stock.change} ({stock.Change_percent}%)
                </p>
                <p className="text-gray-400 text-xs">Last Tradedd: {new Date(stock.traded_time).toLocaleString()}</p>
              </div>
            );
          })}
        </div>
    </>
  )
}

export default StocksList;