import React, {useState} from 'react'
import {GoogleMap, InfoWindow, Marker, useJsApiLoader} from '@react-google-maps/api';
import {Button} from "react-bootstrap";

const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function Gmaps(props) {
    const {isLoaded} = useJsApiLoader({
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
                            {
                                title: "Title",
                                subTitle: "HelloWorld!!",
                                link: `https://www.google.com/maps/search/?api=1&query=${props.lat},${props.lng}`,
                                coordinates: [props.lat, props.lng]
                            }
                        )}
                />
                {Object.keys(chosenMarker).length !== 0 ?
                    <InfoWindow
                        position={{lat: chosenMarker.coordinates[0], lng: chosenMarker.coordinates[1]}}
                        onCloseClick={() => setChosenMarker({})}
                    >
                        <div style={divStyle}>
                            <h1>{chosenMarker.title}</h1>
                            <h5>{chosenMarker.subTitle}</h5>
                            <h5>{chosenMarker.coordinates}</h5>
                            <Button href={chosenMarker.link} target="_blank"
                                    rel="noreferrer noopener">Directions</Button>
                        </div>
                    </InfoWindow> : undefined}
            </>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Gmaps);

//https://www.npmjs.com/package/@react-google-maps/api
// old https://www.npmjs.com/package/google-maps-react