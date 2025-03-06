// KeyFeatures.jsx
const KeyFeatures = () =>  {
    return (
      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-bold text-center">Key Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <h3 className="text-lg font-bold">Real-Time Data</h3>
            <p className="mt-2">Get up-to-the-minute stock updates.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <h3 className="text-lg font-bold">Portfolio Management</h3>
            <p className="mt-2">Track and manage your investments easily.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <h3 className="text-lg font-bold">User-Friendly Interface</h3>
            <p className="mt-2">Navigate the market with ease.</p>
          </div>
        </div>
      </section>
    );
  }
  export default KeyFeatures;