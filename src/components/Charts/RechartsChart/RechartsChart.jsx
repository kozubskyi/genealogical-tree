import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts'
import data from '../../../data.js'

const chartData = [
	{ name: 'невідомо', value: 0 },
	{ name: 'м. Бориспіль', value: 0 },
	{ name: 'мабуть м. Бориспіль', value: 0 },
	{ name: 'м. Київ', value: 0 },
	{ name: 'м. Жмеринка', value: 0 },
	{ name: 'мабуть м. Жмеринка', value: 0 },
	{ name: 'м. Амстердам (Нідерланди)', value: 0 },
	{ name: 'Ізраїль', value: 0 },
	{ name: 'мабуть Ізраїль', value: 0 },
	{ name: 'м. Варшава (Польща)', value: 0 },
]

for (let i = 0; i < data.length; i++) {
	const person = data[i]

	if (person.dead) continue

	if (person.address.value === undefined) person.address.value = 'невідомо'

	const place = chartData.find(place => place.name === person.address.value)

	if (place === undefined) {
		chartData.push({ name: person.address.value, value: 1 })
	} else {
		place.value += 1
	}
}

const COLORS = [
	'#DCDCDC',
	'rgb(153, 102, 255)',
	'rgb(153, 102, 255)',
	'rgb(54, 162, 235)',
	'rgb(255, 159, 64)',
	'rgb(255, 159, 64)',
	'rgb(75, 192, 192)',
	'rgb(255, 206, 86)',
	'rgb(255, 206, 86)',
	'rgb(255, 99, 132)',
]

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180))
	const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180))

	return (
		<text x={x} y={y} fill="white" textAnchor="middle">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

const PieChartComponent = () => {
	return (
		<PieChart width={400} height={400}>
			<Pie
				data={chartData}
				dataKey="value"
				nameKey="name"
				cx="50%"
				cy="50%"
				outerRadius={80}
				label={renderCustomizedLabel}
			>
				{chartData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			<Tooltip />
			<Legend />
		</PieChart>
	)
}

export default PieChartComponent
