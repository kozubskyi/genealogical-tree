import './Info.css'
import data from '../../data'

const Info = () => {
	return (
		<div className="Info">
			<div>Версія: 0.2.49</div>
			<div>Оновлено: 14.05.2024</div>
			<div>Всього родичів: {data.length}</div>
		</div>
	)
}

export default Info
