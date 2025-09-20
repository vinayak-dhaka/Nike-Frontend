import BagSummary from "./BagSummary";
import "../App.css";
import BagItemContainer from "./BagItemContainer";
import { useSelector } from "react-redux";
const Bag = () => {
  const bagitems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalitem = items.filter((item) => {
    const itemindex = bagitems.indexOf(item.id);
    return itemindex >= 0;
  });
  return (
    <>
      <main>
        <div
          className="bag-page container"
          style={{
            marginBottom: "200px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "5rem",
          }}
        >
          <div style={{ maxWidth: "100%" }}>
            {finalitem.length == 0 ? (
              <p
                style={{
                  fontSize: "37px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  alignContent: "center",
                  alignItems: "center",
                  marginLeft: "100px",
                  marginTop: "100px",
                }}
              >
                Bag is Empty 🫩{" "}
              </p>
            ) : (
              finalitem.map((item) => <BagItemContainer item={item} />)
            )}
          </div>

          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
