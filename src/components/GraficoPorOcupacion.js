import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from 'react-chartjs-2';
import { guardarPersonasOcups, resetearArrayOcup } from "../features/analisisSlice";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        }
    },
};

const GraficoPorOcupacion = () => {

    const ocupaciones = useSelector(state => state.ocupacion.ocups);

    const personas = useSelector(state => state.persona.pers);

    const personasPorOcups = useSelector(state => state.analisis.cantPersonasOcups);

    const dispatch = useDispatch();

    let contador;

    useEffect(() => {
        dispatch(resetearArrayOcup());
        ocupaciones.forEach(ocu => {
            contador = 0;
            personas.forEach(pers => {
                if (ocu.id === pers.ocupacion) {
                    contador++;
                }
            })
            dispatch(guardarPersonasOcups(contador));
        })
    }, [personas])

    return (
        <div>
            <h2>Personas por ocupación</h2>

            <Bar options={options} data={{
                labels: ocupaciones.map(ocup => ocup.ocupacion),
                datasets: [
                    {
                        label: 'Cantidad Personas',
                        data: personasPorOcups,
                        backgroundColor: '#668341',
                    }
                ],
            }} />

        </div>
    )
}

export default GraficoPorOcupacion;