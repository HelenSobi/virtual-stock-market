import { createSlice } from "@reduxjs/toolkit";

const stocksSlice=createSlice({
    name:"stocks",
    initialState:{
        stocksList:[],
        stockPrices: {}, // state for prices
    },
    reducers:{
        addStocksList:(state,action)=>{
            state.stocksList=[...action.payload];
            state.stockPrices = action.payload.reduce((acc, stock) => {
                acc[stock.Company_Name] = stock.LTP;
                return acc;
              }, {}); 
        },
    },
});

export const { addStocksList}=stocksSlice.actions;
export default stocksSlice.reducer;