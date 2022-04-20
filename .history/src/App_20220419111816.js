import { BrowserRouter as Router } from "react-router-dom";
import NewMeetupPage from "./pages/NewMeetup";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
function App() {
  return (
    <div>
      <Router path="/">
        <AllMeetupsPage />
      </Router>
      <Router path="/favorites">
        <FavoritePage>a</FavoritePage>
      </Router>
    </div>
  );
}

export default App;
