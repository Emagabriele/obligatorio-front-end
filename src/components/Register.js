import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {

    const url = "https://censo.develotion.com/";

    const [error, setError] = useState(false);

    const [mensaje, setMensaje] = useState("");

    let navigate = useNavigate();

    const user = useRef(null);
    const pass = useRef(null);

    const registrar = () => {

        const textoUser = user.current.value;
        const passUser = pass.current.value;

        const usu = {
            usuario: textoUser,
            password: passUser
        }

        fetch(`${url}usuarios.php`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(usu)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.codigo === 200) {
                    localStorage.setItem("apiKey", data.apiKey);
                    localStorage.setItem("id", data.id);
                    navigate("/dashboard")
                } else {
                    localStorage.clear();
                    setError(true);
                    setMensaje(data.mensaje);
                }
            });
    }



    return (
        <div id="RegisterSection">
            <h2>Register</h2>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Usuario" ref={user} />
                <label htmlFor="floatingInput">Usuario</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={pass} />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <br />
            {error && <p className="error">{mensaje}</p>}
            <p>Ya tienes cuenta? Inicia sesión <Link to="/">Aquí</Link></p>
            <button type="submit" id="btn" className="bg-violet text-white" onClick={registrar}>Registrar</button>
        </div>
    )
}

export default Register