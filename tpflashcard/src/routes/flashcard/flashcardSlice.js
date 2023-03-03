import { createSlice } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
  name: "flashcards",
  initialState: {
    flashcards: [
        {
            question : "Question n1",
            answer : "answer n1"
        },
        {
            question : "Question n2",
            answer : "answer n2"
        }
         
    ],
    isLoading: false,
    error: null,

  },
  reducers: {
    addFlashcardAction(state, action) {
        state.flashcards.push(action.payload)
    },

  }
})

export const { addFlashcardAction } = flashcardsSlice.actions

export default flashcardsSlice.reducer