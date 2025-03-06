

const BuySellMenu = ({ stock, onBuy, onSell }) => {
    return (
      <div>
        <button onClick={() => { onBuy(); }}
          className="bg-green-100 text-green-600 px-3 py-1 rounded mr-4"
        >
          Buy
        </button>
        <button
          onClick={() => { onSell(); }}
          className="bg-red-100 text-red-600 px-3 py-1 rounded"
        >
          Sell
        </button>
      </div>
    );
  };
  
  export default BuySellMenu;
  