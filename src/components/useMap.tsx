import { MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "sans-leaflet-side-by-side";
import SideBySideTileLayer from "./SideBySideTileLayer";
import { memo } from "react";

export interface MapData {
  name: string;
}

function useMapElement(props: MapData) {
  return (
    <MapContainer
      className="map"
      center={[51.505, -0.09]}
      zoom={7}
      style={{
        height: "99vh",
        width: "100%",
      }}
    >
      <SideBySideTileLayer
        leftTile={{
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          attr: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }}
        rightTile={{
          url: "https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
          attr: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }}
      />
    </MapContainer>
  );
}

export default memo(useMapElement);
