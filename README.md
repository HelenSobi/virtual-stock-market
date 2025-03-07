### Virtual Stock Market

This is a virtual stock market application built with React, Tailwind CSS, and Redux. It allows users to simulate buying and selling stocks using virtual money, with real-time stock price updates every minute.

### Features

1. Real-time Stock Data: Stock prices update every minute.

2. Buy & Sell Stocks: Users can purchase and sell stocks using virtual money.

3. Portfolio Management: Track owned stocks and transaction history.

4. Redux for State Management: Efficiently manages wallet balance, portfolio, and transactions.

5. React Router: Supports multiple pages, including Home, Stocks, and Dashboard.

### Technologies Used

React: Front-end library

Redux Toolkit: State management

Tailwind CSS: Styling

React Router: Navigation

### Installation

Clone the repository:

git clone https://github.com/HelenSobi/virtual-stock-market.git
cd virtual-stock-market

Install dependencies:

npm install

Start the development server:

npm run dev

Open the application in your browser 

### Demo

You can view the live demo of the application here: https://tradenova.netlify.app/

### Project Structure

📦 virtual-stock-market
├── 📂 src
│   ├── 📂 components  # Reusable UI components
│   ├── 📂 pages       # Home, Stocks, and Dashboard pages
│   ├── 📂 redux       # Redux slices for wallet and stock data
│   ├── 📜 App.js      # Main app component
│   ├── 📜 index.js    # Entry point
├── 📜 package.json    # Dependencies and scripts
├── 📜 tailwind.config.js # Tailwind CSS configuration
├── 📜 README.md       # Project documentation

### Usage

Buy Stock: Select a stock and purchase it if you have enough balance.

Sell Stock: Sell stocks you own and get virtual money back.

Track Portfolio: View owned stocks and transaction history.