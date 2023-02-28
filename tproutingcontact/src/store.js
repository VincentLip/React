import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./routes/Contact/ContactSlice"

const store = configureStore({
    reducer:{
        contacts: contactsSlice,
    }
})

export default store