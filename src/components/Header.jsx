import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header className="d-flex justify-content-center py-3 position-relative">
      <ul className="nav nav-pills position-relative">
        <li className="nav-item mx-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <FaHome />
          </NavLink>
        </li>
        <li className="nav-item mx-2 position-relative">
          <NavLink
            to="/bag"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <FaCartShopping />
            {bag.length > 0 && (
              <span
                className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                style={{
                  fontSize: "0.75rem",
                  padding: "0.25em 0.4em",
                  borderRadius: "50%",
                }}
              >
                {bag.length}
              </span>
            )}
          </NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <BiSolidPurchaseTag />
          </NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <MdGroups />
          </NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <MdOutlineSupportAgent />
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
