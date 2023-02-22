import authSlice from "./components/auth/authSlice";
import RecipeItemSlice from "./components/RecipeItem/RecipeItemSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        recipeItems : RecipeItemSlice,
        auth : authSlice,
    }
})

export default store