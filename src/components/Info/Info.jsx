import './Info.css'
import data from '../../data'

const Info = () => {
	return (
		<div className="Info">
			<div>Версія: 0.2.53</div>
			<div>Оновлено: 03.11.2024</div>
			<div>Всього родичів: {data.length}</div>
		</div>
	)
}

export default Info
