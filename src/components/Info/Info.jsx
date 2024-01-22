import './Info.css'
import data from '../../data'

const Info = () => {
	return (
		<div className="Info">
			<div>Версія: 0.2.39</div>
			<div>Оновлено: 22.01.2024</div>
			<div>Всього родичів: {data.length}</div>
		</div>
	)
}

export default Info
