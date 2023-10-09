import React from 'react'
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import './Chart.css'
import data from '../../data.js'

ChartJS.register(ArcElement, Title, Tooltip, Legend)

const chartData = {
	// labels: ['Значение 1', 'Значение 2', 'Значение 3'],
	// datasets: [
	// 	{
	// 		data: [50, 40, 30], // Замените этими данными на свои значения
	// 		// backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Цвета секторов диаграммы
	// 		backgroundColor: ['red', 'green', 'blue', 'deepskyblue', 'azure', 'pink'], // Цвета секторов диаграммы
	// 		// hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
	// 	},
	// ],
	labels: [
		'невідомо',
		'м. Бориспіль',
		'мабуть м. Бориспіль',
		'м. Київ',
		'м. Жмеринка',
		'мабуть м. Жмеринка',
		'м. Амстердам (Нідерланди)',
		'Ізраїль',
		'мабуть Ізраїль',
		'м. Варшава (Польща)',
	],
	datasets: [
		{
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			backgroundColor: [
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
			],
		},
	],
}

for (let i = 0; i < data.length; i++) {
	const person = data[i]

	if (person.dead) continue

	if (person.address.value === undefined) person.address.value = 'невідомо'

	const index = chartData.labels.indexOf(person.address.value)

	if (index >= 0) {
		chartData.datasets[0].data[index] += 1
	} else {
		chartData.labels.push(person.address.value)
		chartData.datasets[0].data.push(1)
	}
}

// const getDataInPercentage = arr => {
// 	const sum = arr.reduce((a, b) => a + b, 0)

// 	const percentages = arr.map(value => `${(value / sum) * 100}% (${value})`)

// 	return percentages
// }

console.log(chartData.datasets[0].data.reduce((a, b) => a + b))

const chartOptions = {
	// Настройки диаграммы, такие как заголовок, легенда и др.
	plugins: {
		title: {
			display: true,
			text: 'Місця проживання',
			font: {
				family: 'Akrobat Black',
				// size: 12,
			},
		},
		legend: {
			labels: {
				font: {
					family: 'Akrobat SemiBold',
					size: 8,
				},
			},
		},
	},

	tooltips: {
		callbacks: {
			label: function (tooltipItem, data) {
				var dataset = data.datasets[tooltipItem.datasetIndex]
				var meta = dataset._meta[Object.keys(dataset._meta)[0]]
				var total = meta.total
				var currentValue = dataset.data[tooltipItem.index]
				var percentage = parseFloat(((currentValue / total) * 100).toFixed(1))
				return currentValue + ' (' + percentage + '%)'
			},
			title: function (tooltipItem, data) {
				return data.labels[tooltipItem[0].index]
			},
		},
	},
}

const Chart = () => {
	return (
		<div className="Chart">
			<Doughnut data={chartData} options={chartOptions} />
		</div>
	)
}

export default Chart
