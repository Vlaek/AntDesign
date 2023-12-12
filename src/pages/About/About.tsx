import { Pagination, PaginationProps } from 'antd'
import { FC, useState } from 'react'
import styles from './About.module.scss'
import { data } from './data'

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
