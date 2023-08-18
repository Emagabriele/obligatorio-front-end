import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ciu: [],
    idCiu: 0
}

export const ciudadSlice = createSlice({
    name: "ciudad",
    initialState,
    reducers:{
        guardarCiudad: (state, action) => {
            state.ciu = action.payload
        },
        guardarIdCiudad: (state, action) => {
            state.idCiu = action.payload
        }
    }
})

export const {guardarCiudad, guardarIdCiudad} = ciudadSlice.actions

export default ciudadSlice.reducer;