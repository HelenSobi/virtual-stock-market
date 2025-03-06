import { useSelector } from 'react-redux';

const StocksList = () => {
  const stocks = useSelector((store) => store.stocks.stocksList);
  if (!stocks.length) return <p className="text-center py-4">Loading stocks...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {stocks.map((stock, index) => {  // ✅ Fixed `displayedStocks`
        const isPositive = stock.change >= 0;
        return (
          <div key={index} className="bg-white shadow-lg rounded-lg p-5 relative border border-gray-300">
            <h2 className="text-sm">{stock.Company_Name}</h2>
            <p className="text-sm">₹{stock.LTP} {stock.currency}</p>
            <p className={`text-xs ${isPositive ? "text-green-600" : "text-red-600"}`}>
              {isPositive ? "▲" : "▼"} {stock.change} ({stock.Change_percent}%)
            </p>
            <p className="text-gray-400 text-xs">Last Traded: {new Date(stock.traded_time).toLocaleString()}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StocksList;
