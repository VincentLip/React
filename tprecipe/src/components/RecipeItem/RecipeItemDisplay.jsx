import { useSelector } from "react-redux"


const RecipeItemDisplay = ({recipeItemId}) => {
    const recipeItem = useSelector(state => state.recipeItems.recipes)
    .find(recipe => recipe.id === recipeItemId)

    return (
        <div>
        <h3>{recipeItem}</h3>
        <hr />
        <p>{recipeItem}</p>
        </div>
    )
}

export default RecipeItemDisplay