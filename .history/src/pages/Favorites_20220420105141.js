import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  return <div>Favorites Page</div>;
}
export default FavoritesPage;
