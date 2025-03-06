import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const StocksCard = ({ stock }) => {
    const isPositive = stock.change >= 0;
    return (
        <div>
      <h2 className="text-sm">{stock.Company_Name}</h2>
      <p className="text-sm pt-2">₹{stock.LTP} {stock.currency}</p>
      <p className={`text-xs inline-flex gap-1 rounded p-2 ${isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
        <span>{isPositive ? <FaArrowUp className="text-xs" /> : <FaArrowDown className="text-xs" />}</span>
        <span>{stock.change} ({stock.Change_percent}%)</span>
      </p>
      <p className="text-gray-400 text-xs  pt-2">
        Last Traded: {new Date(stock.traded_time).toLocaleString()}
      </p>
    </div>
    )
}

export default StocksCard;
