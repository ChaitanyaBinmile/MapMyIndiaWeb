import React, { useEffect } from 'react';

declare global {
    interface Window {
      mappls: any; // Replace 'any' with a specific type if available from the SDK documentation.
    }
  }
const Map = () => {
  useEffect(() => {
    const loadMap = () => {
      if (window && window?.mappls) {
          var geoData={
              "type": "FeatureCollection",
              "features": [{
              "type": "Feature",
              "properties":
                  {
                      "description":"noida",
                      "icon":"https://apis.mapmyindia.com/map_v3/1.png",
                      "icon-size":.75,
                      "icon-offset":[0,-10],
                      "text":"1",
                      "text-size":10,
                      "text-offset":[0,.6]
              },
              "geometry": {"type": "Point",
              "coordinates": 
              [28.544,77.5454]}
              }
              ,{
              "type": "Feature",
              "properties": {"description":"faridabad","icon":"https://apis.mapmyindia.com/map_v3/1.png"},
              "geometry": {"type": "Point",
              "coordinates": [28.27189158,77.2158203125]}
              },{
              "type": "Feature",
              "properties": {"description":"delhi","icon":"https://apis.mapmyindia.com/map_v3/1.png"},
              "geometry": {"type": "Point",
              "coordinates": [28.549511,77.2678250]}
              }
            ]
          };
        const map = new window.mappls.Map('map', {
          center: [28.638698386592438, 77.27604556863412],
          zoom: 10,
        });
        window.mappls.addGeoJson({map:map,data:geoData,fitbounds:true,cType:0});

      }
    };
    // Load the Mappls JavaScript SDK dynamically
    const script = document.createElement('script');
    script.src =
      'https://apis.mappls.com/advancedmaps/api/a425b68931c1b22f1f3a5681961cf608/map_sdk?layer=vector&v=3.0';
    script.async = true;
    script.defer = true;
    script.onload = loadMap; // Initialize the map when the script is loaded
    document.body.appendChild(script);
    return () => {
      // Cleanup script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
      }}
    ></div>
  );
};
export default Map;