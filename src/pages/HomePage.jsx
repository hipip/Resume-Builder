import { Link } from "react-router-dom";
import Header from "../components/Header";
import HomePageImgCard from "../components/HomePageImgCard";
import elegant from "../assets/elegant.png";
import professional from "../assets/professional.png";
import standout from "../assets/standout.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  const [isImgOpen, setIsImgOpen] = useState(false);
  const [fullscreenImg, setFullScreenImg] = useState(null);

  const openFullScreen = (img) => {
    setIsImgOpen(true);
    setFullScreenImg(img);
  };

  return (
    <div className="home-page">
      <Header />
      <section className="hero section">
        <div className="hero-text-area">
          <h1 className="section-title">
            The Only <em>FREE</em> Resume Builder You will ever need
          </h1>
          <Link to="/builder" id="main-call-to-action">
            Start Building
          </Link>
        </div>
      </section>
      <section className="section-two section">
        <div className="section-title">
          Choose from a Curated Collection of
          <span id="special-span"> Premium </span> Templates
        </div>
        <div className="section-two-images">
          <HomePageImgCard
            text="Elegant Theme"
            img={elegant}
            onClick={openFullScreen}
          />
          <HomePageImgCard
            text="Professional Theme"
            img={professional}
            onClick={openFullScreen}
          />
          <HomePageImgCard
            text="Standout Theme"
            img={standout}
            onClick={openFullScreen}
          />
        </div>
      </section>

      <section className="section section-three">
        <h2>If you liked this project please hire me !</h2>
      </section>

      <footer className="footer">
        <div className="logo">RESUME BUILDER</div>
        <div className="footer-links">
          <a className="footer-link" href="https://github.com/hipip">
            <FontAwesomeIcon icon={faGithub} />
            hipip
          </a>
          <div className="footer-link">
            <FontAwesomeIcon icon={faPhone} />
            +213558642150
          </div>

          <div className="footer-link">
            <FontAwesomeIcon icon={faLocationDot} />
            18000, Jijel, Jijel, Jijel, Algeria
          </div>
        </div>
      </footer>

      {isImgOpen && (
        <div className="fullscreen-img-wrapper">
          <img src={fullscreenImg} />
          <button
            id="close-fullscreen-img-btn"
            onClick={() => {
              setIsImgOpen(false);
              setFullScreenImg(null);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
