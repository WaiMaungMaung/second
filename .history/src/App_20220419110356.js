import { Route } from "react-router-dom";
import NewMeetupPage from "./pages/NewMeetup";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
function App() {
  return (
    <Route>
      <AllMeetupsPage></AllMeetupsPage>
    </Route>
  );
}

export default App;
