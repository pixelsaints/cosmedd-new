import { ArrowRight } from "lucide-react";
import TransitionLink from "../transitions/TransitionLink";

const ProductCard = ({ number, title, desc, image, link }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-card-content">
        <h5 className="mb-3 font-semibold">{title}</h5>
        <p className="mb-4 line-clamp-3">{desc}</p>
        <TransitionLink className="btn btn-black-outline btn-small" href={link}>
          <span data-title="Learn More">Learn More</span>
          <ArrowRight size={20} absoluteStrokeWidth />
        </TransitionLink>
      </div>
    </div>
  );
};

export default ProductCard;