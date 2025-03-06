import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./slices/walletSlice";
import stocksReducer from "./slices/stocksSlice";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
    stocks: stocksReducer,
  },
});

export default store;
