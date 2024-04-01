import BtnCTA from "../ui/BtnCTA";

function Sales() {
  return (
    <section className="sales">
      <div className="sales__content centered">
        <h2>Don't miss sales</h2>
        <div className="sale flex">
          <div className="sale__heading">
            <p className="sale__title">Hurry!</p>
            <p className="sale__subtitle">Ends soon</p>
          </div>

          <div className="sale-orange">
            <p className="sale__up">up to</p>
            <p>
              <span className="sale__percents">20% off</span>
            </p>
            <p className="sale__up">All orderes $50+</p>
          </div>
          <BtnCTA>Shop now</BtnCTA>
        </div>
      </div>
    </section>
  );
}

export default Sales;
