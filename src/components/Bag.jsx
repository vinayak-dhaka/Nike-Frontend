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
        <div className="bag-page">
          <div className="bag-items-container">
            {finalitem.map((item) => (
              <BagItemContainer item={item} />
            ))}
          </div>

          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
