import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagitems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalitem = items.filter((item) => {
    const itemindex = bagitems.indexOf(item.id);
    return itemindex >= 0;
  });

  const totalMRP = finalitem.reduce((total, item) => total + item.price, 0);

  const totalDiscount = Math.round(
    finalitem.reduce((total, item) => total + item.price * 0.1, 0)
  );

  const finalPayment = totalMRP - totalDiscount + 99;
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagitems.length} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            ₹ {totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
