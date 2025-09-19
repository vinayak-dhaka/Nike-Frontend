import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { useNavigate } from "react-router-dom";

const BagItemContainer = ({ item }) => {
  const dispatch = useDispatch();

  const handleremovefromcart = (e) => {
    e.stopPropagation();
    dispatch(bagActions.removeFromBag(item.id));
  };
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate(`/shoe/${item.id}`);
  };

  return (
    <>
      <div class="bag-item-container" onClick={handleImageClick}>
        <div class="item-left-part">
          <img className="item-image" src={item.image} alt="item image" />
        </div>
        <div class="item-right-part">
          <div class="company">{item.company}</div>
          <div class="item-name">{item.item_name}</div>

          <div class="return-period">
            <span class="return-period-days">{5} days</span> return available
          </div>
        </div>

        <div class="remove-from-cart" onClick={handleremovefromcart}>
          X
        </div>
      </div>
    </>
  );
};
export default BagItemContainer;
