import { useDispatch, useSelector } from "react-redux"
import { guardarPersona, guardarPersonaFiltradas } from "../features/personaSlice";
import { useEffect } from "react"
import Persona from "./Persona";
import Filtro from "./Filtro";

const Personas = () => {

    const url = "https://censo.develotion.com/";

    const dispatch = useDispatch();

    const personas = useSelector(state => state.persona.pers);

    const personasFiltradas = useSelector(state => state.persona.persFiltradas);

    const idOcu = useSelector(state => state.persona.idFiltroPersona);

    useEffect(() => {
        if (localStorage.getItem("apiKey") != null) {

            fetch(`${url}personas.php?idUsuario=${localStorage.getItem("id")}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': localStorage.getItem("apiKey"),
                    'iduser': localStorage.getItem("id")
                }
            })
                .then(response => response.json())
                .then(data => {
                    dispatch(guardarPersona(data.personas));
                    dispatch(guardarPersonaFiltradas(data.personas));
                })
        }
    }, [])


    useEffect(() => {
        if(idOcu === 0){
            dispatch(guardarPersonaFiltradas(personas));
        }else{
            dispatch(guardarPersonaFiltradas(personas.filter(per => per.ocupacion === idOcu)))
        }
    }, [idOcu])

    return (
        <div>
            <h2>Personas Censadas</h2>
            <Filtro />
            <ul className="list-group list-group-flush">
                {personasFiltradas.map(per => <Persona key={per.id} {...per} />)}
            </ul>
        </div>
    )
}

export default Personas