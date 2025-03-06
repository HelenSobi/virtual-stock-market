import { createSlice } from "@reduxjs/toolkit";

const stocksSlice=createSlice({
    name:"stocks",
    initialState:{
        stocksList:[],
    },
    reducers:{
        addStocksList:(state,action)=>{
            state.stocksList=[...action.payload];
        },
    },
});

export const { addStocksList}=stocksSlice.actions;
export default stocksSlice.reducer;