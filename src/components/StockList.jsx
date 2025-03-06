import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import StocksCard from "./StocksCard";

const StocksList = () => {
  const stocks = useSelector((store) => store.stocks?.stocksList) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const stocksPerPage = 20; // Number of stocks per page

  // Memoize total pages calculation
  const totalPages = useMemo(() => Math.ceil(stocks.length / stocksPerPage), [stocks.length]);

  // Memoize the displayed stocks for the current page
  const displayedStocks = useMemo(() => {
    const startIndex = (currentPage - 1) * stocksPerPage;
    return stocks.slice(startIndex, startIndex + stocksPerPage);
  }, [stocks, currentPage, stocksPerPage]);

  if (stocks.length === 0) return <p className="text-center py-4">Loading stocks...</p>;

  return (
    <div>
      {/* Stock List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedStocks.map((stock, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <StocksCard stock={stock} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2 text-sm">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className=" px-4 py-2 bg-gray-100 text-blue-500 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4 py-2 bg-gray-200 rounded">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-100 text-blue-500 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StocksList;
