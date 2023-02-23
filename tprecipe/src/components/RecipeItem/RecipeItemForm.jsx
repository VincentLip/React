import { useRef } from "react"

const RecipeItemForm = (props) => {
    const mode = props.mode
    const recipe = props.recipe
    const titleRef = useRef()
    const instructionRef = useRef()
    const ingredientRef = useRef()
    const timeprepRef = useRef()
    const cooktimeRef = useRef()

const submitFormHandler = (event) => {

    event.preventDefault()

    if (mode === 'delete') {
        props.onDelete(recipe.id)
    } else {

    const options = ingredientRef.current.options
    const title = titleRef.current.value
    const instruction = instructionRef.current.value
    const ingredient = []
    const timeprep = timeprepRef.current.value
    const cooktime = cooktimeRef.current.value

    for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
            ingredient.push(options[i].value);
        }
    }

    const newRecipesValues = {
        title,
        instruction,
        ingredient,
        timeprep,
        cooktime
    }

    titleRef.current.value = ""
    instructionRef.current.value = ""
    ingredientRef.current.value = ""
    timeprepRef.current.value = ""
    cooktimeRef.current.value = ""

    if (mode === 'add') {
        props.onAdd(newRecipesValues)
    } else if (mode === 'edit') {
        props.onEdit({...newRecipesValues, id: recipe.id})
    }
    }
}


return (
    <form onSubmit={submitFormHandler}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Titre :</label>
            <input type="text" className="form-control" ref={titleRef} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={recipe?.title} />
        </div>
        <div className="mb-3">
            <label htmlFor="instruction" className="form-label">Instruction :</label>
            <textarea className="w-100" name="" id="" cols="30" rows="8" ref={instructionRef} defaultValue={recipe?.instruction} ></textarea>
        </div>
        <div className="mb-3">
            <label htmlFor="ingredient" className="form-label">Ingredient:</label>
            <select className="form-select" multiple aria-label="multiple select example" ref={ingredientRef}>
                <option value="1">sugar</option>
                <option value="2">oil</option>
                <option value="3">pepper</option>
                <option value="4">salt</option>
                <option value="5">water</option>
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="timeprep" className="form-label">Temps de préparations:</label>
            <input type="number" className="form-control" ref={timeprepRef} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={recipe?.timeprep} />
        </div>
        <div className="mb-3">
            <label htmlFor="cooktime" className="form-label">Temps de cuisson:</label>
            <input type="number" className="form-control" ref={cooktimeRef} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={recipe?.cooktime} />
        </div>
        <div className="text-end">
            <button className={`btn btn-${mode === 'delete' ? 'danger' : mode === 'edit' ? 'warning' : 'success'}`}>{mode === 'delete' ? 'Confirmer' : mode === 'edit' ? 'Editer' : 'Ajouter'}</button>
        </div>
    </form>
    )
}

export default RecipeItemForm