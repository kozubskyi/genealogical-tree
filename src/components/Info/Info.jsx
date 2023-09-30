import './Info.css'
import data from '../../data'

const Info = () => {
	return (
		<div className="Info">
			<div>Версія: 0.1.23</div>
			<div>Оновлено: 30.09.2023</div>
			<div>Всього родичів: {data.length}</div>
		</div>
	)
}

export default Info
