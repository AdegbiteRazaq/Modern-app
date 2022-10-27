import "./Nav.css";
import logo from "../hooBankLogo.png";
export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-style ">
        <div className="container-fluid">
          <div className="logo-text">
            <a className="navbar-brand nav-right-pad" href="/#">
              <img src={logo} alt="hoobank-logo" />
            </a>
            <h6 className="text-light text-margin-bottom">
              Hoo<span className="text-primary">Bank</span>
            </h6>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 links-left">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Solution
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
