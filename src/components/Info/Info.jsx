import './Info.css'
import data from '../../data'

const Info = () => {
	return (
		<div className="Info">
			<div>Версія: 0.1.21</div>
			<div>Оновлено: 03.08.2023</div>
			<div>Всього родичів: {data.length}</div>
		</div>
	)
}

export default Info
