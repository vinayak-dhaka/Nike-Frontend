import { Outlet } from "react-router-dom";
import CardItem from "./components/CardItem";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Footer from "./components/Footer";
import FetchData from "./components/FetchData";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const fetchstatus = useSelector((store) => store.fetchstatus);
  return (
    <>
      <Header />
      <FetchData />
      {fetchstatus.fetchingdone ? <Outlet /> : <LoadingSpinner />}

      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
