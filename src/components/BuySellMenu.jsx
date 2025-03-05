const BuySellMenu = ({ stock, onBuy, onSell, onClose }) => {
    return (
      <div className="absolute top-8 right-3 bg-white border border-gray-300 shadow-lg rounded-md w-28 p-2">
        <button
          onClick={() => {
            onBuy();
            onClose(); // Close the menu after buying
          }}
          className="block w-full text-left px-2 py-1 hover:bg-gray-200 text-emerald-600"
        >
          Buy
        </button>
        <button
          onClick={() => {
            onSell();
            onClose(); // Close the menu after selling
          }}
          className="block w-full text-left px-2 py-1 hover:bg-gray-200 text-red-500"
        >
          Sell
        </button>
      </div>
    );
  };
  
  export default BuySellMenu;
  