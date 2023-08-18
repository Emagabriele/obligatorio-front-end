import { configureStore } from "@reduxjs/toolkit";
import departamentoReducer from "../features/departamentoSlice"
import ocupacionReducer from "../features/ocupacionSlice"
import personaReducer from "../features/personaSlice"
import ciudadReducer from "../features/ciudadSlice"
import analisisReducer from "../features/analisisSlice"

export const store = configureStore({
    reducer:{
        departamento:departamentoReducer,
        ocupacion:ocupacionReducer,
        persona:personaReducer,
        ciudad:ciudadReducer,
        analisis:analisisReducer
    }
});