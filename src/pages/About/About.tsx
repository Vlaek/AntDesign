import { Col, Pagination, PaginationProps, Row } from 'antd'
import { FC, useState } from 'react'
import { CardProfile } from '../../components/CardProfile/CardProfile'
import { CardProject } from '../../components/CardProject/CardProject'
import Information from '../../components/Information/Information'
import styles from './About.module.scss'
import { cardsProfileArray, cardsProjectsArray } from './data'

const data = [
	<Information />,
	<div className={styles.article}>
		<div className={styles.header}>Our Team</div>
		<div className={styles.main}>
			<Row gutter={[32, 32]} className={styles.row}>
				{cardsProfileArray.map(item => (
					<Col span={10} offset={1} className={styles.col} key={item.src}>
						<CardProfile
							key={item.src}
							src={item.src}
							title={item.title}
							text={item.text}
							subtitle={'lorem@mail.com'}
						/>
					</Col>
				))}
			</Row>
		</div>
	</div>,
	<div className={styles.article}>
		<div className={styles.header}>Our Works</div>
		<div className={styles.main}>
			<Row gutter={[32, 32]} className={styles.row}>
				{cardsProjectsArray.map(item => (
					<Col span={10} offset={1} className={styles.col} key={item.github}>
						<CardProject project={item} />
					</Col>
				))}
			</Row>
		</div>
	</div>,
]

const About: FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const onChange: PaginationProps['onChange'] = page => {
		setCurrentPage(page)
		scrollToTop()
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>{data[currentPage - 1]}</div>
			<div className={styles.footer}>
				<Pagination
					current={currentPage}
					onChange={onChange}
					total={data.length * 10}
				/>
			</div>
		</div>
	)
}

export default About
