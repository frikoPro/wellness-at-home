import React, {useEffect, useRef, useState} from 'react';
import {GoogleMap, LoadScript, StandaloneSearchBox,} from '@react-google-maps/api';
import {Alert} from 'antd';

const Gmap = (props) => {
	const [address, setAddress] = useState(['', '', '', '', 0, 0]);
	const [errorMsg, setErrorMsg] = useState(false);
	const [errorMsgValue, setErrorMsgValue] = useState();
	const searchBox = useRef(null);
	const containerStyle = {
		maxWidth: '1200px',
		height: '500px',
		border: '1.5px solid #d9d9d9',
	};
	const center = { lat: 59.9091938697085, lng: 10.7273032197085 };
	const api = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
	const lib = ['places'];

	const onLoad = (ref) => (searchBox.current = ref);

	//Searches the res array of nested objects
	function searchObj(obj, query) {
		const value = obj[obj];
		for (const key in obj) {
			const value = obj[key];

			if (typeof value === 'object') {
				return searchObj(value, query);
			}
			if (
				typeof value === 'string' &&
				value.toLowerCase().indexOf(query.toLowerCase()) > -1
			) {
				return obj;
			}
		}
	}

	const onPlacesChanged = () => {
		const places = searchBox.current.getPlaces();
		console.log(places);
		//Error checks
		if (places.length === 0) {
			setErrorMsg(true);
			setErrorMsgValue(
				<Alert
					message="Stedet finnes ikke."
					type="error"
					closeText="Lukk"
				/>
			);
			return;
		} else {
			setErrorMsg(false); //Not needed but it removes the error when a valid query is entered
		}

		if (!places[0].types.includes('point_of_interest') &&
			!places[0].types.includes('street_address') &&
			!places[0].types.includes('establishment') &&
			!places[0].types.includes('premise')) {
			setErrorMsg(true);
			setErrorMsgValue(
				<Alert
					message="Finner ikke addresse tilhørende til søket."
					type="error"
					closeText="Lukk"
				/>
			);
			return;
		} else {
			setErrorMsg(false); //Not needed but it removes the error when a valid query is entered
		}

		//populates
		const streetName = places[0].address_components.filter(function (obj) {
			return searchObj(obj, 'route');
		})[0].long_name;
		const streetNr = places[0].address_components.filter(function (obj) {
			return searchObj(obj, 'street_number');
		})[0].long_name;
		const postalCode = places[0].address_components.filter(function (obj) {
			return searchObj(obj, 'postal_code');
		})[0].long_name;
		const city = places[0].address_components.filter(function (obj) {
			return searchObj(obj, 'postal_town');
		})[0].long_name;

		let lat = searchBox.current.getPlaces()[0].geometry.location.lat();
		let lng = searchBox.current.getPlaces()[0].geometry.location.lng();
		setAddress([streetName, streetNr, postalCode, city, lat, lng]);
	};

	//passes new data to parent through props
	useEffect(() => {
		props.onPlacesChanged(address);
	}, [address]);

	//console.log(address)
	return (
		<>
			{errorMsg ? (
				<>
					{errorMsgValue}
					<br />
				</>
			) : (
				<></>
			)}
			<LoadScript googleMapsApiKey={api} libraries={lib}>
				<GoogleMap
					id="searchBox"
					mapContainerStyle={containerStyle}
					zoom={10}
					center={center}>
					<StandaloneSearchBox
						onLoad={onLoad}
						onPlacesChanged={() => onPlacesChanged()}>
						<input
							type="text"
							placeholder="Søk"
							style={{
								boxSizing: `border-box`,
								border: `1px solid transparent`,
								width: `240px`,
								height: `39px`,
								padding: `0 12px`,
								borderRadius: `1px`,
								boxShadow: `0 2px 6px rgba(0, 0, 0, 0.2)`,
								fontSize: `14px`,
								outline: `none`,
								textOverflow: `ellipses`,
								position: 'absolute',
								left: '50%',
								marginLeft: '-120px',
								top: '2%',
							}}
						/>
					</StandaloneSearchBox>
				</GoogleMap>
			</LoadScript>
		</>
	);
};

//Need to update the DOM quicker than normal, hence React.memo()
export default React.memo(Gmap);
