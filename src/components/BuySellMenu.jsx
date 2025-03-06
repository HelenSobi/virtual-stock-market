
const BuySellMenu = ({onBuy, onSell }) => {
    return (
      <div className="flex flex-col md:flex-row gap-2">
        <button onClick={() => { onBuy(); }} className="bg-green-100 text-green-600 px-3 py-1 rounded">
          Buy
        </button>
        <button onClick={() => { onSell(); }} className="bg-red-100 text-red-600 px-3 py-1 rounded">
          Sell
        </button>
      </div>
    );
  };
  
  export default BuySellMenu;
  