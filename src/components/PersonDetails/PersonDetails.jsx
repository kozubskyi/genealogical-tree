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
		// facts,
		// sources,
	} = person

	function calculateAge() {
		if (!birthDate || birthDate === '?' || deathDate === '?') return null
		if (dead && !deathDate) return null

		const slicedBirthDate = birthDate.slice(0, 10)

		if (slicedBirthDate.slice(-5).includes('?')) return null

		let birthDateArray = slicedBirthDate.split('.').reverse()
		birthDateArray = birthDateArray.filter(el => !el.includes('?'))

		const birthDatePrepared = birthDateArray.join('-').replace('≈', '')

		const startDate = new Date(birthDatePrepared)

		let endDate = new Date()

		if (deathDate) {
			let deathDateArray = deathDate.split('.').reverse()
			deathDateArray = deathDateArray.filter(el => !el.includes('?'))

			const deathDatePrepared = deathDateArray.join('-').replace('≈', '')

			endDate = new Date(deathDatePrepared)
		}

		const millisInHalfDay = 43200000
		const ageInMillis = endDate - startDate + millisInHalfDay

		return Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1000))
	}

	const UNKNOWN = 'невідомо'
	const fullName = `${surname ?? ''} ${maidenName ? `(${maidenName})` : ''} ${name ?? ''} ${patronymic ?? ''}`.trim()
	const age = calculateAge()

	return (
		<div className="Details" onClick={handleBackdropClick}>
			<div className="card">
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
									{!dead && age && <span>({age} років)</span>}
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
										{/* {dead && <span>({calculateAge(birthDate, deathDate)})</span>} */}
										{deathDate && deathPlace && ', '}
										{typeof deathPlace === 'string' && deathPlace}
										{typeof deathPlace === 'object' && (
											<a href={deathPlace.link} target="_blank" rel="noreferrer noopener">
												{deathPlace.text}
											</a>
										)}{' '}
										{dead && age && <span>({age} років)</span>}
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
								<td>Рідне місто:</td>
								<td>
									{nativeLocality &&
										Array.isArray(nativeLocality) &&
										nativeLocality.map((locality, i) => {
											return (
												<>
													{i === 0 ? '' : ', '}{' '}
													<a href={locality.link} target="_blank" rel="noreferrer noopener">
														{locality.text}
													</a>
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
									{location ? (
										<a href={location.link} target="_blank" rel="noreferrer noopener">
											{location.text}
										</a>
									) : (
										UNKNOWN
									)}
								</td>
							</tr>
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
		</div>
	)
}

export default PersonDetails
