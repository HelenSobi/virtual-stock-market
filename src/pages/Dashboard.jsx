import StocksTable from "../components/StocksTable";
import Portfolio from "../components/Portfolio";

const Dashboard=()=>
{
    return(
        <div>
           
            <div className="container">
                {/* Stocks Table */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Stock Market</h2>
                <StocksTable/>
                </div>

                {/* Portfolio Section */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Your Portfolio</h2>
                <Portfolio />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;