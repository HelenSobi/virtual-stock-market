import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { API_URL } from "./constant";
import { addStocksList } from '../store/slices/stocksSlice';

const useFetchStocks = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch stocks");
                }
                const data = await response.json();
                //console.log("Fetched stock data:", data);
                dispatch(addStocksList(data));
                //console.log("Dispatched stock data:", data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            } 
        };

        fetchStocks();
        const interval = setInterval(() => {
            fetchStocks(); // Fetch data every 60 seconds
          }, 60000);
      
          return () => clearInterval(interval); // Cleanup interval on unmount
    }, [dispatch]);

    return { loading, error }; // Ensure the hook returns values
};

export default useFetchStocks;

