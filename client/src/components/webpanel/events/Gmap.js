import React, {useRef, useState} from 'react'
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
    const [address, setAddress] = useState(["gatenavn",])
    const [pos, setPos] = useState([0,0])
    const searchBox = useRef(null)

    const onLoad = ref => searchBox.current = ref;

    const onPlacesChanged = () => {
        console.log(searchBox.current.getPlaces()[0].address_components)

        setAddressFormatted(searchBox.current.getPlaces()[0].formatted_address)
        setPos([searchBox.current.getPlaces()[0].geometry.viewport.Ua.g, //lat
                searchBox.current.getPlaces()[0].geometry.viewport.La.g]) //lng

        let streetname = searchBox.current.getPlaces()[0].address_components[1].long_name + " " + searchBox.current.getPlaces()[0].address_components[0].long_name
        let postalcode = searchBox.current.getPlaces()[0].address_components[6].long_name
        let city = searchBox.current.getPlaces()[0].address_components[2].long_name
        console.log(streetname + " " + postalcode + " " + city) //streetname
        setAddress([streetname,postalcode,city]) //todo: pass this up to EventsPanelMap to map into the input fields as suggested adressed
    };

    return (
        <>
            <p>{addressFormatted}</p>
            <p>{address}</p>
            <p>lat: {pos[0]}</p>
            <p>lng: {pos[1]}</p>
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