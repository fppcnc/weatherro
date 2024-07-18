import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map as OLMap, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM as OSMSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import './Map.css';

const Map = ({ lat, lon }) => {
    const mapRef = useRef(null);
    const licenseRef = useRef(null);

    useEffect(() => {
        const map = new OLMap({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSMSource({
                        attributions: [],
                    }),
                }),
            ],
            view: new View({
                center: fromLonLat([lon, lat]),
                zoom: 10,
            }),
            controls: [],
        });
        if (licenseRef.current) {
            licenseRef.current.innerHTML = `
        Map data by <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>
      `;
        }

        return () => {
            map.setTarget(null);
        };
    }, [lat, lon]);

    return (
        <div className="map-container-wrapper">
            <div className="map-container" ref={mapRef}></div>
            <div className="license-container" ref={licenseRef}></div>
        </div>
    );
};

export default Map;
