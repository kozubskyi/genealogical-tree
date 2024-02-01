// import { useEffect } from 'react'
import './ZoomButtons.css'

const ZoomButtons = props => {
	const { scale, setScale, scaleMinValue } = props

	// const zoomValue = 1.188
	const zoomValue = 1.223

	// useEffect(() => {
	// 	const onWheel = evt => {
	// 		// console.log({ evt, scale, scaleMinValue })

	// 		if (evt.deltaY > 0 && scale > scaleMinValue) {
	// 			console.log('out')
	// 			setScale(prev => prev / zoomValue)
	// 		}
	// 		if (evt.deltaY < 0 && scale < 1) {
	// 			console.log('zoom')
	// 			setScale(prev => prev * zoomValue)
	// 		}
	// 	}

	// 	window.addEventListener('wheel', onWheel)

	// 	return () => window.removeEventListener('wheel', onWheel)
	// }, [scale, setScale, scaleMinValue])

	return (
		<div className="ZoomButtons">
			<button onClick={() => scale > 0.2 && setScale(prev => prev / zoomValue)}>–</button>
			<button onClick={() => scale < 1 && setScale(prev => prev * zoomValue)}>+</button>
		</div>
	)
}

export default ZoomButtons
