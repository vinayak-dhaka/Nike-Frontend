import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [feedback, setFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback) return;
    toast.success("Thank you for your feedback! ");

    setFeedback("");
  };
  return (
    <footer className="py-5">
      <div className="row row-cols-1 row-cols-md-2">
        {/* Column 1 */}
        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to={"/"} className="nav-link p-0 text-body-secondary">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/bag"} className="nav-link p-0 text-body-secondary">
                <FaCartShopping /> Bag
              </Link>
            </li>

            <li className="nav-item mb-2">
              <Link to={"/orders"} className="nav-link p-0 text-body-secondary">
                <BiSolidPurchaseTag /> Orders
              </Link>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <MdGroups /> About Us
              </a>
            </li>
            <li className="nav-item mb-2">
              <Link to={"/help"} className="nav-link p-0 text-body-secondary">
                <MdOutlineSupportAgent /> Help & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col mb-3">
          <form onSubmit={handleSubmit}>
            <h5>Drop Your Feedback Here : </h5>
            <p>
              We truly value your feedback and will review it closely. We’ll
              work on improving any areas that need attention.{" "}
            </p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Write Here ...
              </label>
              <input
                id="newsletter1"
                type="input"
                className="form-control"
                placeholder="Write Here ..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="submit"
                placeholder="Write your feedback..."
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2025 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#" aria-label="Instagram">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#" aria-label="Facebook">
              <svg className="bi" width="24" height="24" aria-hidden="true">
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
