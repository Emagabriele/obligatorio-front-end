import EliminarPersona from "./EliminarPersona"

const Persona = ({ nombre, id}) => {
  return (
     <li className="list-group-item">{nombre}<EliminarPersona key={id} id={id} /></li>
  )
}

export default Persona