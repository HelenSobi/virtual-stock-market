import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constant"; // Replace with your API

const Portfolio = () => {
  const portfolio = useSelector((state) => state.wallet.portfolio);
  const balance = useSelector((state) => state.wallet.balance);
  const [stockPrices, setStockPrices] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch latest stock prices
  useEffect(() => {
    const fetchStockPrices = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch stock prices");

        const data = await response.json();
        const prices = {};
        data.forEach(stock => {
          prices[stock.Company_Name] = stock.LTP; // Store stock prices
        });
        setStockPrices(prices);
      } catch (error) {
        console.error("Error fetching stock prices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockPrices();
  }, []);

  // Calculate total portfolio value
  const totalPortfolioValue = Object.keys(portfolio).reduce((total, stock) => {
    const stockPrice = stockPrices[stock] || 0;
    return total + stockPrice * portfolio[stock];
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
       
        <div className="flex justify-between items-center bg-blue-50 rounded-lg p-4 mb-6 shadow-sm">
          <p className="text-lg font-semibold text-gray-600">💰 Balance:</p>
          <p className="text-xl font-bold text-blue-600 animate-pulse">
            ₹{balance.toFixed(2)}
          </p>
        </div>

        {loading ? (
          <p className="text-blue-500 text-center">Fetching stock prices...</p>
        ) : Object.keys(portfolio).length === 0 ? (
          <p className="text-gray-500 text-center">You don’t own any stocks yet.</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-100 text-gray-700 text-sm md:text-base">
                    <th className="p-3 border">Stock</th>
                    <th className="p-3 border">Quantity</th>
                    <th className="p-3 border">Price</th>
                    <th className="p-3 border">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(portfolio).map(([stock, quantity]) => {
                    const stockPrice = stockPrices[stock] || 0;
                    return (
                      <tr key={stock} className="text-center text-gray-600 hover:bg-blue-50 transition">
                        <td className="p-3 border font-medium">{stock}</td>
                        <td className="p-3 border">{quantity}</td>
                        <td className="p-3 border">₹{stockPrice.toFixed(2)}</td>
                        <td className="p-3 border font-semibold">
                          ₹{(stockPrice * quantity).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-lg font-semibold text-center text-gray-800 bg-green-50 py-3 rounded-lg shadow-sm">
              📊 Portfolio Value: ₹{totalPortfolioValue.toFixed(2)}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
