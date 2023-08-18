import { useDispatch, useSelector } from "react-redux"
import { guardarOcupacion, guardarIdOcupacion, guardarOcupacionFiltro, vaciarOcupacionFiltro } from "../features/ocupacionSlice";
import { useEffect, useRef } from "react"
import Ocupacion from "./Ocupacion";

const Ocupaciones = () => {

    const url = "https://censo.develotion.com/";

    const dispatch = useDispatch();

    const idOcu = useRef(null);

    const ocupaciones = useSelector(state => state.ocupacion.ocups);

    const ocupsFiltro = useSelector(state => state.ocupacion.ocupsFiltro);

    const fecha = useSelector(state => state.ocupacion.fechaNac);

    const edad = new Date().getFullYear() - new Date(fecha).getFullYear();

    const AlmacenarId = () => {
        const id = Number(idOcu.current.value);
        dispatch(guardarIdOcupacion(id));
    }

    useEffect(() => {
        if (localStorage.getItem("apiKey") != null) {
            fetch(`${url}ocupaciones.php`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': localStorage.getItem("apiKey"),
                    'iduser': localStorage.getItem("id")
                }
            })
                .then(response => response.json())
                .then(data => {
                    dispatch(guardarOcupacion(data.ocupaciones));
                    dispatch(guardarOcupacionFiltro(data.ocupaciones))
                })
        }
    }, [])

    useEffect(() => {
        if (edad < 18) {
            dispatch(vaciarOcupacionFiltro());
            dispatch(guardarOcupacionFiltro(ocupaciones.filter(ocu => ocu.ocupacion === "Estudiante")));
        } else {
            dispatch(vaciarOcupacionFiltro());
            dispatch(guardarOcupacionFiltro(ocupaciones));
        }
    }, [edad])

    return (
        <div>
            <label className="form-label">Ocupacion:</label>
            <select aria-label="select Ocupaciones" onClick={AlmacenarId} ref={idOcu} className="form-select">
                <option value="0">Seleccione una opción...</option>
                {ocupsFiltro.map(ocups => <Ocupacion key={ocups.id} {...ocups} />)}
            </select>
        </div>
    )
}

export default Ocupaciones