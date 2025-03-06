import { useSelector, useDispatch } from "react-redux";
import { buyStock, sellStock } from "../store/slices/walletSlice";
import BuySellMenu from "./BuySellMenu";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const StocksTable = () => {
  const stocks = useSelector((store) => store.stocks.stocksList.slice(0, 10));
  const dispatch = useDispatch();

  if (!stocks.length) return <p className="text-center py-4">Loading stocks...</p>;

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-sm md:text-base">
            <th className="p-3 text-left">Company</th>
            <th className="p-3">Price</th>
            <th className="p-3">Change</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr
              key={index}
              className="border-b text-center text-sm md:text-base transition duration-200 ease-in-out hover:bg-gray-100 cursor-pointer"
            >
              <td className="p-3 text-left">{stock.Company_Name}</td>
              <td className="p-3">₹{stock.LTP}</td>
              <td
                className={`p-3 flex items-center justify-center gap-1 ${
                  stock.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {stock.change >= 0 ? <FaArrowUp className="text-xs md:text-sm" /> : <FaArrowDown className="text-xs md:text-sm" />}
                <span>{stock.change} ({stock.Change_percent}%)</span>
              </td>
              <td className="p-3">
                <BuySellMenu
                  stock={stock}
                  onBuy={() => dispatch(buyStock({ stock: stock.Company_Name, price: stock.LTP }))}
                  onSell={() => dispatch(sellStock({ stock: stock.Company_Name, price: stock.LTP }))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StocksTable;
