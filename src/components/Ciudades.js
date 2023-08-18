import { useDispatch, useSelector } from "react-redux"
import { guardarCiudad, guardarIdCiudad } from "../features/ciudadSlice";
import { useEffect, useRef } from "react"

import Ciudad from "./Ciudad";

const Departamentos = () => {

    const url = "https://censo.develotion.com/";

    const dispatch = useDispatch();

    const idDep = useSelector(state => state.departamento.idDep);

    const idCiu = useRef(null);

    const ciudades = useSelector(state => state.ciudad.ciu);

    const AlmacenarId = () => {
        const id = idCiu.current.value;
        dispatch(guardarIdCiudad(id));
    }

    useEffect(() => {
        if (localStorage.getItem("apiKey") != null) {
            fetch(`${url}ciudades.php?idDepartamento=${idDep}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': localStorage.getItem("apiKey"),
                    'iduser': localStorage.getItem("id")
                }
            })
                .then(response => response.json())
                .then(data => {
                    dispatch(guardarCiudad(data.ciudades));
                })
        }
    }, [idDep])


    return (
        <div>
            <label className="form-label">Ciudad:</label>
            <select aria-label="select Ciudades" onClick={AlmacenarId} ref={idCiu} className="form-select">
                <option value="0">Seleccione una opción...</option>
                {ciudades.map(ciu => <Ciudad key={ciu.id} {...ciu} />)}
            </select>
        </div>
    )
}

export default Departamentos;