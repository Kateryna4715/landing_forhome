function Customer({ image }) {
  return (
    <img
      className="customers__img"
      src={`customers/${image}.jpg`}
      alt="Customer"
    />
  );
}

export default Customer;
