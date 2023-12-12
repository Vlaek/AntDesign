import { Row, Col } from 'antd'
import { CardProfile } from '../../components/CardProfile/CardProfile'
import { CardProject } from '../../components/CardProject/CardProject'
import styles from './About.module.scss'

export const data = [
	<div className={styles.article}>
		<div className={styles.header}>What are we doing</div>
		<div className={styles.main}>
			<img
				src='https://images.unsplash.com/photo-1596705210503-d50f0ac5e5c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				className={styles.img}
			/>
			<p className={styles.text}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
				consequuntur, dolore sapiente laudantium exercitationem corrupti et,
				sint nisi quaerat animi rerum quidem delectus voluptate ea earum commodi
				hic illo deleniti mollitia dolorum corporis laboriosam modi? Ex nam
				quidem mollitia laborum deserunt, tempore eligendi reiciendis quae,
				obcaecati, nihil dignissimos sequi doloribus sapiente doloremque veniam
				delectus cum tempora saepe enim quas sit? Modi nam officiis, tenetur
				beatae architecto neque voluptas. Assumenda incidunt, blanditiis
				deserunt eveniet voluptatibus ut voluptate ipsam dicta repudiandae, sunt
				consequuntur veritatis doloribus excepturi cum libero accusantium labore
				iste ratione cupiditate! Architecto illo molestiae quos facilis
				voluptates inventore corrupti accusantium.
			</p>
		</div>
		<div className={styles.main}>
			<img
				src='https://images.unsplash.com/photo-1625891825443-35ad23b8edb2?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				className={styles.img + ' ' + styles.left}
			/>
			<p className={styles.text}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
				consequuntur, dolore sapiente laudantium exercitationem corrupti et,
				sint nisi quaerat animi rerum quidem delectus voluptate ea earum commodi
				hic illo deleniti mollitia dolorum corporis laboriosam modi? Ex nam
				quidem mollitia laborum deserunt, tempore eligendi reiciendis quae,
				obcaecati, nihil dignissimos sequi doloribus sapiente doloremque veniam
				delectus cum tempora saepe enim quas sit? Modi nam officiis, tenetur
				beatae architecto neque voluptas. Assumenda incidunt, blanditiis
				deserunt eveniet voluptatibus ut voluptate ipsam dicta repudiandae, sunt
				consequuntur veritatis doloribus excepturi cum libero accusantium labore
				iste ratione cupiditate! Architecto illo molestiae quos facilis
				voluptates inventore corrupti accusantium. Assumenda incidunt,
				blanditiis deserunt eveniet voluptatibus ut voluptate ipsam dicta
				repudiandae, sunt consequuntur veritatis doloribus excepturi cum libero
				accusantium labore iste ratione cupiditate! Architecto illo molestiae
				quos facilis voluptates inventore corrupti accusantium. Assumenda
				incidunt, blanditiis deserunt eveniet voluptatibus ut voluptate ipsam
				dicta repudiandae, sunt consequuntur veritatis doloribus excepturi cum
				libero accusantium labore iste ratione cupiditate! Architecto illo
				molestiae quos facilis voluptates inventore corrupti accusantium.
				Assumenda incidunt, blanditiis deserunt eveniet voluptatibus ut
				voluptate ipsam dicta repudiandae, sunt consequuntur veritatis doloribus
				excepturi cum libero accusantium labore iste ratione cupiditate!
				Architecto illo molestiae quos facilis voluptates inventore corrupti
				accusantium.
			</p>
		</div>
	</div>,
	<div className={styles.article}>
		<div className={styles.header}>Our Team</div>
		<div className={styles.cards}>
			<CardProfile
				src={
					'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
				}
				title={'Fu Xiaofan'}
				subtitle={'lorem@mail.com'}
				text={'Senior Developer'}
				link={'https://ant.design'}
			/>

			<CardProfile
				src={
					'https://img.freepik.com/premium-photo/computer-engineer-male-asian-young-adult-developing-software-and-coding-programs-for-new-technology-products-generative-ai-aig22_31965-141792.jpg'
				}
				title={'Yao Shirong'}
				subtitle={'lorem@mail.com'}
				text={'Frontend developer'}
				link={'https://ant.design'}
			/>

			<CardProfile
				src={
					'https://elements-video-cover-images-0.imgix.net/cae2bf9b-83e1-464c-9594-cd18ff1f0bed/video_preview/video_preview_0000.jpg?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=ff41de4836a5e58f85d0567d61bb9271'
				}
				title={'Bai Jiang'}
				subtitle={'lorem@mail.com'}
				text={'Backend developer'}
				link={'https://ant.design'}
			/>

			<CardProfile
				src={'https://img.championat.com/i/z/h/1643283435566196594.jpg'}
				title={'Hideo Kojima'}
				subtitle={'lorem@mail.com'}
				text={'Analyst'}
				link={'https://ant.design'}
			/>
		</div>
	</div>,
	<div className={styles.article}>
		<div className={styles.header}>Our Works</div>
		<div className={styles.main}>
			<Row gutter={[32, 32]} className={styles.row}>
				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project5.jpg?raw=true'
						}
						title={'Music Store'}
						subtitle={'React, Redux, TypeScript'}
						link={'https://vlaek.github.io/MusicStore-React/'}
					/>
				</Col>
				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project7.jpg?raw=true'
						}
						title={'Soundboard'}
						subtitle={'React, Redux, TypeScript'}
						link={'https://vlaek.github.io/Soundboard-React/'}
					/>
				</Col>

				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project8.png?raw=true'
						}
						title={'SurveyForm'}
						subtitle={'React, React Hook Form, TypeScript'}
						link={'https://vlaek.github.io/SurveyForm-React/'}
					/>
				</Col>
				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project11.png?raw=true'
						}
						title={'CookBookHub'}
						subtitle={'React, RTK Query, TypeScript'}
						link={'https://vlaek.github.io/CookBookHub/'}
					/>
				</Col>

				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project10.png?raw=true'
						}
						title={'Worms3D'}
						subtitle={'React, ThreeJS, TypeScript'}
						link={'https://vlaek.github.io/Worms3D-React/'}
					/>
				</Col>
				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project4.png?raw=true'
						}
						title={'Donatik'}
						subtitle={'Lua'}
						link={'https://vlaek.github.io/Donatik/'}
					/>
				</Col>

				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project6.png?raw=true'
						}
						title={'GKeep-Lite'}
						subtitle={'React, React Masonry, TypeScript'}
						link={'https://vlaek.github.io/GKeep-Lite-React/'}
					/>
				</Col>
				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project1.png?raw=true'
						}
						title={'ToDo [React]'}
						subtitle={'React, TypeScript'}
						link={'https://vlaek.github.io/ToDo-React/'}
					/>
				</Col>
				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project2.png?raw=true'
						}
						title={'ToDo [Flask]'}
						subtitle={'Python, Flask, SQLAlchemy'}
						link={'https://github.com/Vlaek/ToDo-Flask'}
					/>
				</Col>
				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project3.png?raw=true'
						}
						title={'DB [Flask]'}
						subtitle={'Python, Flask, PyMySQL'}
						link={'https://github.com/Vlaek/Project-Organization-Flask'}
					/>
				</Col>
				<Col span={10} offset={1} className={styles.col}>
					<CardProject
						src={
							'https://github.com/Vlaek/PortfolioLandingPage/blob/main/public/img/project9.png?raw=true'
						}
						title={'OnlineStore'}
						subtitle={'React, i18next, TypeScript'}
						link={'https://vlaek.github.io/ProductShowcase-React/'}
					/>
				</Col>
			</Row>
		</div>
	</div>,
]
