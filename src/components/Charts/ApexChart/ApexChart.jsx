import React from 'react'
import Chart from 'react-apexcharts'
import './ApexChart.css'
import data from '../../../data.js'

const ApexChart = () => {
	const series = []
	const labels = [
		'невідомо',
		'м. Бориспіль',
		'мабуть м. Бориспіль',
		'м. Жмеринка',
		'мабуть м. Жмеринка',
		'м. Київ',
		'м. Амстердам (Нідерланди)',
		'Ізраїль',
		'мабуть Ізраїль',
		'м. Варшава (Польща)',
	]

	for (let i = 0; i < data.length; i++) {
		const person = data[i]

		if (person.dead) continue

		if (person.address?.value === undefined) person.address.value = 'невідомо'

		const index = labels.indexOf(person.address.value)

		if (index >= 0 && series[index] === undefined) {
			series[index] = 1
		} else if (index >= 0 && series[index] !== undefined) {
			series[index] += 1
		} else {
			labels.push(person.address.value)
			series.push(1)
		}
	}

	const options = {
		labels,
		colors: [
			'rgb(180,185,190)',
			'rgb(153, 102, 255)',
			'rgb(153, 102, 255)',
			'rgb(255, 159, 64)',
			'rgb(255, 159, 64)',
			'rgb(54, 162, 235)',
			'rgb(75, 192, 192)',
			'rgb(255, 206, 86)',
			'rgb(255, 206, 86)',
			'rgb(255, 99, 132)',
		],
		title: {
			text: 'Місця проживання',
		},
		plotOptions: {
			pie: {
				donut: {
					labels: {
						show: true, // чи дублювати у центрі діаграми назву та значення при наведенні
						total: {
							show: true, // чи показувати у центрі діаграми Total
							// showAlways: true, // чи показувати у центрі діаграми завжди значення Total
							// fontSize: 16,
							color: 'black',
						},
					},
				},
				// startAngle: -90,
				// endAngle: 270,
			},
		},
		dataLabels: {
			enabled: true, // чи показувати відсотки
		},
		// fill: {
		// 	type: 'gradient',
		// },
	}

	return (
		<div className="ApexChart">
			<Chart type="donut" series={series} options={options} />
		</div>
	)
}

export default ApexChart
