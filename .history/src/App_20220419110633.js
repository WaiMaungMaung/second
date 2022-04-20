import { Route } from "react-router-dom";
import NewMeetupPage from "./pages/NewMeetup";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetupsPage />
      </Route>
      <Route path="/favorites">
        <FavoritePage></FavoritePage>
      </Route>
    </div>
  );
}

export default App;