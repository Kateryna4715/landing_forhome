import { categoriesList } from "../data/homeData";
import Category from "./Category";

function Categories() {
  return (
    <section className="categories">
      <div className="categories__content centered">
        <h2>Shop by categories</h2>

        <div className="grid">
          {categoriesList.map((cat) => (
            <Category image={cat.img} title={cat.title} key={cat.img} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
