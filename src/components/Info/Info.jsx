import './Info.css'
import data from '../../data'

const Info = () => {
	return (
		<div className="Info">
			<div>Версія: 0.2.8</div>
			<div>Оновлено: 18.10.2023</div>
			<div>Всього родичів: {data.length}</div>
		</div>
	)
}

export default Info
