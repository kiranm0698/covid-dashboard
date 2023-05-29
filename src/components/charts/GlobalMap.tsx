import React from "react";
//@ts-ignore
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
//@ts-ignore
import L, { IconOptions, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapDataItem {
  countryInfo: {
    lat: number;
    long: number;
  };
  cases: number;
  deaths: number;
  recovered: number;
  country: string;
  active: number;
}

interface GlobalMapProps {
  mapData: MapDataItem[];
}

//To show data on the map with markers
const GlobalMap: React.FC<GlobalMapProps> = ({ mapData }) => {
  const center: LatLngExpression = [47.1667, 9.5333];
  const zoom: number = 5;
  const coordArray: {
    lat: number;
    lng: number;
    cases: number;
    deaths: number;
    recovered: number;
    country: string;
    active: number;
  }[] = mapData.map((item) => ({
    lat: item.countryInfo.lat,
    lng: item.countryInfo.long,
    cases: item.cases,
    deaths: item.deaths,
    recovered: item.recovered,
    country: item.country,
    active: item.active,
  }));

  const customMarkerIcon: L.Icon<IconOptions> = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.3.4/dist/images/marker-icon-2x.png",
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which corresponds to marker's location
    popupAnchor: [0, -41], // Point from which the popup should open relative to the iconAnchor
    shadowSize: [41, 41], // Size of the shadow image
  });

  return (
    <Map center={center} zoom={zoom} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {coordArray.map((item) => (
        <Marker position={[item.lat, item.lng]} icon={customMarkerIcon}>
          <Popup>
            <div>
              <div className="flex justify-center">
                <h2 className="font-bold">{item.country}</h2>
              </div>
              <p className="font-bold">
                Confirmed: <span className="font-normal">{item.cases}</span>
              </p>
              <p className="font-bold">
                Deaths: <span className="font-normal">{item.deaths}</span>
              </p>
              <p className="font-bold">
                Recovered: <span className="font-normal">{item.recovered}</span>
              </p>
              <p className="font-bold">
                Active: <span className="font-normal">{item.active}</span>
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </Map>
  );
};

export default GlobalMap;
