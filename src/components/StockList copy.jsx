import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { buyStock, sellStock } from "../store/slices/walletSlice";
import { API_URL } from "../utils/constant";
import BuySellMenu from "./BuySellMenu";
import { FaEllipsisV } from "react-icons/fa";

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState(null);

  const fetchStockData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setStocks(data.slice(0, 10)); // Show only 10 stocks
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData();
    const interval = setInterval(fetchStockData, 60000); // Auto-refresh every 1 min
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {loading && <p className="text-blue-500 text-center">Fetching stock data...</p>}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stocks.map((stock, index) => {
            const isPositive = stock.change >= 0;
            return (
              <div key={index} className="bg-white shadow-lg rounded-lg p-5 relative border border-gray-300">
                {/* Three-dot menu button */}
                <button 
                  className="absolute top-2 right-3 text-gray-500 hover:text-gray-800" 
                  onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                ><FaEllipsisV/>
                </button>

                {/* Buy/Sell Menu */}
                {activeMenu === index && (
                  <BuySellMenu
                    stock={stock}
                    onBuy={() => dispatch(buyStock({ stock: stock.Company_Name, price: stock.LTP }))}
                    onSell={() => dispatch(sellStock({ stock: stock.Company_Name, price: stock.LTP }))}
                    onClose={() => setActiveMenu(null)} // Close dropdown on action
                  />
                )}

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
      )}
    </div>
  );
};

export default StockList;
