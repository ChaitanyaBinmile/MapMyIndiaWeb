import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';



function App() {
  const mapCenter = [28.6139, 77.209]; // Specify the desired center coordinates
  const markerPosition = [18.5204, 73.8567]; // Specify the desired marker coordinates

  return (
    <div className="App">
      <div id="mapyyy" style={{ width: "100%", height: "400px" }}>
        <Map />
      </div>
    </div>
  );
}

export default App;
