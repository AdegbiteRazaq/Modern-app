import "./Business.css";

export default function BusinessHeader() {
  const Lists = [
    {
      img: "Star.svg",
      title: "Decision Making",
      content:
        "We provide businesses with the capabilities to generate real time insights and predictions to optimize their performance.",
    },
    {
      img: "Shield.svg",
      title: "100% Secured",
      content:
        "We take proactive steps and make sure your information and transactions are secure.",
    },
    {
      img: "Send.svg",
      title: "Balance Transfer",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];

  return (
    <div className=" d-lg-flex align-items-center">
      <div className="w-100">
        <h3 className="text-light">
          You do your daily activities, we provide analytical solution.
        </h3>
        <p className="text-light business-p1">
          With the right analytical tool, you can improve your financial
          management with a glance, make effective decisions and optimize your
          performance.
        </p>
        <button className="btn btn-primary p-2 mt-4 mb-4">
          <a href="/#" alt="Get started" className="text-white start-link">
            Get Started
          </a>
        </button>
      </div>

      <div className="w-100">
        {Lists.map((list) => (
          <div className="d-flex align-items-center mb-4 p-2 business-hover">
            <img
              src={`../assets/${list.img}`}
              alt="star-snap"
              className="img"
            />
            <div>
              <h4 className="text-white h6">{list.title}</h4>
              <p className="text-white business-p1">{list.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
