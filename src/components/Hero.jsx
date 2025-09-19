import "../App.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";

const Hero = () => {
  const [showToast, setShowToast] = useState(false);

  const handleImageClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const images = [
    "nike7.png",
    "nike5 Background Removed.png",
    "nike6 Background Removed 2.png",
  ];

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "500px" }}>
          {images.map((img, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div
                style={{
                  width: "100%",
                  height: "500px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "400px", // fixed width for all images
                    height: "400px", // fixed height for all images
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={img}
                    alt={`shoe-${index}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    onClick={handleImageClick}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <GrPrevious
            style={{ zIndex: 100, color: "black", fontSize: "30px" }}
          />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <GrNext style={{ zIndex: 100, color: "black", fontSize: "30px" }} />
        </button>
      </div>

      {/* Toast */}
      {showToast && (
        <div
          className="toast-container position-fixed top-0 end-0 p-3"
          style={{ zIndex: 2000 }}
        >
          <div
            className="toast show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header d-flex align-items-center">
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "blue",
                  marginRight: "0.5rem",
                  borderRadius: "2px",
                }}
              ></div>

              <strong className="me-auto">Upcoming Shoe</strong>
              <small>Just now</small>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowToast(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">This shoe is coming soon!</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
