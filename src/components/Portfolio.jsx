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
    <div className="bg-white shadow-md rounded-lg p-5 max-w-lg mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">📈 My Portfolio</h2>

      <p className="mb-4">💰 Balance: <strong>₹{balance.toFixed(2)}</strong></p>

      {loading ? (
        <p className="text-blue-500 text-center">Fetching stock prices...</p>
      ) : Object.keys(portfolio).length === 0 ? (
        <p className="text-gray-500">You don’t own any stocks yet.</p>
      ) : (
        <>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Stock</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(portfolio).map(([stock, quantity]) => {
                const stockPrice = stockPrices[stock] || 0;
                return (
                  <tr key={stock} className="text-center">
                    <td className="border p-2">{stock}</td>
                    <td className="border p-2">{quantity}</td>
                    <td className="border p-2">₹{stockPrice.toFixed(2)}</td>
                    <td className="border p-2">₹{(stockPrice * quantity).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p className="mt-4 text-lg font-semibold">
            📊 Portfolio Value: ₹{totalPortfolioValue.toFixed(2)}
          </p>
        </>
      )}
    </div>
  );
};

export default Portfolio;
