import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
