import StarRating from "../ui/StarRating";

function Item({ img, price, title }) {
  return (
    <div className="best__item flex-align">
      <img className="best__img" src={`bestsellers/${img}.png`} alt={title} />
      <p className="best__price">{price} $</p>
      <p className="best__title">{title}</p>
      <StarRating />
    </div>
  );
}

export default Item;
