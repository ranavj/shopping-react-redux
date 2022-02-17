import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData, selectAllRecipes, selectFilteredAllRecipes } from "./allRecipesSlice";
import { addFavoriteRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
import Recipes  from "../../components/Recipes";
import FavoriteButton from "../../components/FavoriteButton";
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllRecipes = () => {

    const allRecipes = useSelector(selectFilteredAllRecipes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadData());
    }, []);

    const onAddRecipeHandler = (recipe) => {
        dispatch(addFavoriteRecipe(recipe))
    }
    return(
        <div className="recipes-container">
            {
                allRecipes.map((recipe) => (
                    <Recipes recipe={recipe} key={recipe.id}>
                        <FavoriteButton onClickHandler={() => onAddRecipeHandler(recipe)} icon={favoriteIconURL}>
                            Add to favorite
                        </FavoriteButton>
                    </Recipes>
                ))
            }
            
        </div>
    )
}