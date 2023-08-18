import DiasRestantes from "./DiasRestantes"
import GraficoPorDepartamento from "./GraficoPorDepartamento"
import GraficoPorOcupacion from "./GraficoPorOcupacion"
import PorcentajePersCensadas from "./PorcentajePersCensadas"
import CensadosTotales from "./CensadosTotales"
import Mapa from "./Mapa"

const Analisis = () => {
  return (
    <div>
      <div id="Mapa">
        <Mapa />
      </div>

      <div id="analisis">
        <div id="GraficoDepartamento">
          <GraficoPorDepartamento />
        </div>

        <div id="GraficoOcupacion">
          <GraficoPorOcupacion />
        </div>

        <div id="Estadisticas">
          <DiasRestantes />
          <PorcentajePersCensadas />
          <CensadosTotales />
        </div>
      </div>
    </div>
  )
}

export default Analisis;