import './Margin.css'

const Margin = ({ size = 1 }) => {
	const width = size * 114

	return <div className="Margin" style={{ width }}></div>
}

export default Margin
