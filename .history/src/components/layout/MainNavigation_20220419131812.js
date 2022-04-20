import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header>
      Welcome
      <div className="classes.logo"></div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/favorites" className="classes.test">
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/new-meetup">New -meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
