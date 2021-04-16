import React, {useEffect, useRef, useState} from 'react'
import {GoogleMap, LoadScript, StandaloneSearchBox} from '@react-google-maps/api';

const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
    maxWidth: '1200px',
    height: '500px'
};

const center = {
    lat: 59.9091938697085,
    lng: 10.7273032197085
};

const Gmap = (props) => {
    const [addressFormatted, setAddressFormatted] = useState()
    const [pos, setPos] = useState([0,0])
    const [address, setAddress] = useState(["Gatenavn","GateNr", "Postkode", "By", 0 , 0])
    const searchBox = useRef(null)

    const onLoad = ref => searchBox.current = ref;

    const onPlacesChanged = () => {
        console.log(searchBox.current.getPlaces()[0])
        // setAddressFormatted(searchBox.current.getPlaces()[0].formatted_address)
        // setPos([searchBox.current.getPlaces()[0].geometry.viewport.Ua.g, //lat
        //     searchBox.current.getPlaces()[0].geometry.viewport.La.g]) //lng

        let streetName = searchBox.current.getPlaces()[0].address_components[1].long_name
        let streetNr = searchBox.current.getPlaces()[0].address_components[0].long_name
        let postalCode = searchBox.current.getPlaces()[0].address_components[6].long_name
        let city = searchBox.current.getPlaces()[0].address_components[2].long_name
        let lat = searchBox.current.getPlaces()[0].geometry.viewport.Ua.g
        let lng = searchBox.current.getPlaces()[0].geometry.viewport.La.g
        setAddress([streetName,streetNr,postalCode,city,lat,lng])
        console.log(address)
    };

    useEffect(() => {
        props.onPlacesChanged(address)
    },[address])

    // useEffect(() => {
    //     props.onPosChanged(pos)
    // },[pos])

    return (
        <>
            <p>{address}</p>
            <LoadScript
                googleMapsApiKey={api}
                libraries={["places"]}
            >
                <GoogleMap
                    id="searchBox"
                    mapContainerStyle={containerStyle}
                    zoom={10}
                    center={center}
                >
                    <StandaloneSearchBox
                        onLoad={onLoad}
                        onPlacesChanged={() => onPlacesChanged()}
                    >
                        <input
                            type="text"
                            placeholder="Søk"
                            style={{
                                boxSizing: `border-box`,
                                border: `1px solid transparent`,
                                width: `240px`,
                                height: `32px`,
                                padding: `0 12px`,
                                borderRadius: `3px`,
                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                fontSize: `14px`,
                                outline: `none`,
                                textOverflow: `ellipses`,
                                position: "absolute",
                                left: "50%",
                                marginLeft: "-120px",
                                top: "2%",
                            }}
                        />
                    </StandaloneSearchBox>
                </GoogleMap>
            </LoadScript>
        </>
    )
}

//Need to update the DOM quicker than normal, hence React.memo()
export default React.memo(Gmap)