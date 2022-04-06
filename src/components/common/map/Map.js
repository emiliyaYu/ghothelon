import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import MapControl from "./MapControl";
import './map.css'

const Map = () => {

    const maxZoom = 4;
    const center = [0, 0];
    const zoom = 2;
    const viscosity = 1.0;

    return (
        <div className="map">
            <MapContainer style={{ height: "inherit", width: "inherit" }} maxZoom={maxZoom} center={center} zoom={zoom}
                          continuousWorld={false}
                          minZoom={3}
                          attributionControl={false}
                          maxBoundsViscosity={viscosity}>
                        <TileLayer url='tiles/{z}/{x}/{y}.png' noWrap={true}/>
                <MapControl />
            </MapContainer>
        </div>
    );

}
export default Map;