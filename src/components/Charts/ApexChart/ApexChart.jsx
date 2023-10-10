import React from 'react'
import Chart from 'react-apexcharts'
import './ApexChart.css'
import data from '../../../data.js'

const ApexChart = ({ type }) => {
	let series = []
	let labels = []
	let colors = []
	let titleText = ''

	if (type === 'gender') {
		series = [0, 0, 0]
		labels = ['жіноча', 'чоловіча', 'невідомо']
		colors = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(180,185,190)']
		titleText = 'Стать (гендер)'

		for (let i = 0; i < data.length; i++) {
			const person = data[i]

			if (person.gender === 'female') series[0] += 1
			if (person.gender === 'male') series[1] += 1
			if (person.gender === undefined) series[2] += 1
		}
	}

	if (type === 'gender relatives') {
		series = [0, 0, 0]
		labels = ['жіноча', 'чоловіча', 'невідомо']
		colors = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(180,185,190)']
		titleText = 'Стать (тільки родичі, без подружжя)'

		for (let i = 0; i < data.length; i++) {
			const person = data[i]

			if (person.status !== 'relative') continue

			if (person.gender === 'female') series[0] += 1
			if (person.gender === 'male') series[1] += 1
			if (person.gender === undefined) series[2] += 1
		}
	}

	if (type === 'address') {
		labels = [
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
		colors = [
			'rgb(180,185,190)',
			'rgb(153, 102, 255)',
			'rgb(153, 102, 255)',
			'rgb(255, 99, 132)',
			'rgb(255, 99, 132)',
			'rgb(54, 162, 235)',
			'rgb(255, 159, 64)',
			'rgb(75, 192, 192)',
			'rgb(75, 192, 192)',
			'rgb(255, 206, 86)',
		]
		titleText = 'Місця проживання'

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
				series[labels.length - 1] = 1
			}
		}
	}

	const options = {
		labels,
		colors,
		title: {
			text: titleText,
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
		<div className={`ApexChart ${type}`}>
			<Chart type="donut" series={series} options={options} />
		</div>
	)
}

export default ApexChart
