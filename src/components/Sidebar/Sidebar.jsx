import { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
	const [isShown, setIsShown] = useState(false)

	return isShown ? (
		<div className="Sidebar">
			Sidebar
			<button type="button" onClick={() => setIsShown(false)}>
				Close
			</button>
		</div>
	) : (
		<button type="button" className="sidebar-btn" onClick={() => setIsShown(true)}></button>
	)
}

export default Sidebar
