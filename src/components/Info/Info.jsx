import './Info.css'
import data from '../../data'

const Info = () => {
	return (
		<div className="Info">
			<div>Версія: 0.2.40</div>
			<div>Оновлено: 02.02.2024</div>
			<div>Всього родичів: {data.length}</div>
		</div>
	)
}

export default Info
