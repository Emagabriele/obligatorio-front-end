import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const Mapa = () => {

    const departamentos = useSelector(state => state.departamento.deps);

    const personasPorDepto = useSelector(state => state.analisis.cantPersonasDepto);

    return (
        <div>
            <MapContainer center={[-32, -57]} zoom={7} scrollWheelZoom={false} style={{ height: '600px', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {departamentos.map(dep => <Marker key={dep.id} position={[dep.latitud, dep.longitud]}>
                    <Popup>
                        {personasPorDepto.filter(per => per.nombreDep === dep.nombre).map(per =>
                            <div key={dep.id}>
                                <h6><strong>{dep.nombre}</strong></h6>
                                <p>Cantidad personas: {per.cant}</p>
                            </div>)}
                    </Popup>
                </Marker>)}
            </MapContainer>
        </div>
    )
}

export default Mapa