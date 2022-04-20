import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/new-meetup">New -meetup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default MainNavigation;
