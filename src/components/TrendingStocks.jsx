import { useSelector } from "react-redux";
import { useMemo } from "react";
import StocksCard from "./StocksCard";

const TrendingStocks = () => {
  const stocks = useSelector((store) => store.stocks.stocksList);
  const trendingStocks = useMemo(() => stocks.slice(0, 10), [stocks]);
  if (!stocks.length) return <p className="text-center py-4">Loading stocks...</p>;

  return (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingStocks.map((stock, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-5 border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <StocksCard stock={stock}/>
                </div>
            ))}
          </div>
  )
};

export default TrendingStocks;