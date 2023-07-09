import { useState, useEffect } from 'react'
import './Tree.css'
import ZoomButtons from '../ZoomButtons/ZoomButtons'
import Person from '../Person/Person'
import Margin from '../Margin/Margin'
import data from '../../data'

const Tree = () => {
	const scaleMinValue = window.innerHeight / 2150

	const [scale, setScale] = useState(scaleMinValue)
	// const [mouseDown, setMouseDown] = useState(false)

	// useEffect(() => {
	// 	const onScroll = evt => {
	// 		console.log({ evt, window })
	// 	}

	// 	window.addEventListener('scroll', onScroll)

	// 	return () => window.removeEventListener('scroll', onScroll)
	// }, [])

	return (
		<>
			<ZoomButtons scale={scale} setScale={ setScale} scaleMinValue={scaleMinValue} />
			<div
				className="Tree"
				style={{ transform: `matrix(${scale}, 0, 0, ${scale}, 0, 0)` }}
				// onMouseDown={evt => console.log({ evt })}
			>
				{data.map(person => (
					<Person key={person.id} {...person} />
				))}

				{/* <div className="generation">
				<Margin size={4.5} />
				<Person gender="female" status="spouse of relative" dead />
				<Person gender="male" status="relative" surname="Корінь" dead />
				<Margin size={4.5} />
				<Person gender="male" status="relative" surname="Корінь" name="Семен" dead />
				<Person gender="female" status="relative" surname="Корінь" name="Софія" dead />
				<Margin size={3.5} />
				<Person gender="male" status="relative" surname="Корень" name="Карп" dead />
				<Person gender="female" status="relative" surname="Корень" name="Марфа" dead />
				<Margin size={28.5} />
				<Person gender="male" status="relative" surname="Голяк" name="Іван (Яник)" patronymic="Казимирович" dead />
				<Person
					gender="female"
					status="relative"
					surname="Голяк"
					maidenName="Марчук"
					name="Агафія"
					patronymic="Фомівна"
					dead
				/>
				<Margin size={0.5} />
				<Person gender="female" status="relative" maidenName="Марчук" name="Анастасія" patronymic="Фомівна" dead />
				<Margin size={0.5} />
				<Person gender="female" status="relative" maidenName="Марчук" name="Марія" patronymic="Фомівна" dead />
			</div>
			<div className="generation">
				<Margin size={2} />
				<Person gender="female" status="spouse of relative" dead />
				<Person gender="male" status="relative" surname="Корінь" name="Мойсей" dead />
				<Margin size={1.5} />
				<Person gender="female" status="spouse of relative" surname="Корень" name="Серафима" dead />
				<Person gender="male" status="relative" surname="Корень" name="Федір" patronymic="Карпович" dead />
				<Margin size={1} />
				<Person gender="female" status="spouse of relative" surname="Корень" name="Наталія" dead />
				<Person gender="male" status="relative" surname="Корень" name="Василь" patronymic="Карпович" dead />
				<Margin size={1} />
				<Person
					photo={require('../../photos/Яків.JPEG')}
					gender="male"
					status="spouse of relative"
					surname="?"
					name="Яків"
					dead
				/>
				<Person gender="female" status="relative" maidenName="Корінь" name="Анна" patronymic="Семенівна" dead />
				<Margin size={1} />
				<Person gender="male" status="spouse of relative" surname="Турло" name="Іван" dead />
				<Person
					gender="female"
					status="relative"
					surname="Турло"
					maidenName="Корінь"
					name="Євдокія"
					patronymic="Семенівна"
					dead
				/>
				<Margin size={1} />
				<Person gender="female" status="spouse of relative" dead />
				<Person
					photo={require("../../photos/Корінь Дем'ян Семенович.jpg")}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Дем'ян"
					patronymic="Семенович"
					dead
				/>
				<Person gender="female" status="spouse of relative" surname="Корінь" name="Анастасія" dead />
				<Margin size={1} />
				<Person
					photo={require('../../photos/Корінь Іван Семенович.jpg')}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Іван"
					patronymic="Семенович"
					dateOfBirth="1897"
					dead
					dateOfDeath="09.1943"
				/>
				<Person
					photo={require('../../photos/Корінь Парасковія Карпівна.jpg')}
					gender="female"
					status="relative"
					surname="Корінь"
					// maidenName="Корень"
					name="Парасковія"
					patronymic="Карпівна"
					dateOfBirth="10.10.1903"
					dead
					dateOfDeath="01.08.1982"
				/>
				<Margin size={11.5} />
				<Person
					photo={require('../../photos/Лісніченко Никифор.jpg')}
					gender="male"
					status="relative"
					surname="Лісніченко"
					name="Никифор"
					dateOfBirth="?"
					dead
					dateOfDeath="1943"
				/>
				<Person
					gender="female"
					status="relative"
					surname="Лісніченко"
					name="Євдокія"
					dateOfBirth="?"
					dead
					dateOfDeath="1941"
				/>
				<Margin size={4} />
				<Person gender="male" status="relative" surname="Козубський" name="Роман" dead />
				<Person gender="female" status="relative" surname="Козубська" name="Ніна" patronymic="Семенівна" dead />
				<Margin size={1.5} />
				<Person gender="female" status="relative" maidenName="Шпирко" name="Онисія" patronymic="Григорівна" dead />
				<Person
					photo={require('../../photos/Шпирко Іван Григорович.jpg')}
					gender="male"
					status="relative"
					surname="Шпирко"
					name="Іван"
					patronymic="Григорович"
					dateOfBirth="04.07.1924"
					dead
					dateOfDeath="1978"
				/>
				<Person
					photo={require('../../photos/Шпирко (Голяк) Олена Іванівна.jpg')}
					gender="female"
					status="relative"
					surname="Шпирко"
					maidenName="Голяк"
					name="Олена"
					patronymic="Іванівна"
					dateOfBirth="22.04.1924"
					dead
					dateOfDeath="15.03.1998"
				/>
				<Margin size={1} />
				<Person gender="male" status="spouse of relative" surname="Жуков" name="Микола" dead />
				<Person
					gender="female"
					status="relative"
					surname="Жукова"
					maidenName="Голяк"
					name="Марія"
					patronymic="Іванівна"
					dead
				/>
				<Margin size={1} />
				<Person
					photo={require('../../photos/Жорницький Микола Петрович.jpg')}
					gender="male"
					status="spouse of relative"
					surname="Жорницький"
					name="Микола"
					patronymic="Петрович"
					dateOfBirth="21.02.1932"
					dead
					dateOfDeath="06.10.2015"
				/>
				<Person
					photo={require('../../photos/Жорницька (Голяк) Зинаїда Іванівна.jpg')}
					gender="female"
					status="relative"
					surname="Жорницька"
					maidenName="Голяк"
					name="Зінаїда"
					patronymic="Іванівна"
					dateOfBirth="30.01.1929"
					dead
					dateOfDeath="13.01.2013"
				/>
			</div>
			<div className="generation">
				<Margin size={1} />
				<Person gender="male" status="spouse of relative" surname="Виноградний" dead />
				<Person
					gender="female"
					status="relative"
					surname="Виноградна"
					maidenName="Корінь"
					name="Лідія"
					patronymic="Мойсеївна"
					dateOfBirth="1938"
				/>
				<Margin size={0.5} />
				<Person gender="male" status="spouse of relative" surname="Матлак" name="Георгій" />
				<Person
					gender="female"
					status="relative"
					surname="Матлак"
					maidenName="Корень"
					name="Любов"
					patronymic="Федорівна"
				/>
				<Person
					gender="male"
					status="relative"
					surname="Корень"
					name="Андрій"
					patronymic="Федорович"
					dateOfBirth="?"
					dead
					dateOfDeath="09.1943"
				/>
				<Person gender="female" status="relative" maidenName="Корень" name="Галина" patronymic="Василівна" dead />
				<Person
					photo={require('../../photos/Корінь Петро Васильович.jpg')}
					gender="male"
					status="relative"
					surname="Корень"
					name="Петро"
					patronymic="Васильович"
					dateOfBirth="12.07.1931"
					dead
					dateOfDeath="03.05.1980"
				/>
				<Person
					photo={require('../../photos/Корінь Галина Григорівна.jpg')}
					gender="female"
					status="spouse of relative"
					surname="Корень"
					name="Галина"
					patronymic="Григорівна"
					dateOfBirth="25.03.1937"
					dead
					dateOfDeath="05.03.2005"
				/>
				<Person gender="female" status="relative" maidenName="Корень" name="Матрьона" patronymic="Василівна" />
				<Person gender="female" status="relative" maidenName="Корень" name="Ольга" patronymic="Василівна" />
				<Person gender="female" status="relative" maidenName="Корень" name="Віра" patronymic="Василівна" />
				<Person gender="female" status="spouse of relative" />
				<Person gender="male" status="relative" surname="Турло" name="Олександр" patronymic="Іванович" dead />
				<Person gender="female" status="relative" maidenName="Турло" name="Надія" patronymic="Іванівна" dead />
				<Person gender="female" status="relative" maidenName="Турло" name="Марія" patronymic="Іванівна" dead />
				<Person
					photo={require('../../photos/Крисанов Афіноген Костянтинович.jpg')}
					gender="male"
					status="spouse of relative"
					surname="Крисанов"
					name="Афіноген"
					patronymic="Костянтинович"
					dateOfBirth="02.09.1932"
					dead
					dateOfDeath="24.02.2012"
				/>
				<Person
					photo={require("../../photos/Крисанова (Корінь) Віра Дем'янівна.jpg")}
					gender="female"
					status="relative"
					surname="Крисанова"
					maidenName="Корінь"
					name="Віра"
					patronymic="Дем'янівна"
					dateOfBirth="23.12.1936"
					dead
					dateOfDeath="11.04.2017"
				/>
				<Person gender="male" status="relative" surname="Корінь" name="Володимир" patronymic="Дем'янович" />
				<Margin size={0.5} />
				<Person
					photo={require('../../photos/Корінь Михайло Іванович.JPEG')}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Михайло"
					patronymic="Іванович"
					dateOfBirth="1921"
					dead
					dateOfDeath="09.1943"
				/>
				<Person
					photo={require('../../photos/Сердцева (Корінь) Софія Іванівна.jpg')}
					gender="female"
					status="relative"
					surname="Сердцева"
					maidenName="Корінь"
					name="Софія"
					patronymic="Іванівна"
					dateOfBirth="18.12.1924"
					dead
					dateOfDeath="11.07.1990"
				/>
				<Person
					photo={require("../../photos/Сердцев Анатолій (Антип) Гур'янович.jpg")}
					gender="male"
					status="spouse of relative"
					surname="Сердцев"
					name="Анатолій (Антип)"
					patronymic="Гур'янович"
					dateOfBirth="23.04.1926"
					dead
					dateOfDeath="17.04.1992"
				/>
				<Person
					photo={require('../../photos/Корінь Василь Іванович.jpg')}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Василь"
					patronymic="Іванович"
					dateOfBirth="1927"
					dead
					dateOfDeath="09.1943"
				/>
				<Person
					photo={require('../../photos/Міхєєва (Корінь) Марія Іванівна.jpg')}
					gender="female"
					status="relative"
					surname="Міхєєва"
					maidenName="Корінь"
					name="Марія"
					patronymic="Іванівна"
					dateOfBirth="20.09.1929"
					dead
					dateOfDeath="25.07.1990"
				/>
				<Person gender="male" status="spouse of relative" surname="Міхєєв" name="Олексій (Леонід)" dead />
				<Person
					photo={require('../../photos/Корінь Павло Іванович.jpg')}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Павло"
					patronymic="Іванович"
					dateOfBirth="01.01.1931"
					dead
					dateOfDeath="27.05.2013"
				/>
				<Person
					gender="female"
					status="spouse of relative"
					surname="Корінь"
					maidenName="Пиць"
					name="Ніна"
					patronymic="Василівна"
					dateOfBirth="02.05.1938"
					dead
					dateOfDeath="08.2010"
				/>
				<Margin size={1} />
				<Person
					photo={require('../../photos/Корінь Микола Іванович.jpg')}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Микола"
					patronymic="Іванович"
					dateOfBirth="16.11.1935"
					dead
					dateOfDeath="09.03.2018"
				/>
				<Person
					photo={require('../../photos/Корінь Анна (Галина) Іванівна.jpg')}
					gender="female"
					status="spouse of relative"
					surname="Корінь"
					name="Анна (Галина)"
					patronymic="Іванівна"
					dateOfBirth="02.01.1935"
					dead
					dateOfDeath="24.06.1978"
				/>
				<Margin size={1} />
				<Person
					photo={require('../../photos/Корінь Надія Акимівна.jpg')}
					gender="female"
					status="spouse of relative"
					surname="Корінь"
					name="Надія"
					patronymic="Акимівна"
					dateOfBirth="07.11.1949"
					dead
					dateOfDeath="20.12.2008"
				/>
				<Person
					photo={require('../../photos/Корінь Олександр Іванович 2.jpg')}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Олександр"
					patronymic="Іванович"
					dateOfBirth="08.09.1940"
					dead
					dateOfDeath="25.09.2000"
				/>
				<Margin size={1} />
				<Person
					photo={require('../../photos/Лісніченко Петро Никифорович.jpg')}
					gender="male"
					status="relative"
					surname="Лісніченко"
					name="Петро"
					patronymic="Никифорович"
					dateOfBirth="1936"
					dead
					dateOfDeath="1981"
				/>
				<Person
					photo={require('../../photos/Лісніченко Микола Никифорович.jpg')}
					gender="male"
					status="relative"
					surname="Лісніченко"
					name="Микола"
					patronymic="Никифорович"
					dateOfBirth="03.07.1938"
					dead
					dateOfDeath="21.01.2015"
				/>
				<Person
					photo={require('../../photos/Лісніченко (Корінь) Надія Іванівна.JPG')}
					gender="female"
					status="relative"
					surname="Лісніченко"
					maidenName="Корінь"
					name="Надія"
					patronymic="Іванівна"
					dateOfBirth="16.05.1938"
					dead
					dateOfDeath="11.06.2023"
				/>
				<Margin size={2} />
				<Person
					photo={require('../../photos/Козубський Юрій Романович.jpg')}
					gender="male"
					status="relative"
					surname="Козубський"
					name="Юрій"
					patronymic="Романович"
					dateOfBirth="15.05.1947"
					dead
					dateOfDeath="1992/1995"
				/>
				<Person
					photo={require('../../photos/Басанько (Шпирко) Марія Іванівна.jpg')}
					gender="female"
					status="relative"
					surname="Басанько"
					maidenName="Шпирко"
					name="Марія"
					patronymic="Іванівна"
					dateOfBirth="18.04.1946"
					dead
					dateOfDeath="24.02.2010"
				/>
				<Person
					gender="male"
					status="relative"
					surname="Шпирко"
					name="Андрій"
					patronymic="Іванович"
					dateOfBirth="1942"
					dead
					dateOfDeath="1943"
				/>
				<Person
					photo={require('../../photos/Грималовський Петро Петрович.JPG')}
					gender="male"
					status="spouse of relative"
					surname="Грималовський"
					name="Петро"
					patronymic="Петрович"
					dateOfBirth="04.02.1949"
				/>
				<Person
					photo={require('../../photos/Грималовська (Шпирко) Ніна Іванівна.JPG')}
					gender="female"
					status="relative"
					surname="Грималовська"
					maidenName="Шпирко"
					name="Ніна"
					patronymic="Іванівна"
					dateOfBirth="01.04.1950"
				/>
				<Person
					photo={require('../../photos/Ульянічева (Шпирко) Людмила Іванівна.jpg')}
					gender="female"
					status="relative"
					surname="Ульянічева"
					maidenName="Шпирко"
					name="Людмила"
					patronymic="Іванівна"
					dateOfBirth="29.07.1957"
				/>
				<Person
					photo={require('../../photos/Ульянічев Юрій Андрійович.JPG')}
					gender="male"
					status="spouse of relative"
					surname="Ульянічев"
					name="Юрій"
					patronymic="Андрійович"
					dateOfBirth="13.03.1955"
					dead
					dateOfDeath="01.12.2005"
				/>
				<Person gender="female" status="relative" maidenName="Козубська" name="Зінаїда" patronymic="Романівна" />
				<Person gender="male" status="relative" surname="Козубський" name="Олег" patronymic="Романович" />
				<Person />
				<Person />
				<Person
					photo={require('../../photos/Лапко (Жукова) Тетяна Миколаївна.JPG')}
					gender="female"
					status="relative"
					surname="Лапко"
					maidenName="Жукова"
					name="Тетяна"
					patronymic="Миколаївна"
					dateOfBirth="15.10.1962"
				/>
				<Person gender="male" status="spouse of relative" surname="Лапко" name="Анатолій" />
				<Person
					gender="female"
					status="spouse of relative"
					surname="Жорницька"
					maidenName="Клейнерман"
					name="Галина"
					patronymic="Петрівна"
					dateOfBirth="23.02.1957"
				/>
				<Person
					photo={require('../../photos/Жорницький Микола Миколайович.jpg')}
					gender="male"
					status="relative"
					surname="Жорницький"
					name="Микола"
					patronymic="Миколайович"
					dateOfBirth="01.03.1957"
				/>
				<Person gender="female" status="spouse of relative" surname="Жорницька" name="Ольга" />
				<Person
					photo={require('../../photos/Жорницька Тетяна Миколаївна.JPG')}
					gender="female"
					status="relative"
					surname="Жорницька"
					name="Тетяна"
					patronymic="Миколаївна"
					dateOfBirth="10.10.1958"
				/>
				<Person
					gender="male"
					status="spouse of relative"
					surname="Щербенєв"
					name="Анатолій"
					patronymic="Павлович"
					dateOfBirth="22.01.1956"
				/>
			</div>
			<div className="generation">
				<Person gender="male" status="relative" surname="Виноградний" />
				<Person gender="male" status="spouse of relative" />
				<Person
					photo={require('../../photos/Матлак Галина.JPEG')}
					gender="female"
					status="relative"
					maidenName="Матлак"
					name="Галина"
					patronymic="Георгіївна"
				/>
				<Person
					gender="male"
					status="relative"
					surname="Матлак"
					name="Анатолій"
					patronymic="Георгійович"
					dateOfBirth="1950(?)"
					dead
					dateOfDeath="?"
				/>
				<Person gender="female" status="spouse of relative" />
				<Person
					photo={require('../../photos/Матлак Леонід.JPEG')}
					gender="male"
					status="relative"
					surname="Матлак"
					name="Леонід"
					patronymic="Георгійович"
					dead
				/>
				<Person gender="female" status="spouse of relative" />
				<Person gender="female" status="relative" maidenName="Матлак" name="Валентина" patronymic="Георгіївна" />
				<Person gender="male" status="relative" surname="Матлак" name="Михайло" patronymic="Георгійович" dead />
				<Person gender="female" status="spouse of relative" />
				<Person gender="male" status="spouse of relative" surname="Юрченко" name="Олег" />
				<Person
					gender="female"
					status="relative"
					surname="Юрченко"
					maidenName="Корень"
					name="Ольга"
					patronymic="Петрівна"
					dateOfBirth="?.03.?"
				/>
				<Person
					gender="female"
					status="relative"
					surname="Трошкова"
					maidenName="Корень"
					name="Тетяна"
					patronymic="Петрівна"
					dateOfBirth="08.01.1959"
				/>
				<Person
					gender="male"
					status="spouse of relative"
					surname="Трошков"
					name="Василь"
					dateOfBirth="01.01.1960 (30.12.1959)"
				/>
				<Person gender="male" status="relative" surname="Турло" name="Олександр" patronymic="Олександрович" />
				<Person gender="female" status="spouse of relative" surname="Крисанова" name="Ніна" />
				<Person
					gender="male"
					status="relative"
					surname="Крисанов"
					name="Віктор"
					patronymic="Афіногенович"
					dateOfBirth="1958(?)"
				/>
				<Person gender="male" status="relative" surname="Крисанов" />
				<Person gender="female" status="spouse of relative" surname="Крисанова" />
				<Person
					photo={require('../../photos/Сердцева Таїсія Тимофіївна.jpg')}
					gender="female"
					status="spouse of relative"
					surname="Сердцева"
					name="Таїсія"
					patronymic="Тимофіївна"
					dateOfBirth="26.03.1952"
				/>
				<Person
					photo={require('../../photos/Сердцев Петро Анатолійович.jpg')}
					gender="male"
					status="relative"
					surname="Сердцев"
					name="Петро"
					patronymic="Анатолійович"
					dateOfBirth="15.06.1951"
				/>
				<Person
					photo={require('../../photos/Гоголь (Сердцева) Ніна Анатоліївна.jpg')}
					gender="female"
					status="relative"
					surname="Гоголь"
					maidenName="Сердцева"
					name="Ніна"
					patronymic="Анатоліївна"
					dateOfBirth="15.03.1957"
					dead
					dateOfDeath="25.12.2014"
				/>
				<Person
					photo={require('../../photos/Сердцева Неля Анатоліївна.jpg')}
					gender="female"
					status="relative"
					surname="Сердцева"
					name="Неля"
					patronymic="Анатоліївна"
					dateOfBirth="01.01.1965"
				/>
				<Person gender="male" status="spouse of relative" surname="Сахно" />
				<Person
					gender="female"
					status="relative"
					surname="Сахно"
					maidenName="Корінь"
					name="Валентина"
					patronymic="Павлівна"
					dateOfBirth="04.09.1958"
					dead
					dateOfDeath="27.02.2016"
				/>
				<Person
					photo={require('../../photos/Корінь Олександр Павлович.jpg')}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Олександр"
					patronymic="Павлович"
					dateOfBirth="22.11.1962"
				/>
				<Person
					photo={require('../../photos/Корінь Любов.jpg')}
					gender="female"
					status="spouse of relative"
					surname="Корінь"
					maidenName="Давиденко"
					name="Любов"
					patronymic="Андріївна"
					dateOfBirth="20.06.1965"
				/>
				<Person
					photo={require('../../photos/Бердник (Корінь) Ольга Миколаївна.jpg')}
					gender="female"
					status="relative"
					surname="Бердник"
					maidenName="Корінь"
					name="Ольга"
					patronymic="Миколаївна"
					dateOfBirth="27.10.1956"
				/>
				<Person
					photo={require('../../photos/Бердник Михайло.jpg')}
					gender="male"
					status="spouse of relative"
					surname="Бердник"
					name="Михайло"
					dateOfBirth="02.06.1958"
					dead
					dateOfDeath="2016"
				/>
				<Person
					photo={require('../../photos/Корінь Валентин Миколайович.JPEG')}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Валентин"
					patronymic="Миколайович"
					dateOfBirth="26.01.1961"
				/>
				<Person
					photo={require('../../photos/Паніна (Корінь) Любов Миколаївна.jpg')}
					gender="female"
					status="relative"
					surname="Паніна"
					maidenName="Корінь"
					name="Любов"
					patronymic="Миколаївна"
					dateOfBirth="19.09.1963"
				/>
				<Person
					photo={require('../../photos/Панін Михайло Іванович.jpg')}
					gender="male"
					status="spouse of relative"
					surname="Панін"
					name="Михайло"
					patronymic="Іванович"
					dateOfBirth="29.12.1967"
				/>
				<Person
					photo={require('../../photos/Копан (Корінь) Світлана Олександрівна.jpg')}
					gender="female"
					status="relative"
					surname="Копан"
					maidenName="Корінь"
					name="Світлана"
					patronymic="Олександрівна"
					dateOfBirth="08.02.1974"
				/>
				<Person />
				<Person gender="female" status="relative" />
				<Person />
				<Person
					photo={require('../../photos/Піскунов Андрій Миколайович.jpg')}
					gender="male"
					status="spouse of relative"
					surname="Піскунов"
					name="Андрій"
					patronymic="Миколайович"
					dateOfBirth="07.04.1973"
				/>
				<Person
					photo={require('../../photos/Піскунова (Лісніченко) Інна Миколаївна.jpg')}
					gender="female"
					status="relative"
					surname="Піскунова"
					maidenName="Лісніченко"
					name="Інна"
					patronymic="Миколаївна"
					dateOfBirth="14.10.1977"
				/>
				<Person
					gender="male"
					status="relative"
					surname="Рак"
					name="Олексій"
					patronymic="Олексійович"
					dateOfBirth="24.07.1972"
				/>
				<Person
					gender="female"
					status="relative"
					surname="Рак"
					maidenName="Магировська"
					name="Тетяна"
					patronymic="Сергіївна"
					dateOfBirth="13.03.1975"
				/>
				<Person
					photo={require('../../photos/Козубська (Лісніченко) Олена Миколаївна.jpg')}
					gender="female"
					status="relative"
					surname="Козубська"
					maidenName="Лісніченко"
					name="Олена"
					patronymic="Миколаївна"
					dateOfBirth="28.03.1969"
				/>
				<Person
					photo={require('../../photos/Козубський Ігор Юрійович.jpg')}
					gender="male"
					status="relative"
					surname="Козубський"
					name="Ігор"
					patronymic="Юрійович"
					dateOfBirth="28.09.1969"
				/>
				<Person
					photo={require('../../photos/Басанько Інна Михайлівна.jpg')}
					gender="female"
					status="relative"
					surname="Басанько"
					name="Інна"
					patronymic="Михайлівна"
					dateOfBirth="17.01.1980"
				/>
				<Person
					photo={require('../../photos/Дембицький Євгеній Михайлович.JPG')}
					gender="male"
					status="spouse of relative"
					surname="Дембицький"
					name="Євгеній"
					patronymic="Михайлович"
					dateOfBirth="09.02.1981"
				/>
				<Person
					photo={require('../../photos/Грималовський (Сирота) Юрій Миколайович.jpg')}
					gender="male"
					status="spouse of relative"
					surname="Грималовський"
					maidenName="Сирота"
					name="Юрій"
					patronymic="Миколайович"
					dateOfBirth="11.07.1973"
				/>
				<Person
					photo={require('../../photos/Грималовська Наталія Петрівна.jpg')}
					gender="female"
					status="relative"
					surname="Грималовська"
					name="Наталія"
					patronymic="Петрівна"
					dateOfBirth="20.12.1972"
				/>
				<Person
					photo={require('../../photos/Грималовська Альона Петрівна.JPG')}
					gender="female"
					status="relative"
					surname="Грималовська"
					name="Альона"
					patronymic="Петрівна"
					dateOfBirth="21.08.1981"
				/>
				<Person />
				<Person />
				<Person />
				<Person />
				<Person gender="female" status="relative" maidenName="Лапко" name="Ольга" patronymic="Анатоліївна" />
				<Person gender="female" status="relative" maidenName="Лапко" name="Надія" patronymic="Анатоліївна" />
				<Person
					photo={require('../../photos/Жорницький Євгеній Миколайович.jpg')}
					gender="male"
					status="relative"
					surname="Жорницький"
					name="Євгеній"
					patronymic="Миколайович"
					dateOfBirth="11.11.1973"
				/>
				<Person
					photo={require('../../photos/Клейнерман Дмитро Миколайович.jpg')}
					gender="male"
					status="relative"
					surname="Клейнерман"
					name="Дмитро"
					patronymic="Миколайович"
				/>
				<Person gender="female" status="spouse of relative" />
				<Person
					photo={require('../../photos/Щербенєв Максим Анатолійович.jpg')}
					gender="male"
					status="relative"
					surname="Щербенєв"
					name="Максим"
					patronymic="Анатолійович"
					dateOfBirth="03.09.1981"
				/>
				<Person
					photo={require('../../photos/Щербенєв Павло Анатолійович.jpg')}
					gender="male"
					status="relative"
					surname="Щербенєв"
					name="Павло"
					patronymic="Анатолійович"
					dateOfBirth="05.03.1988"
				/>
			</div>
			<div className="generation">
				<Margin size={0.5} />
				<Person />
				<Margin size={0.5} />
				<Person gender="female" status="relative" surname="?" name="Віра" />
				<Person gender="female" status="relative" surname="?" name="Євгенія" />
				<Person
					gender="female"
					status="relative"
					surname="Гавриловська"
					maidenName="Матлак"
					name="Оксана"
					patronymic="Анатоліївна"
					dateOfBirth="11.12.1973"
				/>
				<Person gender="male" status="spouse of relative" surname="Гавриловський" />
				<Person
					gender="female"
					status="relative"
					maidenName="Матлак"
					name="Людмила"
					patronymic="Леонідівна"
					dateOfBirth="1976"
				/>
				<Person gender="male" status="spouse of relative" />
				<Margin size={0.5} />
				<Person gender="female" status="relative" />
				<Margin size={0.5} />
				<Person gender="male" status="relative" surname="Юрченко" name="Юрій" patronymic="Олегович" />
				<Person
					photo={require('../../photos/Трошков Максим Васильович.jpg')}
					gender="male"
					status="relative"
					surname="Трошков"
					name="Максим"
					patronymic="Васильович"
					dateOfBirth="15.05.1983"
				/>
				<Person
					gender="female"
					status="relative"
					surname="Дзюба"
					maidenName="Трошкова"
					name="Єкатерина"
					patronymic="Василівна"
					dateOfBirth="25.06.1989"
				/>
				<Person gender="male" status="spouse of relative" surname="Дзюба" name="Павло" />
				<Person gender="female" status="relative" maidenName="Крисанова" name="?" patronymic="Вікторівна" />
				<Person gender="female" status="relative" maidenName="Крисанова" />
				<Person
					photo={require('../../photos/Сердцева Юлія Петрівна.JPG')}
					gender="female"
					status="relative"
					surname="Степура"
					maidenName="Сердцева"
					name="Юлія"
					patronymic="Петрівна"
					dateOfBirth="12.11.1976"
				/>
				<Person gender="male" status="spouse of relative" surname="Степура" name="Андрій" />
				<Person
					photo={require('../../photos/Сердцев Артем Петрович.jpg')}
					gender="male"
					status="relative"
					surname="Сердцев"
					name="Артем"
					patronymic="Петрович"
					dateOfBirth="15.02.1984"
				/>
				<Person
					photo={require('../../photos/Сердцева-Макарчук Євгенія.jpg')}
					gender="female"
					status="spouse of relative"
					surname="Сердцева-Макарчук"
					name="Євгенія"
					dateOfBirth="30.07.1988"
				/>
				<Person
					photo={require('../../photos/Гоголь Дмитро Віталійович.jpg')}
					gender="male"
					status="relative"
					surname="Гоголь"
					name="Дмитро"
					patronymic="Віталійович"
					dateOfBirth="03.12.1978"
				/>
				<Person
					photo={require('../../photos/Гоголь Євгеній Віталійович.jpg')}
					gender="male"
					status="relative"
					surname="Гоголь"
					name="Євгеній"
					patronymic="Віталійович"
					dateOfBirth="24.05.1981"
				/>
				<Person
					photo={require('../../photos/Ярмак Яна Олександрівна.jpg')}
					gender="female"
					status="relative"
					surname="Ярмак"
					name="Яна"
					patronymic="Олександрівна"
					dateOfBirth="10.08.1986"
				/>
				<Person gender="female" status="relative" />
				<Person gender="female" status="relative" />
				<Person
					photo={require('../../photos/Корінь (Поліщук) Зоряна Володимирівна.JPG')}
					gender="female"
					status="spouse of relative"
					surname="Корінь"
					maidenName="Поліщук"
					name="Зоряна"
					patronymic="Володимирівна"
					dateOfBirth="29.09.1983"
				/>
				<Person
					photo={require('../../photos/Корінь Олександр Олександрович.jpg')}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Олександр"
					patronymic="Олександрович"
					dateOfBirth="02.08.1985"
				/>
				<Person
					photo={require('../../photos/Корінь Маргарита Олександрівна.jpg')}
					gender="female"
					status="relative"
					surname="Корінь"
					name="Маргарита"
					patronymic="Олександрівна"
					dateOfBirth="30.07.1992"
				/>
				<Person
					photo={require('../../photos/Баранкова (Капран) Валентина Анатоліївна.jpg')}
					gender="female"
					status="relative"
					surname="Баранкова"
					maidenName="Капран"
					name="Валентина"
					patronymic="Анатоліївна"
					dateOfBirth="29.07.1987"
				/>
				<Person
					photo={require('../../photos/Баранков Євгеній.jpg')}
					gender="male"
					status="spouse of relative"
					surname="Баранков"
					name="Євгеній"
					dateOfBirth="13.06.1985"
				/>
				<Person
					photo={require('../../photos/Баранова (Паніна) Тетяна Михайлівна.jpg')}
					gender="female"
					status="relative"
					surname="Баранова"
					maidenName="Паніна"
					name="Тетяна"
					patronymic="Михайлівна"
					dateOfBirth="02.08.1987"
				/>
				<Person
					photo={require('../../photos/Баранов Анатолій Андрійович.jpg')}
					gender="male"
					status="spouse of relative"
					surname="Баранов"
					name="Анатолій"
					patronymic="Андрійович"
					dateOfBirth="17.04.1990"
				/>
				<Person
					photo={require('../../photos/Панін Іван Михайлович.jpg')}
					gender="male"
					status="relative"
					surname="Панін"
					name="Іван"
					patronymic="Михайлович"
					dateOfBirth="21.04.1994"
				/>
				<Person
					photo={require('../../photos/Паніна Юлія.jpg')}
					gender="female"
					status="spouse of relative"
					surname="Паніна"
					name="Юлія"
					dateOfBirth="10.01.1996"
				/>
				<Person
					photo={require('../../photos/Копан Олександр Вікторович.jpg')}
					gender="male"
					status="relative"
					surname="Копан"
					name="Олександр"
					patronymic="Вікторович"
					dateOfBirth="03.02.1997"
				/>
				<Person gender="female" status="spouse of relative" />
				<Margin size={0.5} />
				<Person
					photo={require('../../photos/Піскунов Максим Андрійович.jpg')}
					gender="male"
					status="relative"
					surname="Піскунов"
					name="Максим"
					patronymic="Андрійович"
					dateOfBirth="27.03.2001"
				/>
				<Margin size={0.5} />
				<Person
					gender="male"
					status="relative"
					surname="Рак"
					name="Олександр"
					patronymic="Олексійович"
					dateOfBirth="15.05.1995"
				/>
				<Person
					photo={require('../../photos/(Рак) Олена Олексіївна.PNG')}
					gender="female"
					status="relative"
					maidenName="Рак"
					name="Олена"
					patronymic="Олексіївна"
					dateOfBirth="05.04.2000"
				/>
				<Person
					photo={require('../../photos/Козубський Денис Ігорович.jpg')}
					gender="male"
					status="creator"
					surname="Козубський"
					name="Денис"
					patronymic="Ігорович"
					dateOfBirth="26.07.1993"
				/>
				<Margin size={1} />
				<Person
					photo={require('../../photos/Дембицька Єлизавета Євгенівна.jpg')}
					gender="female"
					status="relative"
					surname="Дембицька"
					name="Єлизавета"
					patronymic="Євгенівна"
					dateOfBirth="01.11.2011"
				/>
				<Margin size={0.5} />
				<Person
					gender="female"
					status="relative"
					surname="Грималовська"
					name="Юлія"
					patronymic="Юріївна"
					dateOfBirth="25.04.1996"
					dead
					dateOfDeath="10.11.2002"
				/>
				<Person
					gender="female"
					status="relative"
					surname="Грималовська"
					name="Анастасія"
					patronymic="Юріївна"
					dateOfBirth="01.11.1998"
					dead
					dateOfDeath="10.11.2002"
				/>
				<Person
					photo={require('../../photos/Грималовська Дарина Юріївна.JPG')}
					gender="female"
					status="relative"
					surname="Грималовська"
					name="Дарина"
					patronymic="Юріївна"
					dateOfBirth="01.09.2014"
				/>
				<Person
					photo={require('../../photos/Грималовська Єлизавета Юнусівна.JPG')}
					gender="female"
					status="relative"
					surname="Імамова"
					name="Єлизавета"
					patronymic="Юнусівна"
					dateOfBirth="06.02.2010"
				/>
			</div>
			<div className="generation">
				<Margin size={6.5} />
				<Person gender="female" status="relative" surname="?" name="Альона" dateOfBirth="?.01.1997" />
				<Person gender="male" status="spouse of relative" />
				<Margin size={7} />
				<Person
					photo={require('../../photos/Луньова Анна Генадіївна.jpg')}
					gender="female"
					status="relative"
					surname="Луньова"
					name="Анна"
					patronymic="Генадіївна"
					dateOfBirth="24.11.2004"
				/>
				<Person
					photo={require('../../photos/Степура Платон Андрійович.jpg')}
					gender="male"
					status="relative"
					surname="Степура"
					name="Платон"
					patronymic="Андрійович"
					dateOfBirth="07.07.2017"
				/>
				<Margin />
				<Person
					photo={require('../../photos/Сердцев Єгор Артемович.JPG')}
					gender="male"
					status="relative"
					surname="Сердцев"
					name="Єгор"
					patronymic="Артемович"
					dateOfBirth="13.11.2013"
				/>
				<Margin size={2} />
				<Person
					photo={require('../../photos/Ярмак Ілля Вадимович.jpg')}
					gender="male"
					status="relative"
					surname="Ярмак"
					name="Ілля"
					patronymic="Вадимович"
					dateOfBirth="18.12.2007"
				/>
				<Person
					photo={require('../../photos/Ярмак Анна Василівна.jpg')}
					gender="female"
					status="relative"
					surname="Ярмак"
					name="Анна"
					patronymic="Василівна"
					dateOfBirth="12.02.2014"
				/>
				<Margin size={1.5} />
				<Person
					photo={require('../../photos/Корінь Лев Олександрович.jpg')}
					gender="male"
					status="relative"
					surname="Корінь"
					name="Лев"
					patronymic="Олександрович"
					dateOfBirth="23.07.2011"
				/>
				<Person
					gender="female"
					status="relative"
					surname="Корінь"
					name="Божена"
					patronymic="Олександрівна"
					dateOfBirth="01.10.2018"
				/>
				<Margin size={1} />
				<Person
					photo={require('../../photos/Баранков Євгеній Євгенович.jpg')}
					gender="male"
					status="relative"
					surname="Баранков"
					name="Євгеній"
					patronymic="Євгенович"
					dateOfBirth="17.10.2009"
				/>
				<Person
					photo={require('../../photos/Баранкова Єва Євгенівна.jpg')}
					gender="female"
					status="relative"
					surname="Баранкова"
					name="Єва"
					patronymic="Євгенівна"
				/>
				<Person
					photo={require('../../photos/Баранкова Софія Євгенівна.jpg')}
					gender="female"
					status="relative"
					surname="Баранкова"
					name="Софія"
					patronymic="Євгенівна"
				/>
				<Person
					photo={require('../../photos/Баранова Поліна Анатоліївна.jpg')}
					gender="female"
					status="relative"
					surname="Баранова"
					name="Поліна"
					patronymic="Анатоліївна"
					dateOfBirth="19.10.2013"
				/>
				<Margin size={0.5} />
				<Person
					photo={require('../../photos/Панін Михайло Іванович (внук).jpg')}
					gender="male"
					status="relative"
					surname="Панін"
					name="Михайло"
					patronymic="Іванович"
					dateOfBirth="06.03.2020"
				/>
			</div>
			<div className="generation">
				<Margin size={7} />
				<Person />
			</div> */}
			</div>
		</>
	)
}

export default Tree
