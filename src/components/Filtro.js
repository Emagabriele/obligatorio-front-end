import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { idFiltroPersona } from "../features/personaSlice";

import Ocupacion from "./Ocupacion";

const Filtro = () => {

    const ocupaciones = useSelector(state => state.ocupacion.ocups);

    const idOcu = useRef(null);

    const dispatch = useDispatch();

    const guardarIdOcu = () => {
        const numIdOcu = Number(idOcu.current.value);
        dispatch(idFiltroPersona(numIdOcu));
    }

    return (
        <div id="filtroOcup">
            <select aria-label="select ocupacion" onChange={guardarIdOcu} ref={idOcu}>
                <option value="0">Filtrar por ocupación...</option>
                {ocupaciones.map(ocu => <Ocupacion key={ocu.id} {...ocu} />)}
            </select>
        </div>
    )
}

export default Filtro;