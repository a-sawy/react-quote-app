import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo">Great Quotes</div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="quotes" end>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="new-quote">Add a Quotes</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
