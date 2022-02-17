import { combineReducers, createStore} from 'redux';
import { allRecipesReducer } from './features/allRecipes/allRecipesSlice';
import { favoriteRecipesReducer } from './features/favoriteRecipes/favoriteRecipesSlice';
import { searchTermReducer } from './features/searchTerm/searchTermSlice';

export const store = createStore(combineReducers({
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer
    
}))