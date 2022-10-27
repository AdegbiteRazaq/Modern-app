import "./Business.css";

export default function BusinessMain() {
  return (
    <div>
      <div className="d-md-flex gap-4 align-items-center text-light">
        <div className=" mb-4 d-flex justify-content-center w-100">
          <img src="../assets/card.png" alt="img" className="img-1" />
        </div>
        <div className="w-100">
          <h3 className="mb-4 h3">
            Easily analyze your cash withdrawal & cash deposit.
          </h3>
          <p className="business-p1 pt-3 pb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, atque
            eum? Necessitatibus, quod sed aliquid quibusdam minus suscipit
            repellat porro eum temporibus dolorum!
          </p>
        </div>
      </div>
      {/* <div className="d-lg-flex align-items-center"> */}
      <div className="row gap-4 align-items-center mb-4">
        <div className=" col-lg">
          <h4 className="business-h4 text-light mb-4">
            Easily control your billing & invoicing.
          </h4>
          <p className="business-p1 pt-3 pb-3 text-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, atque
            eum? Necessitatibus, quod sed aliquid quibusdam minus suscipit
            repellat porro eum temporibus dolorum!
          </p>
          <div className="mt-4">
            <button className="btn btn-dark text-white me-3">
              <p className="h6 ">Get Started</p>
            </button>
          </div>
        </div>
        <div className=" col-lg d-flex  justify-content-center">
          <img src="../assets/bill.png" alt="img" className="img-1" />
        </div>
      </div>
    </div>
  );
}
