import React from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
// import ReactMapGL from "react-map-gl";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function App() {
	const [viewport, setViewport] = useState({
		width: "100vw",
		height: "100vh",
		center: [77.616, 12.936],
		latitude: 12.936151,
		longitude: 77.616406,
		zoom: 16
	});
	let mapRef = React.createRef();

	useEffect(() => {
		// navigator.geolocation.getCurrentPosition(({ coords }) => {
		// 	setViewport({ center: [coords.longitude, coords.latitude] });
		// });
		const map = new mapboxgl.Map({
			container: mapRef.current,
			style: "mapbox://styles/mapbox/streets-v11",
			...viewport
		});

		var marker = new mapboxgl.Marker()
			.setLngLat(viewport.center)
			.addTo(map);
	}, []);

	return (
		<div className="App">
			{/* <ReactMapGL
				{...viewport}
				mapStyle="mapbox://styles/mapbox/streets-v11"
				onViewportChange={viewport => setViewport(viewport)}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
			></ReactMapGL> */}

			<div ref={mapRef} className="mapContainer"></div>
		</div>
	);
}

export default App;
