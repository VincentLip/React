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


})

export default recipeItemsSlice.reducer