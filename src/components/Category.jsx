function Category({ image, title }) {
  return (
    <div className={`grid__${image}`}>
      <a href="#">
        <img src={`categories/${image}.png`} alt={title} />
      </a>
      <button className="btn-category">
        <a href="#">{title}</a>
      </button>
    </div>
  );
}

export default Category;
