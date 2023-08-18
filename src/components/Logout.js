const Logout = () => {

    const cerrarSesion = () => {
        localStorage.clear();
    }

    return (
        <div>
            <input type="button" className="btn bg-light mb-3" value="Cerrar Sesión" onClick={cerrarSesion}/>
        </div>
    )
}

export default Logout