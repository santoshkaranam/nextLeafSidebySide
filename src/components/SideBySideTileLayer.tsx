import { useMap } from "react-leaflet";
import { memo, useEffect, useState } from "react";
import L from "leaflet";
import React from "react";

interface tileLayerData {
  url: string;
  attr: string;
}

export interface sideBySideProps {
  leftTile: tileLayerData;
  rightTile: tileLayerData;
}

function SideBySideTileLayer(props: sideBySideProps) {
  const mapInst = useMap();
  function sideBySideControl() {
    const left = new L.TileLayer(props.leftTile.url, {
      attribution: props.leftTile.attr,
    }).addTo(mapInst);

    const right = new L.TileLayer(props.rightTile.url, {
      attribution: props.rightTile.attr,
    }).addTo(mapInst);

    const ctrl = L.control.sideBySide(left, right);
    return ctrl;
  }

  useEffect(() => {
    console.log("mapInst", mapInst);
    if (mapInst === null) {
      return;
    }
    console.log("adding lef right layers");
    const ctrl = sideBySideControl();
    ctrl.addTo(mapInst);
    return () => {
      ctrl.remove();
    };
  }, []);

  return <div></div>;
}

export default memo(SideBySideTileLayer);
