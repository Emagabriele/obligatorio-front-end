import { useEffect, useState } from "react";

const DiasRestantes = () => {

    const [diasRestantes, setDiasRestantes] = useState(0);
    const finCenso = new Date(2023, 7, 31);

    const calcularDiasRestantes = () => {
      const diaActual = new Date();
      const tiempoDiferencia = finCenso - diaActual;

      const diasRestantes = tiempoDiferencia / (1000 * 60 * 60 * 24);
      setDiasRestantes(Math.round(diasRestantes));
    };


    useEffect(() => {
        calcularDiasRestantes();
    }, []);

  return (
    <div>
        <h4>Dias Restantes</h4>
        <p>Faltan {diasRestantes} días para que el censo termine</p>
    </div>
  )
}

export default DiasRestantes