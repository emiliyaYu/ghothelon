import React from "react";
import { Popup } from "react-leaflet";

const Popups = ({label}) => {

    return (
        <Popup>
            {label}
        </Popup>
    )
}

export default Popups;