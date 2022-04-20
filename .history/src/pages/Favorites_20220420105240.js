import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <section>
      <h1>Favorites</h1>
    </section>
  );
}
export default FavoritesPage;
