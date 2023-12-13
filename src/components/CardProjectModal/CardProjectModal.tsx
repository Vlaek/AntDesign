import { Button, Modal } from 'antd'
import { FC } from 'react'
import { IProject } from '../../types/types'
import styles from './CardProjectModal.module.scss'

interface CardProjectModalProps {
	visible: boolean
	onCancel: () => void
	project: IProject
}

const CardProjectModal: FC<CardProjectModalProps> = ({
	visible,
	onCancel,
	project,
}) => {
	return (
		<Modal
			title={' '}
			open={visible}
			onCancel={onCancel}
			className={styles.modal}
			footer={[]}
		>
			<div className={styles.container}>
				<div className={styles.header}>
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
							<div className={styles.title}>{project.title}</div>
							<div className={styles.subtitle}>{project.subtitle}</div>
							<div className={styles.text}>{project.text}</div>
						</div>
						<div>
							<Button
								type='primary'
								href={project.github}
								target='_blank'
								className={styles.button}
							>
								GitHub
							</Button>
							{project.link.length > 0 && (
								<Button
									type='primary'
									href={project.link}
									target='_blank'
									className={styles.button}
								>
									Website
								</Button>
							)}
						</div>
					</div>
				</div>
				<div className={styles.separator}></div>
				<div className={styles.main}>
					{project.technologies.length > 0 && (
						<>
							<div className={styles.block}>
								<div className={styles.subtitle}>Technologies</div>
								<ul>
									{project.technologies.map(item => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
							<div className={styles.separator}></div>
						</>
					)}
					{project.screens.length > 0 && (
						<div className={styles.block}>
							<div className={styles.subtitle}>Illustrations</div>
							{project.screens.map(item => (
								<img
									src={item}
									className={styles.illustration}
									draggable={false}
									key={item}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</Modal>
	)
}

export default CardProjectModal
