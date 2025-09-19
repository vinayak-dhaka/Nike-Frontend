import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { bagActions } from "../store/bagSlice";
import { IoIosAddCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";

const ShoePage = () => {
  const { id } = useParams();
  const bagitems = useSelector((store) => store.bag);

  const elementfound = bagitems.indexOf(Number(id)) >= 0;
  const store = useSelector((store) => store.items);
  const dispatch = useDispatch();

  const shoe = store.find((item) => item.id === Number(id));

  const handleaddtocart = () => {
    dispatch(bagActions.addToBag(Number(id)));
    toast.success("Added to Bag  🛒", {
      position: "top-center",
      autoClose: 500,
    });
  };
  const handleremovefromcart = () => {
    dispatch(bagActions.removeFromBag(Number(id)));
    toast.error("Removed from Bag  🛒 ", {
      position: "top-center",
      autoClose: 500,
    });
  };
  if (!shoe) {
    return (
      <div className="text-center text-gray-500 mt-10">
        Shoe not found or still loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl ">
      <div
        style={{
          display: "flex",
          gap: "25rem",
          marginTop: "140px",
          marginBottom: "150px",
        }}
      >
        <div>
          <img
            src={shoe.image}
            alt={shoe.item_name}
            className="object-contain"
            style={{
              padding: "10px",
              width: "25rem",
              margin: "5rem",
              marginLeft: "10rem",
              marginTop: "7rem",
              height: "content-fit",
            }}
          />
        </div>

        <div
          className="flex flex-col space-y-4"
          style={{ marginBottom: "5px" }}
        >
          <h1 className="text-2xl font-bold" style={{ marginBottom: "1rem" }}>
            {shoe.item_name}
          </h1>
          <p className="text-gray-600">{shoe.description}</p>
          <p
            className="text-xl font-semibold text-green-600"
            style={{ marginBottom: "2rem" }}
          >
            ₹ {shoe.price}
          </p>

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
    </div>
  );
};

export default ShoePage;
