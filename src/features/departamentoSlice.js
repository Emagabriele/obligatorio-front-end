import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deps: [],
    idDep: 0
}

export const departamentoSlice = createSlice({
    name: "departamento",
    initialState,
    reducers:{
        guardarDepartamento: (state, action) => {
            state.deps = action.payload
        },
        guardadIdDepartamento: (state, action) => {
            state.idDep = action.payload
        }
    }
})

export const {guardarDepartamento, guardadIdDepartamento} = departamentoSlice.actions

export default departamentoSlice.reducer;