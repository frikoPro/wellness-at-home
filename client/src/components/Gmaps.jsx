import React, {useState} from 'react'
import {GoogleMap, useJsApiLoader, Marker, InfoWindow, MarkerProps } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {google} from "calendar-link";

const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function Gmaps(props) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: api
    })

    const [chosenMarker, setChosenMarker] = useState({})

    const initialPos = {
        lat: props.lat,
        lng: props.lng
    };
    const containerStyle = {
        width: 'auto',
        height: '500px'
    };
    const onLoad = infoWindow => {
        console.log('infoWindow: ', infoWindow)
    }
    const divStyle = {
        background: `white`,
        border: `1px solid #ccc`,
        padding: 15
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={initialPos}
            zoom={10}
        >
            <>
                <Marker position={initialPos}
                        icon={"https://icons.iconarchive.com/icons/paomedia/small-n-flat/32/map-marker-icon.png"}
                        onClick={() => setChosenMarker(
                            {title:"Title", subTitle: "HelloWorld!!", link:"https://fontawesome.com/how-to-use/on-the-web/using-with/react", coordinates: [props.lat, props.lng] }
                            )}
                />
                {Object.keys(chosenMarker).length !== 0 ?
                <InfoWindow
                    onLoad={onLoad}
                    position={{lat: chosenMarker.coordinates[0],lng: chosenMarker.coordinates[1] }}
                    onCloseClick={() => setChosenMarker({})}
                >
                    <div style={divStyle}>
                        <h1>{chosenMarker.title}</h1>
                        <h1>{chosenMarker.subTitle}</h1>
                        <h1>{chosenMarker.link}</h1>
                        <h1>{chosenMarker.coordinates}</h1>
                    </div>
                </InfoWindow> : undefined}
            </>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Gmaps);

//https://www.npmjs.com/package/@react-google-maps/api
// old https://www.npmjs.com/package/google-maps-react