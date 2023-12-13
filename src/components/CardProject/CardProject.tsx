import { FC, useState } from 'react'
import { Card, Typography } from 'antd'
import styles from './CardProject.module.scss'
import CardProjectModal from '../CardProjectModal/CardProjectModal'
import { IProject } from '../../types/types'

interface CardProjectProps {
	project: IProject
}

export const CardProject: FC<CardProjectProps> = ({ project }) => {
	const [modalVisible, setModalVisible] = useState<boolean>(false)

	const openModal = () => {
		setModalVisible(true)
	}

	const closeModal = () => {
		setModalVisible(false)
	}

	return (
		<Card hoverable className={styles.card}>
			<div className={styles.container} onClick={() => openModal()}>
				<div className={styles.image}>
					<img
						alt='project'
						src={project.img}
						className={styles.img}
						draggable={false}
					/>
				</div>
				<div className={styles.information}>
					<div>
						<Typography.Title className={styles.title} level={3}>
							{project.title}
						</Typography.Title>
						<Typography.Paragraph className={styles.text}>
							{project.subtitle}
						</Typography.Paragraph>
					</div>
				</div>
			</div>
			<CardProjectModal
				visible={modalVisible}
				onCancel={closeModal}
				project={project}
			/>
		</Card>
	)
}
