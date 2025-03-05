import { useState, useEffect } from "react";
import { API_URL } from "../utils/constant";

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch stock data function
  const fetchStockData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setStocks(data.slice(0, 10)); // Show only 10 stocks
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchStockData();
    // Set interval to refresh data every 60 seconds
    const interval = setInterval(() => {
      fetchStockData();
    }, 60000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl mb-6">Stocks</h1>

      {/* Show loading indicator */}
      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Show error message if fetch fails */}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      {/* Stock Cards */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stocks.map((stock, index) => {
            const isPositive = stock.change >= 0;
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105 border border-gray-100"
              >
                {/* Company & Stock Code */}
                <h2 className="text-sm font-semibold">{stock.Company_Name} ({stock.Code_act})</h2>

                {/* Current Price */}
                <p className="text-sm">₹{stock.LTP} {stock.currency}</p>

                {/* Price Change Indicator */}
                <p className={`text-xs font-bold ${isPositive ? "text-green-600" : "text-red-600"}`}>
                  {isPositive ? "▲" : "▼"} {stock.change} ({stock.Change_percent}%)
                </p>

                {/* Market Cap */}
                {/* <p className="text-gray-500 text-sm">Market Cap: ₹{(stock.Marketcap / 1e12).toFixed(2)}T</p> */}

                {/* Volume */}
                {/* <p className="text-gray-500 text-sm">Volume: {stock.Volume.toLocaleString()}</p> */}

                {/* High & Low */}
                {/* <p className="text-gray-500 text-sm">Day: High ₹{stock.high} | Low ₹{stock.low}</p>
                <p className="text-gray-500 text-sm">52W: High ₹{stock["52_week_high"]} | Low ₹{stock["52_week_low"]}</p> */}

                {/* Last Traded Time */}
                <p className="text-gray-400 text-xs">Last Traded: {new Date(stock.traded_time).toLocaleString()}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StockList;
