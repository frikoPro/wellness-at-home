import {Map, GoogleApiWrapper} from 'google-maps-react';
import {Component} from "react";

const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google}
                 zoom={8}
                 style={style}
            >

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (api)
})(MapContainer)


const style = {
    width: '1200px',
    height: '500px'
}