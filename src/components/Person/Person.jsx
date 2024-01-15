import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import './Person.css'
import data from '../../data'
import constants from '../../constants'
const { DEFAULT_URL } = constants
// import Margin from '../Margin/Margin'

const Person = props => {
	const {
		id = '0',
		surname,
		maidenName,
		name,
		patronymic,
		photo,
		gender,
		status,
		birthDate,
		dead,
		deathDate,
		parents,
		brothersAndSisters,
		spouse,
		children,
		position,
	} = props

	const checkStatus = () => (status === 'relative' || status === 'creator' ? true : false)

	const setTopLineStyles = () => {
		const styles = {}
		const border = '1px solid black'

		const parentsArray = data.filter(person => person.id === parents?.mother || person.id === parents?.father)

		if (parentsArray.length === 0) {
			const brothersAndSistersArray = data.filter(person => brothersAndSisters.includes(person.id))

			if (brothersAndSistersArray.length === 0) return { left: '50%', borderLeft: border }

			const lastBrotherOrSisterPlace = brothersAndSistersArray.slice(-1)[0].position.place

			if (position.place > lastBrotherOrSisterPlace) {
				styles.right = '49.5%'
				styles.borderRight = border
				styles.width = position.place * 114 - lastBrotherOrSisterPlace * 114 + 1
			} else {
				styles.left = '49.5%'
				styles.borderLeft = border
				styles.width = lastBrotherOrSisterPlace * 114 - position.place * 114 + 1
			}
			styles.borderTop = border

			return styles
		}

		let parentsMid

		if (parentsArray.length === 1) {
			const parentPlace = parentsArray[0].position.place

			parentsMid = position.place <= parentPlace ? parentPlace - 0.5 : parentPlace + 0.5
		} else {
			parentsMid = parentsArray.reduce((acc, parent) => acc + parent.position.place, 0) / 2
		}

		styles.borderTop = border

		if (parentsArray.every(parent => parent.position.line)) {
			styles.top = parentsArray[0].position.line * -20
			styles.height = parentsArray[0].position.line * 20 + 20
		}

		if (position.place > parentsMid) {
			styles.right = '49.5%'
			styles.borderRight = border
			styles.width = position.place * 114 - parentsMid * 114 + 1
		} else {
			styles.left = '49.5%'
			styles.borderLeft = border
			styles.width = parentsMid * 114 - position.place * 114 + 1
		}

		if (id === '4-36') styles.width = 171

		return styles
	}

	const setSpouseLineClasses = () => {
		if (!spouse) return ''

		if (Array.isArray(spouse)) return 's-line'

		const spouseObject = data.find(person => person.id === spouse)

		return spouseObject?.position?.place > position.place ? '-line right' : '-line left'
	}

	const setChildrenLineStyles = () => {
		const border = '1px solid black'
		const leftStyles = { left: -0.5, height: 226 - position?.line * 20, borderLeft: border, borderTop: border }
		const rightStyles = { right: -0.5, height: 226 - position?.line * 20, borderRight: border, borderTop: border }

		if (!spouse || Array.isArray(spouse)) {
			const childrenObjects = data.filter(person => children.includes(person.id))

			const childrenMid = childrenObjects.reduce((acc, child) => acc + child.position.place, 0) / children.length

			const exceptions = ['2-6']

			return position.place >= childrenMid || exceptions.includes(id) ? leftStyles : rightStyles
		}

		const spouseObject = data.find(person => person.id === spouse)

		return position.place > spouseObject.position.place ? leftStyles : rightStyles
	}

	return (
		<div
			className="Person"
			style={position ? { top: position.generation * 298 - 298, left: position.place * 114 - 114 } : ''}
		>
			{checkStatus() && <div className={`line top-line`} style={setTopLineStyles()}></div>}
			<div className={`line spouse${setSpouseLineClasses()}`}></div>
			{children.length > 0 && <div className={`line children-line`} style={setChildrenLineStyles()}></div>}

			<NavLink to={`${DEFAULT_URL}/person/${id}`} className="person-link">
				{status === 'creator' && (
					<>
						<Icon icon="noto:star" fontSize={32} className="creator-icon" />
						<span>
							Творець
							<br />
							дерева
						</span>
					</>
				)}
				<div className="image">
					<div className={`gender-line ${gender}`}></div>
					<div className="photo">
						{photo ? (
							<img
								src={photo}
								alt={`${surname ? surname : ''} ${name ? name : ''} ${patronymic ? patronymic : ''}`}
								className={dead ? 'dead' : ''}
							/>
						) : (
							'НЕМАЄ ФОТО'
						)}
					</div>
					{dead && <div className="black-line"></div>}
				</div>
				<div className="info">
					{surname ? surname : ''}
					{maidenName ? (
						<>
							{surname && <br />}({maidenName})
						</>
					) : (
						''
					)}
					{name ? (
						<>
							{(surname || maidenName) && <br />}
							{name}
						</>
					) : (
						''
					)}
					{patronymic ? (
						<>
							{(surname || name) && <br />}
							{patronymic}
						</>
					) : (
						''
					)}
					{birthDate ? (
						<>
							{(surname || name || patronymic) && <br />}
							{birthDate}
						</>
					) : (
						''
					)}
					{dead && deathDate ? (
						<>
							{(surname || name || patronymic) && birthDate.length > 7 && <br />}
							{birthDate.length > 7 ? `- ${deathDate}` : ` - ${deathDate}`}
						</>
					) : (
						''
					)}
				</div>
			</NavLink>

			{/* {areDetailsOpened && <Details key={id} {...props} />} */}
		</div>
	)
}

export default Person
