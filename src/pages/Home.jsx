import Hero from "../components/Hero";
import Stocks from "./Stocks";
import KeyFeatures from "../components/KeyFeatures";
const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
        <Hero/>
        <Stocks/>
        <KeyFeatures/>  
    </div>
  );
};

export default Home;
