import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
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
  );
};

export default Footer;
