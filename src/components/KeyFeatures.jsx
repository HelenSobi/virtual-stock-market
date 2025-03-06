import { FaChartLine, FaWallet, FaUserAlt } from "react-icons/fa";

const KeyFeatures = () => {
  return (
    <section className="">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-md text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full mx-auto">
              <FaChartLine size={28} />
            </div>
            <h3 className="text-lg font-bold mt-4">Real-Time Data</h3>
            <p className="mt-2 text-gray-600">Get up-to-the-minute stock updates.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full mx-auto">
              <FaWallet size={28} />
            </div>
            <h3 className="text-lg font-bold mt-4">Portfolio Management</h3>
            <p className="mt-2 text-gray-600">Track and manage your investments easily.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full mx-auto">
              <FaUserAlt size={28} />
            </div>
            <h3 className="text-lg font-bold mt-4">User-Friendly Interface</h3>
            <p className="mt-2 text-gray-600">Navigate the market with ease.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
