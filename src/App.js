import logo from './logo.svg';
import './App.css';
import { SearchTerm } from './features/searchTerm/searchTerm';
import { FavoriteRecipes } from './features/favoriteRecipes/FavoriteRecipes';
import { AllRecipes } from './features/allRecipes/AllRecipes';

function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes />
      </section>
        <hr/>
      <section>
        <h2>All Recipes</h2>
        <AllRecipes />
      </section>
    </main>
    );
}

export default App;
