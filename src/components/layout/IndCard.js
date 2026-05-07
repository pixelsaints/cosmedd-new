const IndCard = ({ title, desc, icon, thumb }) => {
  return (
    <div className="ind-card">
      <div className="icon">
        <img src="thumb" alt={title} />
        <img src={icon} alt={title} className="icon-image" />
      </div>

      <div className="icon-content">
        <div className="icon-content-title">{title}</div>
        <div className="icon-content-desc">{desc}</div>
      </div>
    </div>
  );
};

export default IndCard;