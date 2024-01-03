import React, { useState, useMemo, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker, MarkerF, InfoWindow, InfoWindowF } from '@react-google-maps/api'
import data from '../../data'

const containerStyle = { width: '100%', height: '100vh' }
const boryspilCenter = { lat: 50.35107, lng: 30.95065 }

const Map = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyAytDvO_-vW6xAHfeau4HOMGOajdr7qDIk',
	})

	const [map, setMap] = useState(null)
	const [center, setCenter] = useState(boryspilCenter)
	const [selectedPerson, setSelectedPerson] = useState(null)

	const options = useMemo(
		() => ({
			// disableDefaultUI: true,
			clickableIcons: false,
			// maxZoom: 19,
			minZoom: 2,
			// mapTypeControl: false,
			// fullscreenControl: false,
			// streetViewControl: false,
			// zoomControl: false,
		}),
		[]
	)

	const onLoad = useCallback(function callback(map) {
		// const bounds = new window.google.maps.LatLngBounds(boryspilCenter)
		// map.fitBounds(bounds)
		// setMap(map)
	}, [])

	const onUnmount = useCallback(function callback(map) {
		setMap(null)
	}, [])

	return (
		isLoaded && (
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
				// onLoad={onLoad}
				// onUnmount={onUnmount}
				options={options}
			>
				{data.map(person => {
					if (!person.address) return null

					const {
						address: { lat, lng },
					} = person

					return <MarkerF position={{ lat, lng }} onClick={() => setSelectedPerson(person)} />
				})}
				{selectedPerson && (
					<InfoWindowF
						position={{ lat: selectedPerson.address.lat, lng: selectedPerson.address.lng }}
						zIndex={1}
						options={{
							pixelOffset: {
								// width: 0,
								height: -40,
							},
						}}
						onCloseClick={() => setSelectedPerson(null)}
					>
						<div>
							{selectedPerson.surname ?? ''} {selectedPerson.maidenName ? `(${selectedPerson.maidenName})` : ''}{' '}
							{selectedPerson.name ?? ''} {selectedPerson.patronymic ?? ''}
						</div>
					</InfoWindowF>
				)}
			</GoogleMap>
		)
	)
}

export default React.memo(Map)
