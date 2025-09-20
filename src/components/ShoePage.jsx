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
    toast.success("Added to Bag 🛒", {
      position: "top-center",
      autoClose: 500,
    });
  };

  const handleremovefromcart = () => {
    dispatch(bagActions.removeFromBag(Number(id)));
    toast.error("Removed from Bag 🛒", {
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
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="img-fluid">
            <img
              src={shoe.image}
              alt={shoe.item_name}
              className="img-fluid"
              style={{
                maxHeight: "300px",
                marginBottom: "60px",
                marginTop: "30px",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">{shoe.item_name}</h1>
          <p className="text-gray-600 text-sm md:text-base">
            {shoe.description}
          </p>
          <p
            className="text-xl md:text-2xl font-semibold text-green-600"
            style={{ marginBottom: "30px" }}
          >
            ₹ {shoe.price}
          </p>

          {elementfound ? (
            <button
              type="button"
              className="btn btn-danger w-full sm:w-72 flex items-center justify-center gap-2"
              onClick={handleremovefromcart}
              style={{ marginBottom: "200px" }}
            >
              <MdDelete /> Remove
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary w-full sm:w-72 flex items-center justify-center gap-2"
              onClick={handleaddtocart}
              style={{ marginBottom: "200px" }}
            >
              <IoIosAddCircle /> Add to Bag
            </button>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ShoePage;
