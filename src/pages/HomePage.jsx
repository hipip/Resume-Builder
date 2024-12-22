import { Link } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="hero section">
        <div className="hero-text-area">
          <h1 className="section-title">
            The Only Resume Generator You will ever need
          </h1>
          <Link to="/generator" id="main-call-to-action">
            Start Generating
          </Link>
        </div>
      </section>
      <section className="section-two section">
        <div className="section-title">
          Choose from a Curated Collection of
          <span id="special-span"> Premium </span> Templates
        </div>
      </section>
    </div>
  );
};

export default HomePage;
