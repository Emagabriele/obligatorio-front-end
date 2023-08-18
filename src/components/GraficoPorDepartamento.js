import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { guardarPersonasDepto, resetearArrayDepto } from "../features/analisisSlice";

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

const GraficoPorDepartamento = () => {

    const departamentos = useSelector(state => state.departamento.deps);

    const personas = useSelector(state => state.persona.pers);

    const personasPorDepto = useSelector(state => state.analisis.cantPersonasDepto);

    const dispatch = useDispatch();

    let contador = 0;

    useEffect(() => {
        dispatch(resetearArrayDepto());
        departamentos.forEach(dep => {
            contador = 0;
            personas.forEach(pers => {
                if (dep.id === pers.departamento) {
                    contador++;
                }
            })
            dispatch(guardarPersonasDepto({ nombreDep: dep.nombre, cant: contador }));
        })
    }, [personas])

    return (
        <div>
            <h2>Personas por departamento</h2>

            <Bar options={options} data={{
                labels: personasPorDepto.filter(per => per.cant).map(per => per.nombreDep),
                datasets: [
                    {
                        label: 'Cantidad Personas',
                        data: personasPorDepto.filter(per => per.cant).map(per => per.cant),
                        backgroundColor: '#6c6d99',
                    }
                ],
            }} />

        </div>
    )
}

export default GraficoPorDepartamento;