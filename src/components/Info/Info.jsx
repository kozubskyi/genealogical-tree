import './Info.css'
import data from '../../data'

const Info = () => {
	return (
		<div className="Info">
			<div>Версія: 0.2.6</div>
			<div>Оновлено: 16.10.2023</div>
			<div>Всього родичів: {data.length}</div>
		</div>
	)
}

export default Info
