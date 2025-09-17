import { Link } from "react-router-dom";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((store) => store.order);

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Orders Overview</h1>
            <p className="lead text-body-secondary">
              Welcome to your Orders page! Here, you can track all your
              purchases, review order details, and manage returns. We value
              transparency and convenience—check out our policies, return
              options, and pricing details to make your shopping experience
              smooth and hassle-free.
            </p>
            <p>
              <Link
                to={"/"}
                className="btn btn-primary my-2"
                style={{ margin: "10px" }}
              >
                Back to Home
              </Link>
              <Link to={"/bag"} className="btn btn-secondary my-2">
                Back to Bag
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {orders.length === 0 ? (
              <p
                style={{
                  fontSize: "37px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  alignContent: "center",
                  alignItems: "center",
                  marginLeft: "450px",
                  marginTop: "100px",
                  marginBottom: "100px",
                }}
              >
                No orders placed yet.
              </p>
            ) : (
              orders.map((order) => (
                <div key={order.orderNumber} className="col">
                  <OrderItem
                    orderNumber={order.orderNumber}
                    totalitem={order.totalitem}
                    totalamount={order.totalamount}
                    id={order.id}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Orders;
