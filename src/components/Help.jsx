import { MdOutlineSupportAgent } from "react-icons/md";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Help = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Help request submitted:", formData);
    toast.success("Request Submitted", {
      position: "top-center",
      autoClose: 500,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="d-flex align-items-center py-5 bg-body-tertiary">
        <main
          className="form-support w-100 m-auto"
          style={{ maxWidth: "600px" }}
        >
          <div className="text-center mb-4">
            <MdOutlineSupportAgent size={70} color="blue" />
            <h1 className="h3 mb-3 fw-normal">Need Help? Contact Support</h1>
            <p className="text-muted">
              Fill in your details and describe your issue. Our team will get
              back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingName">Your Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                id="floatingMessage"
                placeholder="Describe your issue"
                name="message"
                style={{ height: "120px" }}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingMessage">Your Message</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">
              Submit Request
            </button>

            <p
              className="mt-5 mb-3 text-body-secondary text-center"
              style={{ paddingBottom: "80px" }}
            >
              © 2025 Shoe Store By Vinayak Dhaka
            </p>
          </form>
        </main>
      </div>
    </>
  );
};

export default Help;
