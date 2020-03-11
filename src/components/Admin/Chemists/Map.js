import React, { Fragment, useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    longitude: 83.32456111907959,
    latitude: 17.714805093814757,
    zoom: 12,
    width: "50vw",
    height: "50vh"
  });

  return (
    <Fragment>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle="mapbox://styles/yashone7/ck4xqxpsf0c3f1cmt64pw9pjb"
      />
    </Fragment>
  );
};

export default Map;
