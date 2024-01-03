import { useState } from 'react'
import { Icon } from '@iconify/react'
import './Tree.css'
import ZoomButtons from '../ZoomButtons/ZoomButtons'
import Logo from '../Logo/Logo'
import Person from '../Person/Person'
import ApexChart from '../Charts/ApexChart/ApexChart'
import data from '../../data'
import Info from '../Info/Info'

const Tree = () => {
	const scaleMinValue = window.innerHeight / 2166

	const [scale, setScale] = useState(scaleMinValue)

	return (
		<>
			<ZoomButtons scale={scale} setScale={setScale} scaleMinValue={scaleMinValue} />
			<div
				className="Tree"
				style={{ transform: `matrix(${scale}, 0, 0, ${scale}, 0, 0)` }}
				// onMouseDown={evt => console.log({ evt })}
			>
				<Logo />
				<div className="branch-line">
					<span>
						<Icon icon="mingcute:arrow-left-line" className="arrow-left" /> Гілка Коренів
					</span>
					<span>
						Гілка Шпирко-Голяк <Icon icon="mingcute:arrow-right-line" className="arrow-right" />
					</span>
				</div>
				{data.map(person => (
					<Person key={person.id} {...person} />
				))}
				{/* <ApexChart type="gender" />
				<ApexChart type="address" /> */}
			</div>
			<Info />
		</>
	)
}

export default Tree
