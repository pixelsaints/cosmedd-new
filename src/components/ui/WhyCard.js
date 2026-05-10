const WhyCard = ({ number, title, desc, icon }) => {
  return (
    <div className="why-card">
      <div className="icon">
        <img src={icon} alt={title} className="icon-image" />
        <div className="icon-number">{number}</div>
      </div>

      <div className="icon-content">
        <div className="icon-content-title">{title}</div>
        <div className="icon-content-desc">{desc}</div>
      </div>
    </div>
  );
};

export default WhyCard;