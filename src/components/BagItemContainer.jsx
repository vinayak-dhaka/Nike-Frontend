import { useNavigate } from "react-router-dom";

const BagItemContainer = ({ item }) => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate(`/shoe/${item.id}`);
  };

  return (
    <>
      <div class="bag-item-container  " onClick={handleImageClick}>
        <div class="item-left-part  fluid">
          <img
            className="item-image img-fluid"
            src={item.image}
            alt="item image"
          />
        </div>
        <div class="item-right-part ">
          <div class="company">{item.company}</div>
          <div class="item-name">{item.item_name}</div>

          <div class="return-period">
            <span class="return-period-days">{5} days</span> return available
          </div>
        </div>
      </div>
    </>
  );
};
export default BagItemContainer;
