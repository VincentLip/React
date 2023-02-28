import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    },
reducers: {
    addContactAction(state, action) {
        state.contacts.push(action.payload)
    },
    setContactAction(state, action) {
        state.contacts = action.payload
    },
    editContactAction(state, action) {
        const {id} = action.payload
        const contactFound = state.contacts.find(r => r.id === id)
        if (contactFound) {
        state.contacts = [...state.contacts.filter(r => r.id !== id), action.payload]
        }
    },
    deleteRecipeAction(state, action) {
        const id = action.payload
        const contactFound = state.contacts.find(r => r.id === id)
        if (contactFound) {
        state.contacts = state.contacts.filter(r => r.id !== id)
        }
    },
    }
})

export const { addContactAction, setContactAction, editContactAction, deleteRecipeAction } = contactsSlice.actions

export default contactsSlice.reducer