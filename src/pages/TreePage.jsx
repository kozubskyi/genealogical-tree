import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Tree from '../components/Tree/Tree'

const TreePage = () => {
	// const [mouseDown, setMouseDown] = useState(false)

	// useEffect(() => {
	// 	const onMouseDown = evt => {
	// 		setMouseDown(true)
	// 		console.log({ evt })
	// 	}
	// 	const onMouseUp = evt => {
	// 		setMouseDown(false)
	// 		console.log({ evt })
	// 	}
	// 	// const onMouseMove = evt => {
	// 	// 	if (!mouseDown) return

	// 	// 	console.log({ evt })
	// 	// }

	// 	window.addEventListener('mousedown', onMouseDown)
	// 	window.addEventListener('mouseup', onMouseUp)
	// 	// window.addEventListener('mousemove', onMouseMove)

	// 	return () => {
	// 		window.removeEventListener('mousedown', onMouseDown)
	// 		window.removeEventListener('mouseup', onMouseUp)
	// 		// window.removeEventListener('mousemove', onMouseMove)
	// 	}
	// }, [])

	return (
		<div className="TreePage">
			<Tree />
			<Outlet />
		</div>
	)
}

export default TreePage
