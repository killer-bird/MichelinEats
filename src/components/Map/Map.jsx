import React from 'react'
import { MapContainer, TileLayer, Polygon} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import "./Map.scss"

const Map = () => {
    const position = [46.4775, 30.7326]
    const orangeZoneTop = [
        [46.497421, 30.722522],
        [46.494681, 30.733283],
        [46.481082, 30.762798],
        [46.471130, 30.764375],
        [46.467982, 30.762937],
        [46.474846, 30.714626],
        [46.476361, 30.706149],
        [46.486327, 30.709271],
        [46.495678, 30.716964],
        [46.497222, 30.722564],    
    ]    
    const blueZone = [
        [46.468007, 30.763340],
        [46.461165, 30.763366],
        [46.452362, 30.738964],
        [46.450980, 30.736518],
        [46.452288, 30.728868],
        [46.437261, 30.726543],
        [46.428965, 30.728383],
        [46.425453, 30.723602],
        [46.417641, 30.726472],
        [46.418539, 30.740491],
        [46.421435, 30.748149],
        [46.420361, 30.753305],
        [46.419069, 30.764992],
        [46.410287, 30.759902],
        [46.404741, 30.710745],
        [46.406627, 30.710683],
        [46.418656, 30.714804],
        [46.425847, 30.700361],
        [46.442340, 30.715469],
        [46.446781, 30.706711],
        [46.450515, 30.710326],
        [46.459698, 30.712484],
        [46.464005, 30.713514],
        [46.471371, 30.723437],
        [46.468091, 30.727307],
        [46.470389, 30.727573]     
    ]
    const greenZone = [
        [46.459388, 30.764683],
        [46.437544, 30.772152],
        [46.429514, 30.768622],
        [46.423791, 30.768336],
        [46.419398, 30.765053],
        [46.419524, 30.742388],
        [46.418248, 30.726429],
        [46.426358, 30.724722],
        [46.429634, 30.729207],
        [46.437825, 30.726314],
        [46.451360, 30.730139]
    ]

    const orangeZoneBottom = [
        [46.41099, 30.75942],
        [46.40508, 30.7099],
        [46.40235, 30.68406],
        [46.3949, 30.69715],
        [46.39645, 30.70657],
        [46.37811, 30.70428],
        [46.38127, 30.74898]
    ]

    return (
        <div className="map__wrapper">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <Polygon pathOptions={{color: "#E9722F"}} positions={orangeZoneTop} />
                <Polygon pathOptions={{color: "#2697cf"}} positions={blueZone} />
                <Polygon pathOptions={{color: "#407A53"}} positions={greenZone} />
                <Polygon pathOptions={{color: "#E9722F"}} positions={orangeZoneBottom} />

            </MapContainer>
        </div>
    )
} 
export default Map;