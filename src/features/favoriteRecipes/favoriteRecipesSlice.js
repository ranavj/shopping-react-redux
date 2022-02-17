import { selectSearchTerm } from "../searchTerm/searchTermSlice"

export const addFavoriteRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/add',
        payload: recipe
    }
}

export const removeFavoriteRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/remove',
        payload: recipe
    }
}

const initailState = []
export const favoriteRecipesReducer = (favoriteRecipes = initailState, action) => {
    switch (action.type) {
        case 'favoriteRecipes/add':
            return [...favoriteRecipes, action.payload];    
        case 'favoriteRecipes/remove':
            return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id);
        default:
            return favoriteRecipes;
    }
}

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
    const favoriteRecipes = selectFavoriteRecipes(state);
    const searchTerm = selectSearchTerm(state);
  
    return favoriteRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};