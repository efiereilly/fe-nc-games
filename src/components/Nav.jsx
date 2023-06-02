import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="navBar">
        <li className="navList">
          <Link to="/">Home</Link>
        </li>
        <li className="navList" >
          <Link to="/reviews" >All Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
