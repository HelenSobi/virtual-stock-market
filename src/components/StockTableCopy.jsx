import { useState, useEffect } from "react";
import { API_URL } from "../utils/constant"
//const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLisDl_36j3qOUSgNttduPbqcrMTC1XDQLNu1qUoy7QysdGEEgytHDw0sM31-lMh9zAXx03DwKTf6K1S23G1n5WL1LHdRb0pMYcf-ZJ2tm_OBluoN43ZpQHU6gf60uAvzf5MP5Fxof6_Dp6Edo0Gypb98fRBixD-8MsJ34ZYs1lZjQzgbMOdJwbRjHY7LSDfwVnjRix9nF969R15TdftA9JCC-MoLvHFkMCf98iWzulHhskEcif6sz9tNkT0LjY-xZR7uR2bZ8BWy8NaX9_jOK-Tw_Sx3g&lib=MdIYsclqH0ERsujCPYF5heQ5qp0xbhJQo";

function StockTable() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();

    // Refresh every 60 seconds
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data)
      setStocks(data); // Assuming API returns an array of stocks
    } catch (error) {
      console.error("Error fetching stock data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Stock Market Data</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 text-left">Stock Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Change</th>
                <th className="px-4 py-2 text-left">% Change</th>
              </tr>
            </thead>
            {/* <tbody>
              {stocks.map((stock, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2">{stock.Company_Name || "N/A"}</td>
                  </tr>
                 
            ))}
            </tbody> */}
            <tbody>
              {stocks.map((stock, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2">{stock.Company_Name || "N/A"}</td>
                  <td className="px-4 py-2">${stock.Price_Open || "N/A"}</td>
                  <td
                    className={`px-4 py-2 ${
                      stock.change >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stock.change || "N/A"}
                  </td>
                  <td
                    className={`px-4 py-2 ${
                      stock.Change_percent >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stock.Change_percent || "N/A"}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StockTable;
