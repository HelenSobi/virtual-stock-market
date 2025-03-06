import Hero from "../components/Hero";
import TrendingStocks from "../components/TrendingStocks";
import KeyFeatures from "../components/KeyFeatures";

const Home = () => {
  return (
    <div className="bg-gray-50">
        <Hero/>
        <section className="py-6">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-gray-800 relative pb-2">
            Stocks in News
            <span className="block w-12 h-1 bg-blue-500 mt-1"></span>
          </h3>
          <TrendingStocks />
          </div>
        </section>
        <section className="py-6">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-gray-800 relative pb-2">
          Key Features
            <span className="block w-12 h-1 bg-blue-500 mt-1"></span>
          </h3>
          <KeyFeatures />
          </div>
        </section>  
    </div>
  );
}

export default Home;
