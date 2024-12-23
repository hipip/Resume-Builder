import {
  faBriefcase,
  faDownload,
  faGraduationCap,
  faLaptopCode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/builder/contact-info"
      >
        <FontAwesomeIcon icon={faUser} />
        Contact Info
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/builder/education"
      >
        <FontAwesomeIcon icon={faGraduationCap} />
        Education
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/builder/experience"
      >
        <FontAwesomeIcon icon={faBriefcase} />
        Experience
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/builder/skills"
      >
        <FontAwesomeIcon icon={faLaptopCode} />
        Skills
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/builder/download"
      >
        <FontAwesomeIcon icon={faDownload} />
        Download
      </NavLink>
    </div>
  );
};

export default NavBar;
