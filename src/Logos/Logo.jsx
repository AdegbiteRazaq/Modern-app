import "./Logo.css";

export default function Logo() {
  return (
    <div className="d-flex align-items-center me-0 gap-2 justify-content-between logo-container">
      <img src="../assets/airbnb.png" alt="logo" className="logo" />
      <img src="../assets/binance.png" alt="logo" className="logo " />
      <img src="../assets/coinbase.png" alt="logo" className="logo " />
      <img src="../assets/dropbox.png" alt="logo" className="logo " />
    </div>
  );
}
