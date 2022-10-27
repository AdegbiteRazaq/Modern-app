import "./AboutHeader.css";

export default function AboutContent() {
  const Lists = [
    {
      img: "people01.png",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
    },
    {
      img: "people02.png",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Steve Mark",
    },
    {
      img: "people03.png",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Kenn Gallagher",
    },
  ];
  return (
    <div>
      <div className="d-lg-flex testifier-flex">
        {Lists.map((list) => (
          <div className="w-100 ind-testifier p-4">
            <img
              src="../assets/quotes.svg"
              alt="quote"
              className="quote-block"
            />
            <p className="h6 text-white pt-4 pb-4">{list.content}</p>
            <div className="d-flex align-items-center">
              <img
                src={`../assets/${list.img}`}
                alt="snap"
                className="testifiers"
              />
              <div className="ms-2">
                <p className="h6 text-light m-1">{list.name}</p>
                <p className="post">Founder & Leader</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
