import { useDispatch, useSelector } from "react-redux"
import { guardarDepartamento, guardadIdDepartamento } from "../features/departamentoSlice";
import { useEffect, useRef } from "react"

import Departamento from "./Departamento";

const Departamentos = () => {

    const url = "https://censo.develotion.com/";

    const dispatch = useDispatch();

    const idDep = useRef(null);

    const departamentos = useSelector(state => state.departamento.deps);

    const AlmacenarId = () => {
        const id = idDep.current.value;
        dispatch(guardadIdDepartamento(id));
    }

    useEffect(() => {
        if (localStorage.getItem("apiKey") != null) {
            fetch(`${url}departamentos.php`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': localStorage.getItem("apiKey"),
                    'iduser': localStorage.getItem("id")
                }
            })
                .then(response => response.json())
                .then(data => {
                    dispatch(guardarDepartamento(data.departamentos));
                })
        }
    }, [])


    return (
        <div>
            <label className="form-label">Departamento:</label>
            <select aria-label="select Departamentos" onClick={AlmacenarId} ref={idDep} className="form-select">
                <option value="0">Seleccione una opción...</option>
                {departamentos.map(deps => <Departamento key={deps.id} {...deps} />)}
            </select>
        </div>
    )
}

export default Departamentos;