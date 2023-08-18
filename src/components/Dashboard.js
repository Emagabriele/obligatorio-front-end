import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import AgregarPersona from "./AgregarPersona"
import Personas from "./Personas"
import Analisis from "./Analisis"
import Logout from "./Logout"

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("apiKey") == null) {
      navigate("/");
    }
  }, [])

  return (
    <div >

      <div id="Menu">
        <h2>DashBoard</h2>
        <Link to="/"><Logout /></Link>
      </div>

      <div id="dashBoard">
        <div id="AddSection">
          <AgregarPersona />
        </div>

        <div id="PersSection">
          <Personas />
        </div>

        <div id="analisisSection">
          <Analisis />
        </div>

      </div>
    </div>
  )
}

export default Dashboard;