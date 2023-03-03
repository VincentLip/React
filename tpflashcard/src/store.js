import { configureStore } from "@reduxjs/toolkit";
import flashcardSlice from "./routes/flashcard/flashcardSlice";


const store = configureStore({
  reducer: {
    flashcards: flashcardSlice
  }
})

export default store