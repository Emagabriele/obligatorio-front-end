import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ocups: [],
    ocupsFiltro: [],
    idOcu: 0,
    fechaNac: ""
}

export const ocupacionSlice = createSlice({
    name: "ocupacion",
    initialState,
    reducers:{
        guardarOcupacion: (state, action) => {
            state.ocups = action.payload;
        },
        guardarOcupacionFiltro: (state, action) => {
            state.ocupsFiltro = action.payload;
        },
        vaciarOcupacionFiltro: (state, action) => {
            state.ocupsFiltro = [];
        },
        guardarIdOcupacion: (state, action) => {
            state.idOcu = action.payload;
        },
        guardarFecha: (state, action) => {
            state.fechaNac = action.payload;
        }

    }
})

export const {guardarOcupacion, guardarOcupacionFiltro, vaciarOcupacionFiltro, guardarIdOcupacion, guardarFecha} = ocupacionSlice.actions

export default ocupacionSlice.reducer;