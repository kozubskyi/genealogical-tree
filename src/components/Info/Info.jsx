import './Info.css'
import data from '../../data'

const Info = () => {
	return (
		<div className="Info">
			<div>Версія: 0.2.16</div>
			<div>Оновлено: 04.01.2024</div>
			<div>Всього родичів: {data.length}</div>
		</div>
	)
}

export default Info
