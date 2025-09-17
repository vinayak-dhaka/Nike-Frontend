import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { OrderActions } from "../store/OrderSlice";
const BagSummary = () => {
  const randomorderid = Math.floor(Math.random() * 100000);
  const dispatch = useDispatch();

  const bagitems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalitem = items.filter((item) => bagitems.includes(item.id));

  const totalMRP = finalitem.reduce((total, item) => total + item.price, 0);

  const totalDiscount = Math.round(
    finalitem.reduce((total, item) => total + item.price * 0.1, 0)
  );

  const ConvenienceFee = totalMRP !== 0 ? 99 : 0;
  const finalPayment = totalMRP - totalDiscount + ConvenienceFee;

  const handlebagorder = () => {
    const newOrder = {
      id: Date.now(),
      orderNumber: randomorderid,
      totalamount: finalPayment,
      totalitem: finalitem.length,
      items: finalitem.map((i) => i.id),
    };

    dispatch(OrderActions.addOrder(newOrder));

    toast.success(
      <div>
        <p style={{ fontWeight: "bold" }}>Order placed 🎉</p>
        <p>- Order Number: {randomorderid}</p>
        <p>- Order items: {finalitem.length}</p>
        <p>- Final Price: ₹{finalPayment}</p>
      </div>,
      { position: "top-center", autoClose: 700 }
    );

    dispatch(bagActions.clearbag());
  };

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagitems.length} Items)
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
          <span className="price-item-value">₹{ConvenienceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>

      <button
        className="btn-place-order"
        onClick={totalMRP !== 0 ? handlebagorder : () => console.log("No item")}
      >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
