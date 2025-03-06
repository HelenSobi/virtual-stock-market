import { useSelector } from "react-redux";

const WalletBalance = () => {
  const balance = useSelector((store) => store.wallet.balance);

  return (
      <p className="text-sm">Virtual Money : ₹{balance.toLocaleString()}</p>
  );
};

export default WalletBalance;
