import { createSlice } from "@reduxjs/toolkit";

const recipeItemsSlice = createSlice({

    name: "recipeItems",
    initialState: {
        formMode: "",
        recipes: [],
        selectedRecipe: null,
        ingredients: [],
        isLoading: false,
        error: null,
    },
    reducers: {

        addRecipeItem(state, action) { 
            state.recipes.push(action.payload)
        },
        setRecipeItem(state, action) {
            state.recipes = action.payload
        },
        removeRecipeItem(state, action) {
            state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload)
        },
        editRecipeAction(state, action) {
            const recipeToEdit = state.recipes.find(recipe => recipe.id === action.payload.id)
            if (recipeToEdit) {
                state.recipes = [...state.recipes.filter(recipe => recipe.id !== action.payload.id), action.payload]
            }
        },

    }
})

export const {addRecipeItem,setRecipeItem,removeRecipeItem,editRecipeAction} = recipeItemsSlice.actions

export default recipeItemsSlice.reducer