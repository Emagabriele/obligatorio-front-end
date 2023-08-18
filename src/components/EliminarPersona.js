import { useDispatch, useSelector } from "react-redux";
import { eliminarPersona, eliminarPersonaFiltrada } from "../features/personaSlice";

const EliminarPersona = ({id}) => {

    const url = "https://censo.develotion.com/";

    const dispatch = useDispatch();

    const pers = useSelector(state => state.persona.pers);

    const personasFiltradas = useSelector(state => state.persona.persFiltradas);

    const eliminar = () => {
        fetch(`${url}personas.php?idCenso=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'apikey': localStorage.getItem("apiKey"),
                'iduser': localStorage.getItem("id")
            }
        }).then(res => res.json())
            .then(data => {
                dispatch(eliminarPersona(pers.findIndex(per => per.id === id)));
                dispatch(eliminarPersonaFiltrada(personasFiltradas.findIndex(per => per.id === id)));
            });
    }

    return (
        <a href="#" className="text-danger" onClick={eliminar}><img id="imgCross" src="https://img.icons8.com/?size=512&id=11997&format=png"/></a>
    )
}

export default EliminarPersona;