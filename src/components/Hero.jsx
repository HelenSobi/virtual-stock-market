import { Link} from "react-router";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
    return (
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Trade Smarter, Invest Better</h1>
        <p className="mt-4 text-lg">Get real-time market data and manage your portfolio seamlessly.</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-md shadow-md">
          <Link to="/dashboard" className="inline-flex items-center gap-2 group">
            <span>Get Started</span>
            <FaArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </Link>
        </button>
      </section>
    );
  }
  export default Hero;