import L from 'leaflet';

const icons = {
    cities: require('../../../assets/icons/castle.png'),
    sea: require('../../../assets/icons/sea.png'),
    dragon: require('../../../assets/icons/dragon.png')
}

export const CitiesMarker = L.icon({
    iconUrl: icons['cities'],
    iconRetinaUrl: icons['cities'],
    iconAnchor: [15, 30],
    popupAnchor: [6, -35],
    iconSize: [35, 35]
})

export const SeasMarker = L.icon({
    iconUrl: icons['sea'],
    iconRetinaUrl: icons['sea'],
    iconAnchor: [15, 30],
    popupAnchor: [6, -35],
    iconSize: [35, 35]
})

export const DragonMarker = L.icon({
    iconUrl: icons['dragon'],
    iconRetinaUrl: icons['dragon'],
    iconAnchor: [15, 38],
    popupAnchor: [6, -35],
    iconSize: [60, 60]
})