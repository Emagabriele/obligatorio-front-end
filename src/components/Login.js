import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

  const url = "https://censo.develotion.com/";

  const [error, setError] = useState(false);

  const [mensaje, setMensaje] = useState("");

  let navigate = useNavigate();

  const user = useRef(null);
  const pass = useRef(null);

  const [btnLogin, setBtnLoguin] = useState(false)

  const cambioValor = () => {
    user.current.value && pass.current.value ? setBtnLoguin(true) : setBtnLoguin(false);
  }

  const ingresar = () => {
    const textoUser = user.current.value;
    const passUser = pass.current.value;

    const usu = {
      usuario: textoUser,
      password: passUser
    }

    fetch(`${url}login.php`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(usu)
    }).then(res => res.json())
      .then(data => {
        if (data.codigo === 200) {
          localStorage.setItem("apiKey", data.apiKey);
          localStorage.setItem("id", data.id);
          navigate("/dashboard");
        } else {
          localStorage.clear();
          setError(true);
          setMensaje(data.mensaje);
        }
      });
  }

  return (
    <div id="LoginSection">
      <h2>Login</h2>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Usuario" ref={user} onChange={cambioValor} />
        <label htmlFor="floatingInput">Usuario</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={pass} onChange={cambioValor} />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <br />
      {error && <p className="error">{mensaje}</p>}
      <p>No tienes cuenta? Registrate <Link to="/register">Aquí</Link></p>
      <button type="submit" id="btn" className="bg-vio text-white" disabled={!btnLogin} onClick={ingresar}>Inciar Sesión</button>
    </div>
  )
}

export default Login