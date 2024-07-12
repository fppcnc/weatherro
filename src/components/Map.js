import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map as OLMap, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM as OSMSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';

const Map = ({ lat, lon }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new OLMap({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSMSource(),
                }),
            ],
            view: new View({
                center: fromLonLat([lon, lat]),
                zoom: 10,
            }),
        });

        const iconFeature = new Feature({
            geometry: new Point(fromLonLat([lon, lat])),
        });

        const iconStyle = new Style({
            image: new Icon({
                anchor: [0.5, 1],
                src: 'https://openlayers.org/en/latest/examples/data/icon.png',
            }),
        });

        iconFeature.setStyle(iconStyle);

        const vectorSource = new VectorSource({
            features: [iconFeature],
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource,
        });

        map.addLayer(vectorLayer);

        return () => {
            map.setTarget(null);
        };
    }, [lat, lon]);

    return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
