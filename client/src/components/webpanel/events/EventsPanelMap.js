const EventsPanelMap = () => {
    return (
        <>
            <h6>Address</h6>
            <h1>Placeholder</h1>
        </>
    )
}

export default EventsPanelMap;





// import {Form} from "react-bootstrap";
// import React from "react";
// import Autocomplete, {GoogleMap, StandaloneSearchBox, useJsApiLoader} from "@react-google-maps/api";
// import ScriptLoaded from "@react-google-maps/api/dist/docs/ScriptLoaded";
//
// const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
//
// const containerStyle = {
//     width: '800px',
//     height: '400px'
// };
//
// const center = {
//     lat: -3.745,
//     lng: -38.523
// };
//
// const EventsPanelMap = () => {
//
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: api
//     })
//
//
//     return isLoaded ? (
//         <>
//             <Form.Group>
//                 <Form.Label>Lokasjon</Form.Label>
//                 <Form.Text className="text-muted">Adresse</Form.Text>
//                 <Form.Control type="text" placeholder="Kort beskrivelse" />
//                 <br/>
//             <ScriptLoaded>
//                 <GoogleMap
//                     id="searchbox-example"
//                     mapContainerStyle={mapContainerStyle}
//                     zoom={2.5}
//                     center={center}
//                 >
//                     <Autocomplete
//                         onLoad={this.onLoad}
//                         onPlaceChanged={this.onPlaceChanged}
//                     >
//                         <input
//                             type="text"
//                             placeholder="Customized your placeholder"
//                             style={{
//                                 boxSizing: `border-box`,
//                                 border: `1px solid transparent`,
//                                 width: `240px`,
//                                 height: `32px`,
//                                 padding: `0 12px`,
//                                 borderRadius: `3px`,
//                                 boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//                                 fontSize: `14px`,
//                                 outline: `none`,
//                                 textOverflow: `ellipses`,
//                                 position: "absolute",
//                                 left: "50%",
//                                 marginLeft: "-120px"
//                             }}
//                         />
//                     </Autocomplete>
//                 </GoogleMap>
//             </ScriptLoaded>
//             </Form.Group>
//         </>
//     ) : <></> ;
// };
// export default React.memo(EventsPanelMap)