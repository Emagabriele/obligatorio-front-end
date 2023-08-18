import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pers: [],
    persFiltradas: [],
    cantPersMvd: 0,
    idFiltroPersona: 0
}

export const personaSlice = createSlice({
    name: "persona",
    initialState,
    reducers:{
        guardarPersona: (state, action) => {
            state.pers = action.payload
        },
        guardarPersonaFiltradas: (state, action) => {
            state.persFiltradas = action.payload
        },
        agregarPersona: (state, action) => {
            state.persFiltradas.push(action.payload);
            state.pers.push(action.payload);
        },
        eliminarPersona: (state, action) => {
            state.pers.splice(action.payload, 1);
        },
        eliminarPersonaFiltrada: (state, action) => {
            state.persFiltradas.splice(action.payload, 1);
        },
        cantPersMvd: (state, action) => {
            state.cantPersMvd = action.payload;
        },
        idFiltroPersona: (state, action) => {
            state.idFiltroPersona = action.payload;
        }
    }
})

export const {guardarPersona, guardarPersonaFiltradas, agregarPersona, eliminarPersona, eliminarPersonaFiltrada, cantPersMvd, idFiltroPersona} = personaSlice.actions

export default personaSlice.reducer;