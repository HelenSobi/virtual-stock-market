import StockList from "./StockList";
import Portfolio from "./Portfolio";
import WalletBalance from "./WalletBalance";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to TradeNova</h1>
        <p className="text-lg text-blue-200">Your Virtual Stock Market Trading Platform</p>
      </section>

      {/* Stock List Section */}
      <section className="max-w-5xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">📊 Market Overview</h2>
        <StockList />
      </section>
      {/* Wallet Balance */}
      <div className="max-w-4xl mx-auto mt-6 p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">💰 Your Wallet</h2>
        <WalletBalance />
      </div>

      {/* Portfolio Section */}
      <section className="max-w-4xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">📈 Your Portfolio</h2>
        <Portfolio />
      </section>
    </div>
  );
};

export default Home;
