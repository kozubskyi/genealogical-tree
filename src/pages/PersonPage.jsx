import React from 'react'
import { useLocation } from 'react-router-dom'

const PersonPage = () => {
	const location = useLocation()

	console.log({ location })

	return <div>PersonPage</div>
}

export default PersonPage
