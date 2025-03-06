import StockList from "../components/StockList";
import Portfolio from "../components/Portfolio";
import WalletBalance from "../components/WalletBalance";
import Hero from "../components/Hero";
import Stocks from "./Stocks";
import KeyFeatures from "../components/KeyFeatures";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
          {/* Hero Section */}
        <Hero/>
       
        <KeyFeatures/>
      {/* Wallet Balance */}
      <div className="max-w-4xl mx-auto mt-6 p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">💰 Your Wallet</h2>
        <WalletBalance />
      </div>

      {/* Portfolio Section */}
      <div><Stocks/></div>
      <section className="max-w-4xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">📈 Your Portfolio</h2>
        <Portfolio />
      </section>
    </div>
  );
};

export default Home;
