import allRecipesData from '../../data';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';

export const loadData = () => {
    return {
        type: 'allRecipes/loadData',
        payload: allRecipesData
    }
}

const initialSate = [];
export const allRecipesReducer = (allRecipes = initialSate, action) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload;
        case 'favoriteRecipes/add':
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        case 'favoriteRecipes/remove':
            return [...allRecipes, action.payload]
        default:
            return allRecipes;
    }
}

export const selectAllRecipes = (state) => {
    return state.allRecipes
}

export const selectFilteredAllRecipes = (state) => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);
  
    return allRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
