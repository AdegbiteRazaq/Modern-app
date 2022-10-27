import "./Trial.css";

export default function Trial() {
  return (
    <div className="d-xl-flex align-items-center justify-content-between trial-container">
      <div>
        <h4 className="h4 text-light mb-3">Try our service now!</h4>
        <p className="text-light pb-4">
          Everything you need for cash management and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div>
        <button className="btn btn-primary ">
          <a href="/#" alt="start link" className="text-light start-link">
            Get Started
          </a>
        </button>
      </div>
    </div>
  );
}
