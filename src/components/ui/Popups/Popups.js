import React from "react";
import { Popup } from "react-leaflet";
import './popups.css';

const Popups = ({label, description}) => {

    return (
        <Popup className='popups'>
            <div className='titleContainer'>
                <span className='title'>
                    {label}
                </span>
            </div>
            <div className="description">
                {description}
            </div>
        </Popup>
    )
}

export default Popups;