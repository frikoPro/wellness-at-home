import React from 'react'
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';

const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function Gmaps(props) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: api
    })
    const initialPos = {
        lat: props.lat,
        lng: props.lng
    };
    const containerStyle = {
        width: '1200px',
        height: '500px'
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={initialPos}
            zoom={10}
        >
            <>
                <Marker position={initialPos}/>
            </>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Gmaps)

//https://www.npmjs.com/package/@react-google-maps/api
// old https://www.npmjs.com/package/google-maps-react