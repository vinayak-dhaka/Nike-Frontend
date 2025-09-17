import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">About Me</h1>
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-4">
            Hi, i am <strong>Vinayak</strong> , an Information Science
            Engineering (ISE) student at
            <strong> REVA University</strong>. This Shoe Store project is part
            of my learning journey, where i explored full-stack development and
            applied the technologies i’ve been practicing.
          </p>
          <p className="lead mb-4">
            The project is a fully functional e-commerce application where
            customers can browse products, add them to their cart, place orders,
            and manage them with ease. It reflects my passion for building
            real-world applications.
          </p>

          <h2 className="fw-bold text-body-emphasis mb-3">Tech Stack</h2>
          <ul className="list-unstyled lead mb-4">
            <li>Frontend: ReactJS with Redux for state management</li>
            <li> Styling: Bootstrap for responsive and modern UI</li>
            <li> Backend: Spring Boot (handling /products API)</li>
            <li> Data: Mock/hosted product data served from backend</li>
          </ul>

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link to={"/"}>
              {" "}
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-sm-3"
              >
                Explore Store
              </button>
            </Link>
            <a
              href="https://github.com/vinayak-dhaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Contact Me
              </button>
            </a>
          </div>
        </div>

        <div className="overflow-hidden" style={{ maxHeight: "40vh" }}>
          <div className="container px-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/599/599502.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Shoe Store Project"
              width="500"
              height="350"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
