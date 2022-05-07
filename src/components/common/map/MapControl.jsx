import { useMap } from "react-leaflet";
import L from 'leaflet';

const MapControl = () => {

    const map = useMap();
    const southWest = map.unproject([300, 3300], map.getMaxZoom()); // высота
    const northEast = map.unproject([3700, 770], map.getMaxZoom()); // ширина
    const totalBounds = new L.LatLngBounds(southWest, northEast);

    map.setMaxBounds(totalBounds);
    return null;
}

export default MapControl;

