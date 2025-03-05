import { useState, useEffect } from "react";
import { API_URL } from "../utils/constant"

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch stock data function
  const fetchStockData = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data)
      setStocks(data.slice(0, 10)); // Show only 10 stocks
    } catch (error) {
      setError(error.message);
    }
    finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchStockData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Market</h1>
       {/* Show loading indicator */}
       {loading && <p className="text-blue-500">Fetching stock data...</p>}
        {/* Show error message if fetch fails */}
      {error && <p className="text-red-500">Error: {error}</p>}
      {/* Show stocks when data is loaded */}
      {!loading && !error && (
      <ul className="list-disc pl-5">
        {stocks.map((stock, index) => (
          <li key={index} className="mb-2">
            {stock.Company_Name} - ${stock.Price_Open
}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default StockList;
