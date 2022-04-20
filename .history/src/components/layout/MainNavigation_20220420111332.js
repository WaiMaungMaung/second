import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header>
      Welcome
      <div className={classes.logo}></div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/favorites" className={classes.test}>
              Favorites
              <span className="classes.badge">
                {favoritesCtx.totalFavorites}
              </span>
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
