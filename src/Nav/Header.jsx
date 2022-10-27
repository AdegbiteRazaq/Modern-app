import "./Header.css";
import logo1 from "../Combined Shape.svg";
export default function Header() {
  return (
    <div className="header__container">
      <div className=" d-lg-flex  align-items-center ">
        <div className="pe-4 pb-4">
          <button className=" d-flex percent align-items-center g-2">
            <img src={logo1} alt="Shape svg " />
            <p className="text-light mb-0 ms-3">
              CASH COMPLETE MANAGEMENT SYSTEM
            </p>
          </button>
          <h1 className="display-4 gen-h1 text-light">
            The Next{" "}
            <span>
              <br />
              Generation
            </span>{" "}
            <br />
            of Cash Management.
          </h1>
          <div className="text-lg-center">
            <p className="text-light">
              Our team of experts uses a methodology to identify the banking
              management challenge which most likely fit their needs. most
              likely to fix ur needs.
            </p>
            <p className="text-light">
              We examine real-time data relating to respected roles like the
              CMU, Branch & Regional Officer, Cash Officer, and much more.
            </p>
          </div>
        </div>
        <div className="img-div">
          <img src="../assets/robot.png" alt="robot-snap" className="robot" />
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4 header-bottom">
        <p className="h6 d-flex align-items-center text-light">
          <span className="m-sm-2 text-light h3">3800+</span>USER ACTIVE
        </p>
        <p className="h6 d-flex align-items-center text-light">
          <span className="m-sm-2 text-light h3">230+</span>
          TRUSTED BY COMPANY
        </p>
        <p className="h6 d-flex align-items-center text-light">
          <span className="m-sm-2 text-light h3">230M+</span>TRANSACTION
        </p>
      </div>
    </div>
  );
}
