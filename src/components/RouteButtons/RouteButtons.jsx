import React from 'react'
import { NavLink } from 'react-router-dom'
import './RouteButtons.css'

const RouteButtons = () => {
	return (
		<div className="RouteButtons">
			<NavLink to="/">Дерево</NavLink>
			<NavLink to="/map">Мапа</NavLink>
		</div>
	)
}

export default RouteButtons
