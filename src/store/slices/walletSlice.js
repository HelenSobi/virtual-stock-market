import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 10000, // Starting virtual money
  portfolio: {}, // Holds owned stocks
  transactions: [], // Stores history of transactions
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    buyStock: (state, action) => {
      const { stock, price } = action.payload;
      if (state.balance < price) return; // Prevent buying if not enough balance

      state.balance -= price; // Deduct balance

      if (state.portfolio[stock]) {
        state.portfolio[stock] += 1;
      } else {
        state.portfolio[stock] = 1;
      }

      state.transactions.push({ type: "BUY", stock, price, time: new Date().toISOString() });
    },

    sellStock: (state, action) => {
      const { stock, price } = action.payload;
      if (!state.portfolio[stock]) return; // Prevent selling if stock not owned

      state.balance += price; // Add money back
      state.portfolio[stock] -= 1;

      if (state.portfolio[stock] === 0) {
        delete state.portfolio[stock]; // Remove stock if quantity is 0
      }

      state.transactions.push({ type: "SELL", stock, price, time: new Date().toISOString() });
    },
  },
});

export const { buyStock, sellStock } = walletSlice.actions;
export default walletSlice.reducer;
