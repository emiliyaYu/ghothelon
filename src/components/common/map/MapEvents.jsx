import { useMapEvents } from "react-leaflet";

const MapEvents = ({ updateZoom }) => {

    useMapEvents({
        zoomend: (e) => {
            updateZoom(e.target._zoom)
        }
    })
    return null;
}

export default MapEvents;