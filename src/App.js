import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { TreePage, PersonPage, MapPage } from './pages'
// import RouteButtons from './components/RouteButtons/RouteButtons'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<TreePage />} />
				<Route path="/person/:id" element={<PersonPage />} />
				<Route path="/map" element={<MapPage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
			{/* <RouteButtons /> */}
		</div>
	)
}

export default App
