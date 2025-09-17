import { useSelector } from "react-redux";
import Orderdetailitem from "./Orderdetailitem";

const OrderDetail = () => {
  const bagitems = useSelector((store) => store.order);
  const items = useSelector((store) => store.items);

  const allOrderItemIds = bagitems.flatMap((order) => order.items || []);

  const finalitems = items.filter((item) => allOrderItemIds.includes(item.id));

  return (
    <div>
      <h3>Your Order Details</h3>
      <div>
        {finalitems.length > 0 ? (
          finalitems.map((item) => (
            <Orderdetailitem key={item.id} item={item} />
          ))
        ) : (
          <p>No items found in this order.</p>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
