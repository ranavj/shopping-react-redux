import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteButton from "../../components/FavoriteButton";
import Recipes from "../../components/Recipes";
import { removeFavoriteRecipe, selectFilteredFavoriteRecipes } from "./favoriteRecipesSlice";
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';

export const FavoriteRecipes = () =>{
    const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
    console.log(favoriteRecipes);

    const dispatch = useDispatch();


    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeFavoriteRecipe(recipe))
    }

    return(
        <div className="recipes-container">
            {favoriteRecipes.map(createRecipeComponent)}
        </div>
    )


    function createRecipeComponent(recipe){
        return(
            <Recipes recipe={recipe} key={recipe.id}>
                <FavoriteButton onClickHandler={() => onRemoveRecipeHandler(recipe)} icon={unfavoriteIconUrl}>
                    Remove Favorite
                </FavoriteButton>
            </Recipes>
        )
    }

}