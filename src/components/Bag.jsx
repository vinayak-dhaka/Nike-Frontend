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
        <div className="bag-page " style={{ marginBottom: "200px" }}>
          <div className="bag-items-container">
            {finalitem.length == 0 ? (
              <p
                style={{
                  fontSize: "37px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  alignContent: "center",
                  alignItems: "center",
                  marginLeft: "140px",
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
