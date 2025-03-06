import { Routes, Route } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home"
import Stocks from "./pages/Stocks"
import Dashboard from "./pages/Dashboard"
import useFetchStocks from "./utils/useFetchStocks";

function App() {
 useFetchStocks(); 
 
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App;
