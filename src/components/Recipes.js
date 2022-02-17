import React from "react";

export default function Recipes({recipe, children})  {
    return (
        <div className="recipe" key={recipe.id} tabIndex={0}>
            <span className="recipe-container">
                <h3 className="recipe-name">{recipe.name}</h3>
                <div className="image-container">
                    <img src={recipe.img} alt="" className="recipe-image" />
                </div>
            </span>
            {children}
        </div>
    )
}