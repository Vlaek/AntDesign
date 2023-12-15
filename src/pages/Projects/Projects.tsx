import { Col, Row } from 'antd'
import { FC } from 'react'
import styles from './Projects.module.scss'
import { data } from './data'
import { CardProject } from '../../components/CardProject/CardProject'

const Projects: FC = () => {
	return (
		<Row gutter={[32, 32]} className={styles.row}>
			{data.map(item => (
				<Col span={10} offset={1} key={item.github}>
					<CardProject project={item} />
				</Col>
			))}
		</Row>
	)
}

export default Projects
