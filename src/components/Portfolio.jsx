import { useSelector } from "react-redux";

const Portfolio = () => {
  const portfolio = useSelector((state) => state.wallet.portfolio);
  const balance = useSelector((state) => state.wallet.balance);
  const stockPrices = useSelector((state) => state.stocks.stockPrices); 

  return (
    <div className="overflow-x-auto w-full">
        {Object.keys(portfolio).length === 0 ? (
          <p className="text-gray-500 text-center">You don’t own any stocks yet.</p>
        ) : (
           <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white text-sm md:text-base">
                <th className="p-3 text-left">Stock</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Price</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody>
                  {Object.entries(portfolio).map(([stock, quantity]) => {
                    const stockPrice = stockPrices[stock] || 0;
                    return (
                      <tr key={stock} className="border-b text-center text-xs md:text-sm transition duration-200 ease-in-out hover:bg-gray-100 cursor-pointer">
                        <td className="p-3 border text-left">{stock}</td>
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
        )}
      </div>
  );
};

export default Portfolio;
