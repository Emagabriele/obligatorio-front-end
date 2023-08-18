import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PorcentajePersCensadas = () => {

    const url = "https://censo.develotion.com/";

    const cantPersonas = useSelector(state => state.persona.pers.length);

    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {
        fetch(`${url}totalCensados.php`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apikey': localStorage.getItem("apiKey"),
                'iduser': localStorage.getItem("id")
            }
        })
            .then(response => response.json())
            .then(data => {
                setPorcentaje((100 * cantPersonas) / data.total);
            })
    }, [cantPersonas])



    return (
        <div>
            <h4>Porcentaje Personas Censadas</h4>
            <p>{porcentaje}%</p>
        </div>
    )
}

export default PorcentajePersCensadas