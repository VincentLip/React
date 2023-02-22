import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

    name: "auth",
    initialState: {
        user: null,
        authMode: ""
    },
     

})

export default authSlice.reducer