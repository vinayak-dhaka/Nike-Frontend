import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { useSelector } from "react-redux";
const Header = () => {
  const bag = useSelector((store) => store.bag);
  console.log("bag contains", bag);
  return (
    <>
      <header className="d-flex justify-content-center py-3">
        {" "}
        <ul className="nav nav-pills">
          {" "}
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <FaHome />
            </NavLink>
          </li>{" "}
          <li className="nav-item">
            <NavLink
              to="/bag"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <FaCartShopping />

              <span
                className="bag-item-count"
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "750px",
                  color: "white",
                  backgroundColor: "rgb(255, 107, 107)",
                  borderRadius: "303%",
                  paddingTop: "1px",
                  paddingLeft: "5px",
                  fontSize: "12px",
                  height: "20px",
                  width: "17px",
                }}
              >
                {bag.length}
              </span>
            </NavLink>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link">
              <MdOutlineSupportAgent />
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link">
              <BiSolidPurchaseTag />
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link">
              <MdGroups />
            </a>
          </li>{" "}
        </ul>{" "}
      </header>
    </>
  );
};
export default Header;
