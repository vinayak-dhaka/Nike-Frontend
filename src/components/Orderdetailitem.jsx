import { useNavigate } from "react-router-dom";

const Orderdetailitem = ({ item }) => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate(`/shoe/${item.id}`);
  };
  return (
    <div className="bag-item-container" onClick={handleImageClick}>
      <div className="item-left-part fluid">
        <img
          className="item-image img-fluid"
          src={item.image}
          alt={item.item_name}
        />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>

        <div className="return-period">
          <span className="return-period-days">5 days</span> return available
        </div>
      </div>
    </div>
  );
};

export default Orderdetailitem;
