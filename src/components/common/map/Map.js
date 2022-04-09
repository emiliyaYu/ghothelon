import React, {useState} from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import MapControl from "./MapControl";
import Markers from "../../ui/Markers";
import MapEvents from "./MapEvents";
import Data from "../../../data/data";
import './map.css'

const Map = () => {

    const maxZoom = 4;
    const center = [0, 0];
    const zoom = 2;
    const viscosity = 1.0;
    const minZoom = 3;

    const [currentZoom, setCurrentZoom] = useState(zoom);
    return (
        <div className="map">
            <MapContainer style={{ height: "inherit", width: "inherit" }} maxZoom={maxZoom} center={center} zoom={currentZoom}
                          continuousWorld={false}
                          minZoom={minZoom}
                          attributionControl={false}
                          maxBoundsViscosity={viscosity}
                          zoomControl={false}>
                <TileLayer url='tiles/{z}/{x}/{y}.png' noWrap={true} />
                <MapControl />
                <MapEvents updateZoom={setCurrentZoom} />
                <Markers legend={Data} currentZoom={currentZoom} />
            </MapContainer>
        </div>
    );

}
export default Map;