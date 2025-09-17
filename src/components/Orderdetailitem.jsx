const Orderdetailitem = ({ item }) => {
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="item-image" src={item.image} alt={item.item_name} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>

        <div className="return-period">
          <span className="return-period-days">5 days</span> return available
        </div>
      </div>
    </div>
  );
};

export default Orderdetailitem;
