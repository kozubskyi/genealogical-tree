import './ZoomButtons.css'

const ZoomButtons = props => {
	const { scale, setScale, scaleMinValue } = props

	const zoomValue = 1.186

	return (
		<div className="ZoomButtons">
			<button onClick={() => scale < 1 && setScale(prev => prev * zoomValue)}>+</button>
			<button onClick={() => scale > scaleMinValue && setScale(prev => prev / zoomValue)}>–</button>
		</div>
	)
}

export default ZoomButtons
