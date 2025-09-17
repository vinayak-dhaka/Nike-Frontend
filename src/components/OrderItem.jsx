import { useSelector, useDispatch } from "react-redux";
import { OrderActions } from "../store/OrderSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const OrderItem = ({ orderNumber, totalitem, totalamount, id }) => {
  const dispatch = useDispatch();
  const handleCancelclick = () => {
    dispatch(OrderActions.removeOrder(id));
    toast.success("Order Cancelled", {
      position: "top-center",
      autoClose: 500,
    });
  };
  return (
    <div className="card shadow-sm">
      <svg
        aria-label="Placeholder:Thumbnail"
        className="bd-placeholder-img card-img-top"
        height="225"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Order Number : #{orderNumber}</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="30%" y="50%" fill="#eceeef" dy=".3em">
          Order Number : #{orderNumber}
        </text>
      </svg>

      <div className="card-body">
        <p className="card-text">Order Amount : ₹{totalamount}</p>
        <p className="card-text">Order Items : {totalitem}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <Link
                to={"/view"}
                style={{ textDecoration: "none", color: "black" }}
              >
                View
              </Link>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={handleCancelclick}
              style={{ textDecoration: "none", color: "black" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
