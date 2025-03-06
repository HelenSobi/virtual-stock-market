import { useSelector } from "react-redux";

const WalletBalance = () => {
  const balance = useSelector((state) => state.wallet.balance);

  return (
      <p className="text-md">Virtual Money : ₹{balance.toLocaleString()}</p>
  );
};

export default WalletBalance;
