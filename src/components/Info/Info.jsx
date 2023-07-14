import './Info.css'
import data from '../../data'

const Info = () => {
	return (
		<div className="Info">
			<div>Версія: 0.1.14</div>
			<div>Оновлено: 14.07.2023</div>
			<div>Всього родичів: {data.length}</div>
		</div>
	)
}

export default Info
