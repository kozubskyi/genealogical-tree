import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { TreePage, PersonPage, MapPage } from './pages'
import constants from './constants'
const { DEFAULT_URL } = constants
// import RouteButtons from './components/RouteButtons/RouteButtons'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path={DEFAULT_URL} element={<TreePage />}>
					<Route path={'person/:id'} element={<PersonPage />} />
				</Route>
				<Route path={DEFAULT_URL + '/map'} element={<MapPage />} />
				<Route path="*" element={<Navigate to={DEFAULT_URL} replace />} />
			</Routes>
			{/* <RouteButtons /> */}
		</div>
	)
}

export default App
