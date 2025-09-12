import "../App.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const Hero = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner" style={{ maxHeight: "500px" }}>
          <div class="carousel-item active " style={{ maxHeight: "500px" }}>
            <img
              src="nike7.png"
              style={{
                width: "32%",
                marginLeft: "510px",
                marginTop: "171px",
                marginBottom: "78px",
              }}
              class="d-block "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="nike5 Background Removed.png"
              class="d-block "
              style={{
                width: "39%",
                marginLeft: "500px",
                marginTop: "-125px",
              }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="nike6 Background Removed 2.png"
              class="d-block "
              style={{
                width: "36%",
                marginLeft: "500px",
                marginTop: "-85px",
              }}
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <GrPrevious
            style={{ zIndex: 100, color: "black", fontSize: "30px" }}
          />
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <GrNext style={{ zIndex: 100, color: "black", fontSize: "30px" }} />
        </button>
      </div>
    </>
  );
};
export default Hero;
