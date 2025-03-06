import StockList from "../components/StockList";

const Stocks = () => {
    return (
      <section className="py-10">
        <div className="container mx-auto px-6 py-4">
        <h2 className="text-2xl ">Stocks</h2>
        <div className="mt-4"><StockList/></div>

        </div>
       
      </section>
    );
  }
  export default Stocks;
  