import React from "react";
import {Marker} from "react-leaflet";
import Popups from "../Popup";

const Markers = ({currentZoom, legend}) => {

    const dataLegend = (Object.values((Object.values(legend)))).map(el => Object.values(el)).flat();
    return dataLegend.map((popup) => {

        if (currentZoom === 4 && popup.hide) return null;

        return (
            <Marker position={popup.position} icon={popup.icon}>
                <Popups label={popup.label}/>
            </Marker>
        );
    });
}
export default Markers;

