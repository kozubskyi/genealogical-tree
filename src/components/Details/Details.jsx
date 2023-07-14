import { Icon } from '@iconify/react'
import './Details.css'

const Details = props => {
	const {
		gender,
		status,
		dateOfBirth,
		placeOfBirth,
		dead,
		dateOfDeath,
		placeOfDeath,
		address,
		nationality,
		socialNetworks,
		kinship,
		branch,
		biography,
		// parents = { mother: undefined, father: undefined },
		// brothersAndSisters,
		// spouse,
		// children,
		// position,
	} = props

	const UNKNOWN = 'невідомо'

	return (
		<div className={`Details ${branch === 'Шпирко-Голяк' ? 'left' : 'right'}`}>
			<table>
				<tbody>
					{/* <tr className="full-name">
					<td>Повне ім'я:</td>
					<td>
						{`${surname ?? ''} ${maidenName ? `(${maidenName})` : ''} ${name ?? ''} ${patronymic ?? ''}`.trim()}
						{!surname && !maidenName && !name && !patronymic && UNKNOWN}
					</td>
				</tr> */}
					<tr>
						<td>
							{gender === 'male' && 'Народився:'}
							{gender === 'female' && 'Народилася:'}
							{!gender && 'Народження:'}
						</td>
						<td>
							{dateOfBirth ? dateOfBirth : ''}
							{dateOfBirth && placeOfBirth && ', '}
							{placeOfBirth ? placeOfBirth : ''}
							{!dateOfBirth && !placeOfBirth && UNKNOWN}
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
								{dateOfDeath ? dateOfDeath : ''}
								{dateOfDeath && placeOfDeath && ', '}
								{placeOfDeath ? placeOfDeath : ''}
								{!dateOfDeath && !placeOfDeath && UNKNOWN}
							</td>
						</tr>
					)}
					<tr>
						<td>Національність:</td>
						<td>{nationality || UNKNOWN}</td>
					</tr>
					{/* <tr>
					<td>Рідне місто:</td>
					<td>{nativeLocality || UNKNOWN}</td>
				</tr> */}
					<tr>
						<td>
							{dead && gender === 'male' && 'Похований:'}
							{dead && gender === 'female' && 'Похована:'}
							{!dead && 'Проживає:'}
						</td>
						<td>
							{address.value ? (
								<a href={address.link} target="_blank" rel="noreferrer noopener">
									{address.value}
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
									<a href={link} target="_blank" rel="noreferrer noopener" title={snName} key={link}>
										{snName === 'facebook' && <Icon icon="devicon:facebook" fontSize={18} />}
										{snName === 'instagram' && <Icon icon="skill-icons:instagram" fontSize={18} />}
										{snName === 'telegram' && <Icon icon="logos:telegram" fontSize={18} />}
										{snName === 'viber' && <Icon icon="basil:viber-solid" fontSize={18} color="#583eb5" />}
									</a>
								))}
							</td>
						</tr>
					)}
				</tbody>
			</table>
			{biography && (
				<div className="biography">
					{biography.map(paragraph => (
						<p>{paragraph}</p>
					))}
				</div>
			)}
		</div>
	)
}

export default Details
