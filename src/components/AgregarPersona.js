import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarPersona } from "../features/personaSlice";
import { guardarFecha } from "../features/ocupacionSlice";

import Ciudades from "./Ciudades"
import Departamentos from "./Departamentos"
import Ocupaciones from "./Ocupaciones"


const AgregarPersona = () => {

    const url = "https://censo.develotion.com/";

    const [error, setError] = useState(false);
    const [exito, setExito] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const dispatch = useDispatch();

    const nombre = useRef(null);
    const dep = useSelector(state => state.departamento.idDep);
    const ciu = useSelector(state => state.ciudad.idCiu);
    const fecha = useRef(null);
    const ocu = useSelector(state => state.ocupacion.idOcu);

    const almacenarFecha = () => {
        const dateFecha = fecha.current.value;
        dispatch(guardarFecha(dateFecha));
    }

    const agregar = () => {
        const textoNombre = nombre.current.value;
        const dateFecha = fecha.current.value;

        try {
            if (textoNombre === "") throw new Error("El campo nombre no debe estar vacio");
            if (dep === "0") throw new Error("Ingrese un departamento");
            if (ciu === "0") throw new Error("Ingrese una ciudad");
            if (dateFecha === "") throw new Error("Debe ingresar una fecha");
            if (ocu === "0") throw new Error("Ingrese una ocupación");

            const per = {
                "idUsuario": Number(localStorage.getItem("id")),
                "nombre": textoNombre,
                "departamento": Number(dep),
                "ciudad": Number(ciu),
                "fechaNacimiento": dateFecha,
                "ocupacion": Number(ocu)
            }

            fetch(`${url}personas.php`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'apikey': localStorage.getItem("apiKey"),
                    'iduser': localStorage.getItem("id")
                },
                body: JSON.stringify(per)
            }).then(res => res.json())
                .then(data => {
                    dispatch(agregarPersona({
                        "id": Number(data.idCenso),
                        "idUsuario": Number(localStorage.getItem("id")),
                        "nombre": textoNombre,
                        "departamento": Number(dep),
                        "ciudad": Number(ciu),
                        "fechaNacimiento": dateFecha,
                        "ocupacion": Number(ocu)
                    }));
                    setError(false);
                    setExito(true);
                });
        } catch (e) {
            setError(true);
            setExito(false);
            setMensaje(e.message);
        }
    }


    return (
        <div>
            <h2>Agregar Persona</h2>

            <div>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input aria-label="input Nombre" type="text" ref={nombre} className="form-control" />
                </div>

                <Departamentos />

                <Ciudades />

                <div className="mb-3">
                    <label className="form-label">Fecha Nacimiento:</label>
                    <input aria-label="input Fecha" type="date" ref={fecha} className="form-control" onChange={almacenarFecha} />
                </div>

                <Ocupaciones />
                <br />
                <button type="submit" id="btn" className="bg-green text-white" onClick={agregar}>Agregar</button>
                {error && <p className="error">{mensaje}</p>}
                {exito && <p className="mensaje">Persona censada con exito</p>}
            </div>
        </div>
    )
}

export default AgregarPersona;