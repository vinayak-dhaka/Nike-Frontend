import { IoIosAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CardItem = ({ title, text, image, id }) => {
  const bagitems = useSelector((store) => store.bag);
  const elementfound = bagitems.indexOf(id) >= 0;
  console.log("find", elementfound);
  const dispatch = useDispatch();
  const handleaddtocart = () => {
    dispatch(bagActions.addToBag(id));
    toast.success("Added to Bag  🛒", {
      position: "top-center",
      autoClose: 500,
    });
  };
  const handleremovefromcart = () => {
    dispatch(bagActions.removeFromBag(id));
    toast.error("Removed from Bag  🛒 ", {
      position: "top-center",
      autoClose: 500,
    });
  };
  return (
    <>
      <div
        style={{
          padding: "10px",
          width: "18rem",
          margin: "5rem",
          marginLeft: "6rem",
          marginTop: "7rem",
          height: "content-fit",
        }}
      >
        <img
          src={image}
          class="card-img-top"
          alt="travel-booking"
          style={{ marginBottom: "2.5rem" }}
        />
        <div class="card-body">
          <h5 class="card-title" style={{ marginBottom: "1rem" }}>
            {title}
          </h5>
          <p class="card-text">{text}</p>
          {elementfound ? (
            <button
              type="button"
              class="btn btn-danger"
              style={{ width: "18rem" }}
              onClick={handleremovefromcart}
            >
              <MdDelete /> Remove
            </button>
          ) : (
            <button
              href="#"
              class="btn btn-primary"
              style={{ width: "18rem" }}
              onClick={handleaddtocart}
            >
              <IoIosAddCircle /> Add to Bag
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default CardItem;
