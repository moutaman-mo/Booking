import { Link, Outlet } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import "./Home.css";
export default function Home() {
  return (
    <div className="main-page">
      <div className="barTop">
        <h1>Home</h1>
        <div className="berLinks">
          <Link to="/">
            <FaHouse />
          </Link>
          <Link to="/Dashboard"> / Dashboard</Link>
        </div>
      </div>
      <div className="content-page">width</div>
      <Outlet />
    </div>
  );
}
