import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cantPersonasDepto: [],
    cantPersonasOcups: []
}

export const analisisSlice = createSlice({
    name: "analisis",
    initialState,
    reducers:{
        guardarPersonasDepto: (state, action) => {
            state.cantPersonasDepto.push(action.payload);
        },
        guardarPersonasOcups: (state, action) => {
            state.cantPersonasOcups.push(action.payload);
        },
        resetearArrayDepto: (state) => {
            state.cantPersonasDepto = [];
        },
        resetearArrayOcup: (state) => {
            state.cantPersonasOcups = [];
        }
    }
})

export const {guardarPersonasDepto, guardarPersonasOcups, resetearArrayDepto, resetearArrayOcup} = analisisSlice.actions

export default analisisSlice.reducer;