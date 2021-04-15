import React from 'react'
import {GoogleMap, LoadScript, StandaloneSearchBox} from '@react-google-maps/api';

const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
    width: '1200px',
    height: '500px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

// const onLoad = ref => this.searchBox = ref;
//
const onPlacesChanged = () => console.log(this.searchBox.getPlaces());

// const onPlacesChanged = (e) => {
//     console.log(e)
// };

const Gmap = () => {

    return (
        <LoadScript
            googleMapsApiKey={api}
            libraries={["places"]}
        >
            <GoogleMap
                id="searchbox-example"
                mapContainerStyle={containerStyle}
                zoom={2.5}
                center={center}
            >
                <StandaloneSearchBox
                    // onLoad={onLoad}
                    onPlacesChanged={onPlacesChanged}
                >
                    <input
                        type="text"
                        placeholder="Customized your placeholder"
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
                            marginLeft: "-120px"
                        }}
                    />
                </StandaloneSearchBox>
            </GoogleMap>
        </LoadScript>
    )
}

//Need to update the DOM quicker than normal, hence React.memo()
export default React.memo(Gmap)