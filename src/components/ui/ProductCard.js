import { ArrowRight } from "lucide-react";
import TransitionLink from "../transitions/TransitionLink";

const ProductCard = ({ number, title, desc, icon, url }) => {
  return (
    <div className="product-card">
      <img src={icon} alt={title} />
      <div className="product-card-content">
        <h5 className="mb-3 font-semibold">{title}</h5>
        <p className="mb-4">{desc}</p>
        <TransitionLink className="btn btn-black-outline btn-small" href={url}>
          <span data-title="Learn More">Learn More</span>
          <ArrowRight size={20} absoluteStrokeWidth />
        </TransitionLink>
      </div>
    </div>
  );
};

export default ProductCard;