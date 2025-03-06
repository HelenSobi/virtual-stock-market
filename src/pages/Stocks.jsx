import StockList from "../components/StockList";

const Stocks = () => {
    return (
      <section className="py-6">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-gray-800 relative pb-2">
          Discover more stocks
            <span className="block w-12 h-1 bg-blue-500 mt-1"></span>
          </h3>
          <StockList/>
          </div>
      </section>
    );
  }
  export default Stocks;
  