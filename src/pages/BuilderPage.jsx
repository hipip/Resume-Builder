import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const BuilderPage = () => {
  return (
    <div className="page" id="builder-page">
      <Header />
      <div id="main-content">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default BuilderPage;
