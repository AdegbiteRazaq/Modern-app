import "./Footer.css";
import logo from "../hooBankLogo.png";
export default function Footer() {
  return (
    <div className="text-light row p-4 my-4">
      <div className="col-6 col-lg-3 ms-auto ">
        <img src={logo} alt="snap" />
        <p>Complete</p>
        <p>The next generation of cash management system</p>
      </div>
      <div className="col-6 col-lg-3">
        <h6 className="mb-3">Useful Links</h6>
        <ul className="ps-0 list-unstyled nounderline ">
          <li>
            <a href="/#" className="link-light">
              Contents
            </a>
          </li>
          <li>
            <a href="/#" className="link-light links">
              How it Works
            </a>
          </li>
          <li>
            <a href="/#" className="link-light">
              Create
            </a>
          </li>
          <li>
            <a href="/#" className="link-light">
              Explore
            </a>
          </li>
          <li>
            <a href="/#" className="link-light">
              Terms & Services
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-lg-3">
        <h6 className="mb-3">Community</h6>
        <ul className="ps-0 list-unstyled nounderline ">
          <li>
            <a href="/#" className="link-light">
              Help Center
            </a>
          </li>
          <li>
            <a href="/#" className="link-light links">
              Partners
            </a>
          </li>
          <li>
            <a href="/#" className="link-light">
              Suggestions
            </a>
          </li>
          <li>
            <a href="/#" className="link-light">
              Blog
            </a>
          </li>
          <li>
            <a href="/#" className="link-light">
              Newsletters
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-lg-3">
        <h6 className="mb-3">Partner</h6>
        <ul className="ps-0 list-unstyled nounderline ">
          <li>
            <a href="/#" className="link-light">
              Our partner
            </a>
          </li>
          <li>
            <a href="/#" className="link-light links">
              Become a partner
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
