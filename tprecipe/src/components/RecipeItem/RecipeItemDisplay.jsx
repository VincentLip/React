


const RecipeItemDisplay = (props) => {
    
    const recipe = props.recipe

    const deleteRecipe = (event) => {

        props.deleteRecipeItem(event)
    }

    const editRecipe = (event) =>  {

        props.editRecipeItem(event)
    }
    

    return (
        <div className="border border-info rounded p-3 my-2">
            <div className="container">
                <div className="">
                    <h4>{recipe.title}</h4>
                        <span>Preparation Time : {recipe.timeprep}</span>
                        <span>Cooking Time : {recipe.cooktime}</span>
                    <hr />
                </div>
                <div className="row ">
                    <div className="col-4">
                        <span>Ingrédients</span>
                        <ul>
                            <li>{recipe.ingredient}</li>
                        </ul>
                    </div>
                    <div className="col-8 ">
                        <span>Instructions</span>
                        <p>{recipe.instruction}</p>
                    </div>
                </div>
            </div>
                <button className="btn btn-outline-danger" onClick={()=> deleteRecipe(recipe.id)}>Delete</button>
                <button className="btn btn-outline-warning" onClick={()=> editRecipe(recipe.id,...recipe)}>Edit</button>
        </div>
    )
}

export default RecipeItemDisplay