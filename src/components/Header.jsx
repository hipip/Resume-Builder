import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/" className="logo header-link">
          RESUME BUILDER
        </Link>
      </div>
      <div className="header-col-two">
        <Link to="/about" className="header-link">
          About
        </Link>
        <Link to="/builder" className="build-my-resume-btn header-link">
          Build my resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
