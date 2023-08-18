import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cantPersMvd } from "../features/personaSlice";

const CensadosTotales = () => {

    const dispatch = useDispatch();

    const personas = useSelector(state => state.persona.pers);

    const cantPersMv = useSelector(state => state.persona.cantPersMvd);

    const totalPersonas = personas.length;

    const cantPersRest = totalPersonas - cantPersMv;

    let contador = 0;

    useEffect(() => {
        contador = 0;
        personas.forEach(per => {
            if (per.departamento === 3218) {
                contador++;
            }
        });
        dispatch(cantPersMvd(contador));
    }, [personas])

    return (
        <div>
            <h4>Total Censados:</h4>
            <p><strong>Total:</strong> {totalPersonas} - <strong>Montevideo:</strong> {cantPersMv} - <strong>Resto del país:</strong> {cantPersRest}</p>
        </div>
    )
}

export default CensadosTotales;