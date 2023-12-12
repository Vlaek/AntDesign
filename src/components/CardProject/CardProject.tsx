import { FC } from 'react'
import { Card, Typography, Button } from 'antd'
import styles from './CardProject.module.scss'

interface CardProjectProps {
	src: string
	title: string
	subtitle: string
	link: string
}

export const CardProject: FC<CardProjectProps> = ({
	src,
	title,
	subtitle,
	link,
}) => {
	return (
		<Card hoverable className={styles.card}>
			<div className={styles.container}>
				<img alt='avatar' src={src} className={styles.img} draggable={false} />
				<div className={styles.information}>
					<div>
						<Typography.Title className={styles.title} level={3}>
							{title}
						</Typography.Title>
						<Typography.Paragraph className={styles.text}>
							{subtitle}
						</Typography.Paragraph>
					</div>
					<Button
						type='primary'
						href={link}
						target='_blank'
						className={styles.button}
					>
						Get Started
					</Button>
				</div>
			</div>
		</Card>
	)
}
