import L from 'leaflet';

const icons = {
  sea: require('../../../assets/icons/water.png'),
  dragon: require('../../../assets/icons/dragon.png'),
  mavanhars: require('../../../assets/icons/mavanhars.png'),
  yuanhars: require('../../../assets/icons/yuanhars.png'),
  arona: require('../../../assets/icons/arona.png'),
  aronaSmallCastle: require('../../../assets/icons/arona-small-castle.png'),
  aronaLargeCastle: require('../../../assets/icons/arona-large-castle.png'),
  'ma-raath': require('../../../assets/icons/ma-raath.png'),
  banuk: require('../../../assets/icons/banuk.png'),
  hunhars: require('../../../assets/icons/hunhars.png'),
  narimiya: require('../../../assets/icons/narimiya.png'),
  Nyaron: require('../../../assets/icons/Nyaron.png'),
  solariyaLargeCities: require('../../../assets/icons/solaria-large-cities.png'),
  solariyaSmallCities: require('../../../assets/icons/solariya-small-cities.png'),
  benyorTemple: require('../../../assets/icons/benyor-temple.png'),
  solariyaPorts: require('../../../assets/icons/solariya-ports.png'),
  maRaathLargeCities: require('../../../assets/icons/maRaath-large-cities.png'),
  maRaathSmallCities: require('../../../assets/icons/maRaath-small-cities.png'),
  maRaathPorts: require('../../../assets/icons/maRaath-ports.png'),
  vaina: require('../../../assets/icons/vaina.png'),
  narimiyaCities: require('../../../assets/icons/narimiya-cities.png'),
  fledsilhsain: require('../../../assets/icons/fledsilhsain.png'),
  rock: require('../../../assets/icons/stone.png'),
  redDesert: require('../../../assets/icons/red-desert.png'),
  viht: require('../../../assets/icons/viht.png'),
};

const smallIconSize = [30, 30];
const mediumIconSize = [35, 35];
const bigIconSize = [40, 40];
const largeIconSize = [50, 50];
const hugeIconSize = [60, 60];

export const AronaSmallCastleIcon = L.icon({
  iconUrl: icons['aronaSmallCastle'],
  iconRetinaUrl: icons['aronaSmallCastle'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const AronaLargeCastleIcon = L.icon({
  iconUrl: icons['aronaLargeCastle'],
  iconRetinaUrl: icons['aronaLargeCastle'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: largeIconSize,
});
export const SolariyaLargeCities = L.icon({
  iconUrl: icons['solariyaLargeCities'],
  iconRetinaUrl: icons['solariyaLargeCities'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const SolariyaSmallCities = L.icon({
  iconUrl: icons['solariyaSmallCities'],
  iconRetinaUrl: icons['solariyaSmallCities'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const SolariyaPorts = L.icon({
  iconUrl: icons['solariyaPorts'],
  iconRetinaUrl: icons['solariyaPortss'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: smallIconSize,
});
export const NyaronIcon = L.icon({
  iconUrl: icons['Nyaron'],
  iconRetinaUrl: icons['Nyaron'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const BenyorIcon = L.icon({
  iconUrl: icons['benyorTemple'],
  iconRetinaUrl: icons['benyorTemple'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const SeasMarker = L.icon({
  iconUrl: icons['sea'],
  iconRetinaUrl: icons['sea'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const DragonMarker = L.icon({
  iconUrl: icons['dragon'],
  iconRetinaUrl: icons['dragon'],
  iconAnchor: [15, 38],
  popupAnchor: [6, -35],
  iconSize: hugeIconSize,
});
export const MavanharsIcon = L.icon({
  iconUrl: icons['mavanhars'],
  iconRetinaUrl: icons['mavanhars'],
  iconAnchor: [15, 38],
  popupAnchor: [6, -35],
  iconSize: largeIconSize,
});
export const YuanharsIcon = L.icon({
  iconUrl: icons['yuanhars'],
  iconRetinaUrl: icons['yuanhars'],
  iconAnchor: [15, 38],
  popupAnchor: [6, -35],
  iconSize: largeIconSize,
});
export const AronaIcon = L.icon({
  iconUrl: icons['arona'],
  iconRetinaUrl: icons['arona'],
  iconAnchor: [15, 38],
  popupAnchor: [6, -35],
  iconSize: hugeIconSize,
});
export const MaRaathIcon = L.icon({
  iconUrl: icons['ma-raath'],
  iconRetinaUrl: icons['ma-raath'],
  iconAnchor: [15, 38],
  popupAnchor: [6, -35],
  iconSize: bigIconSize,
});
export const MaRaathPorts = L.icon({
  iconUrl: icons['maRaathPorts'],
  iconRetinaUrl: icons['maRaathPorts'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: smallIconSize,
});
export const MaRaathLargeCities = L.icon({
  iconUrl: icons['maRaathLargeCities'],
  iconRetinaUrl: icons['maRaathLargeCities'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const MaRaathSmallCities = L.icon({
  iconUrl: icons['maRaathSmallCities'],
  iconRetinaUrl: icons['maRaathSmallCities'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const BanukIcon = L.icon({
  iconUrl: icons['banuk'],
  iconRetinaUrl: icons['banuk'],
  iconAnchor: [15, 38],
  popupAnchor: [6, -35],
  iconSize: largeIconSize,
});
export const VainaIcon = L.icon({
  iconUrl: icons['vaina'],
  iconRetinaUrl: icons['vaina'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const HunharsIcon = L.icon({
  iconUrl: icons['hunhars'],
  iconRetinaUrl: icons['hunhars'],
  iconAnchor: [15, 38],
  popupAnchor: [6, -35],
  iconSize: bigIconSize,
});
export const NarimiyaIcon = L.icon({
  iconUrl: icons['narimiya'],
  iconRetinaUrl: icons['narimiya'],
  iconAnchor: [15, 38],
  popupAnchor: [6, -35],
  iconSize: bigIconSize,
});
export const FledsilhsainIcon = L.icon({
  iconUrl: icons['fledsilhsain'],
  iconRetinaUrl: icons['fledsilhsain'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const NarimiyaCitiesIcon = L.icon({
  iconUrl: icons['narimiyaCities'],
  iconRetinaUrl: icons['narimiyaCities'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: mediumIconSize,
});
export const SeasIcon = L.icon({
  iconUrl: icons['sea'],
  iconRetinaUrl: icons['sea'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: [20, 20],
});
export const MountainsIcon = L.icon({
  iconUrl: icons['rock'],
  iconRetinaUrl: icons['rock'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: bigIconSize,
});
export const RedDesertIcon = L.icon({
  iconUrl: icons['redDesert'],
  iconRetinaUrl: icons['redDesert'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: largeIconSize,
});
export const VihtIcon = L.icon({
  iconUrl: icons['viht'],
  iconRetinaUrl: icons['viht'],
  iconAnchor: [15, 30],
  popupAnchor: [6, -35],
  iconSize: largeIconSize,
});
