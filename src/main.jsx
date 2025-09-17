import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feature from "./components/Feature.jsx";
import Home from "./components/Home.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Bag from "./components/Bag.jsx";
import Help from "./components/Help.jsx";
import Orders from "./components/Orders.jsx";
import About from "./components/About.jsx";
import OrderDetail from "./components/Orderdetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/bag", element: <Bag /> },
      { path: "/help", element: <Help /> },
      { path: "/orders", element: <Orders /> },
      { path: "/about", element: <About /> },
      { path: "/view", element: <OrderDetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
