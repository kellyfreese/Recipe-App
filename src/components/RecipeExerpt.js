import React from 'react'

const RecipeExcerpt = ({recipe}) => {
    return(
        <article className="recipe-card">
            <figure>
                <img src={recipe.image_url} />
            </figure>
            <h2>{recipe.title}</h2>
            <p className='flex-spacing'>Description: {recipe.description} 
            </p>
            <button>View</button>
        </article>
    )
}

export default RecipeExcerpt