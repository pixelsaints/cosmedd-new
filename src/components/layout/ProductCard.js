const ProductCard = ({ number, title, desc, icon }) => {
  return (
    <div className="product-card">
      <img src={icon} alt={title} />
      <div className="product-card-content">
        <h4 className="mb-3">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProductCard;