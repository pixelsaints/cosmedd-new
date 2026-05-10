const ProductCard = ({ number, title, desc, icon }) => {
  return (
    <div className="product-card">
      <img src={icon} alt={title} />
      <div className="product-card-content">
        <h5 className="mb-3 font-semibold">{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProductCard;