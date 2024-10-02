import "./homeSpecial.css";

const HomeSpecial = () => {
  const specialData = [
    {
      id: 1,
      number: "01",
      title: "Title One",
      info: "We solve cases related to sexual harassment of all types",
    },
    {
      id: 2,
      number: "02",
      title: "Title One",
      info: "We solve cases related to sexual harassment of all types",
    },
    {
      id: 3,
      number: "03",
      title: "Title One",
      info: "We solve cases related to sexual harassment of all types",
    },
    {
      id: 4,
      number: "04",
      title: "Title One",
      info: "We solve cases related to sexual harassment of all types",
    },
    {
      id: 5,
      number: "05",
      title: "Title One",
      info: "We solve cases related to sexual harassment of all types",
    },
    {
      id: 6,
      number: "06",
      title: "Title One",
      info: "We solve cases related to sexual harassment of all types",
    },
  ];

  return (
    <section className="homeSpecial">
      <div className="section_wrapper">
        <h1 className="section_title">Our Specialization</h1>
        <div className="special_cards">
          {specialData.map((card) => (
            <div className="card_item">
              <h2 className="card_number">{card.number}</h2>
              <h3 className="card_title">{card.title}</h3>
              <p className="card_info">{card.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSpecial;
