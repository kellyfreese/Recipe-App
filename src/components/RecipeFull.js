import React from 'react'

const RecipeFull = ({selectedRecipe}) => {
    return(
        <div className='recipe-details'>
            <article>
                <header>
                    <figure>
                        <img alt={selectedRecipe.title} src={selectedRecipe.image_url}  />
                    </figure>
                    <h2>{selectedRecipe.title}</h2>
                    <div className='button-container'>
                        <button className='edit-button'>Edit</button>
                        <button className='cancel-button'>Close</button>
                    </div>
                </header>
               
                <h3>Description:</h3>
                <p>{selectedRecipe.description}</p>
               
                <h3>Ingredients:</h3>
                <ul className='ingredients-list'>
                    {selectedRecipe.ingredients.split(",").map((ingredient, index) =>(
                    <li key={index} className="ingredient">
                        {ingredient}
                        </li>  
                    ))}
                </ul>
                
                <h3>Instructions:</h3>

                <pre className='formatted-text'>{selectedRecipe.instructions}</pre>

                <h3>Servings: {selectedRecipe.servings}</h3>

            </article>
        </div>
    )
}

export default RecipeFull