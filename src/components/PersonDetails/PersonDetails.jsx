import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import data from '../../data'
import constants from '../../constants'
import './PersonDetails.css'

const PersonDetails = () => {
	const urlLocation = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const handleKeyDown = evt => evt.key === 'Escape' && navigate(constants.DEFAULT_URL)

		window.addEventListener('keydown', handleKeyDown)

		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [navigate])

	const handleBackdropClick = evt => evt.target.className === 'Details' && navigate(constants.DEFAULT_URL)

	const id = urlLocation.pathname.split('/').pop()

	const person = data.find(person => person.id === id)

	const {
		surname,
		maidenName,
		name,
		patronymic,
		photo,
		gender,
		status,
		birthDate,
		birthPlace,
		dead,
		deathDate,
		deathPlace,
		nationality,
		citizenship,
		nativeLocality,
		location,
		socialNetworks,
		kinship,
		facts,
		// sources,
	} = person

	const prepareDate = date => {
		let preparedDate = date.replace('≈', '').replace('<', '').replace('>', '').slice(0, 10).split('.').reverse()

		if (preparedDate[0].includes('?')) return null
		if (preparedDate.length === 1) {
			preparedDate = [preparedDate[0], 0, 1]
		} else {
			preparedDate = preparedDate.filter(num => !isNaN(num)).map((num, i) => (i === 1 ? Number(num) - 1 : Number(num)))
		}

		return preparedDate
	}

	const calculateAge = () => {
		if (!birthDate || birthDate === '?' || birthDate.includes('-')) return null
		if (deathDate === '?' || (deathDate && deathDate.includes('-'))) return null
		if (dead && !deathDate) return null

		const birthDateArray = prepareDate(birthDate)

		if (!birthDateArray) return null

		const startDate = new Date(...birthDateArray)
		let finishDate = null

		if (deathDate) {
			const deathDateArray = prepareDate(deathDate)

			if (!deathDateArray) return null

			finishDate = new Date(...deathDateArray)
		} else {
			const now = new Date()
			finishDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
		}

		const ageDate = new Date(finishDate - startDate)
		let year = ageDate.getUTCFullYear()

		if (ageDate.getMonth() === 11 && ageDate.getDate() === 31) year += 1

		const age = year - 1970

		console.log({ startDate, finishDate, age })

		return new Intl.NumberFormat('uk-UA', { style: 'unit', unit: 'year', unitDisplay: 'long' }).format(age)
	}

	const UNKNOWN = 'невідомо'
	const fullName = `${surname ?? ''} ${maidenName ? `(${maidenName})` : ''} ${name ?? ''} ${patronymic ?? ''}`.trim()
	const age = calculateAge()

	return (
		<div className="Details" onClick={handleBackdropClick}>
			<div className="card">
				<div className="info">
					<div className="left">
						<div className={`photo${photo ? '' : ' no-photo'}`}>
							{photo ? <img src={photo} alt={fullName} /> : 'НЕМАЄ ФОТО'}
						</div>
					</div>
					<div className="right">
						<table>
							<tbody>
								<tr>
									<td>Прізвище:</td>
									<td className={!surname && !maidenName ? '' : 'bold'}>
										{surname ?? ''} {maidenName ? `(${maidenName})` : ''}
										{!surname && !maidenName && UNKNOWN}
									</td>
								</tr>
								<tr>
									<td>Ім'я:</td>
									<td className={name ? 'bold' : ''}>{name ?? UNKNOWN}</td>
								</tr>
								<tr>
									<td>По-батькові:</td>
									<td className={patronymic ? 'bold' : ''}>{patronymic ?? UNKNOWN}</td>
								</tr>
								<tr>
									<td>
										{gender === 'male' && 'Народився:'}
										{gender === 'female' && 'Народилася:'}
										{!gender && 'Народження:'}
									</td>
									<td>
										{birthDate ?? ''}
										{birthDate && birthPlace && ', '}
										{typeof birthPlace === 'string' && birthPlace}
										{typeof birthPlace === 'object' && (
											<a href={birthPlace.link} target="_blank" rel="noreferrer noopener">
												{birthPlace.text}
											</a>
										)}{' '}
										{!dead && age && <span>({age})</span>}
										{!birthDate && !birthPlace && UNKNOWN}{' '}
									</td>
								</tr>
								{dead && (
									<tr>
										<td>
											{gender === 'male' && 'Помер:'}
											{gender === 'female' && 'Померла:'}
											{!gender && 'Смерть:'}
										</td>
										<td>
											{deathDate ?? ''}
											{deathDate && deathPlace && ', '}
											{typeof deathPlace === 'string' && deathPlace}
											{typeof deathPlace === 'object' && (
												<a href={deathPlace.link} target="_blank" rel="noreferrer noopener">
													{deathPlace.text}
												</a>
											)}{' '}
											{dead && age && <span>({age})</span>}
											{!deathDate && !deathPlace && UNKNOWN}
										</td>
									</tr>
								)}
								<tr>
									<td>Національність:</td>
									<td>{nationality ?? UNKNOWN}</td>
								</tr>
								<tr>
									<td>Громадянство:</td>
									<td>{citizenship ?? UNKNOWN}</td>
								</tr>
								<tr>
									<td>Рідний регіон:</td>
									<td>
										{nativeLocality &&
											Array.isArray(nativeLocality) &&
											nativeLocality.map((locality, i) => {
												return (
													<>
														{i === 0 ? '' : ', '}{' '}
														{typeof locality === 'string' ? (
															locality
														) : (
															<a href={locality.link} target="_blank" rel="noreferrer noopener">
																{locality.text}
															</a>
														)}
													</>
												)
											})}
										{nativeLocality && !Array.isArray(nativeLocality) && (
											<a href={nativeLocality.link} target="_blank" rel="noreferrer noopener">
												{nativeLocality.text}
											</a>
										)}
										{typeof nativeLocality === 'string' && nativeLocality}
										{!nativeLocality && UNKNOWN}
									</td>
								</tr>
								<tr>
									<td>
										{!dead && 'Проживає:'}
										{dead && gender === 'male' && 'Похований:'}
										{dead && gender === 'female' && 'Похована:'}
									</td>
									<td>
										{typeof location === 'string' && location}
										{typeof location === 'object' && (
											<a href={location.link} target="_blank" rel="noreferrer noopener">
												{location.text}
											</a>
										)}
										{!location && UNKNOWN}
									</td>
								</tr>
								{/* {status === 'relative' && <tr>
								<td>
									Кількість{' '}
									<a
										href="https://uk.wikipedia.org/wiki/%D0%A1%D1%83%D1%80%D0%BE%D0%B4%D0%B6%D0%B5%D0%BD%D1%86%D1%96"
										target="_blank"
										rel="noreferrer noopener"
									>
										суродженців
									</a>
									:
								</td>
								<td>{brothersAndSisters.length}</td>
							</tr>}
							<tr>
								<td>Кількість дітей:</td>
								<td>{children.length}</td>
							</tr> */}
								{status !== 'creator' && (
									<tr>
										<td>
											Рідство з <span className="kdi">КДІ</span>:
										</td>
										<td>{kinship}</td>
									</tr>
								)}
								{socialNetworks && Object.entries(socialNetworks).length && (
									<tr className="social-networks">
										<td>Соцмережі:</td>
										<td>
											{Object.entries(socialNetworks).map(([snName, link]) => (
												<a
													href={link}
													target="_blank"
													rel="noreferrer noopener"
													title={link}
													key={link}
													className="sn-link"
												>
													{snName.includes('facebook') && <Icon icon="devicon:facebook" fontSize={20} />}
													{snName.includes('instagram') && <Icon icon="skill-icons:instagram" fontSize={20} />}
													{snName.includes('telegram') && <Icon icon="logos:telegram" fontSize={20} />}
													{snName.includes('viber') && <Icon icon="basil:viber-solid" fontSize={20} color="#583eb5" />}
													{snName.includes('tiktok') && <Icon icon="logos:tiktok-icon" fontSize={20} />}
													{snName.includes('youtube') && <Icon icon="bi:youtube" fontSize={20} color="red" />}
												</a>
											))}
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
				{facts && (
					<>
						<div>
							{/* <h2>Цікаві факти:</h2> */}
							{facts.map(fact => (
								<p>{fact}</p>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default PersonDetails
