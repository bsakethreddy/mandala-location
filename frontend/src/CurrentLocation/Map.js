// /* global google */
// import React from "react";
// // import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
//   DrawingManager,
// } from "react-google-maps";
// // import withScriptjs from "react-google-maps/lib/async/withScriptjs";
// // import DrawingManager from "react-google-maps/lib/drawing/DrawingManager";

// const google = window.google;
// export default withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap defaultZoom={15} center={props.center}>
//       <DrawingManager
//         defaultDrawingMode={google.maps.drawing.OverlayType.POLYGON}
//         defaultOptions={{
//           drawingControl: true,
//           drawingControlOptions: {
//             position: google.maps.ControlPosition.TOP_CENTER,
//             drawingModes: [google.maps.drawing.OverlayType.POLYGON],
//           },
//         }}
//         onPolygonComplete={props.doneDrawing}
//       />
//       {props.center.lat && props.center.lng && (
//         <Marker position={props.center} />
//       )}
//     </GoogleMap>
//   ))
// );
