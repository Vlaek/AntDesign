import { FC } from 'react'
import { Card, Typography } from 'antd'
import styles from './CardProfile.module.scss'

interface CardProfileProps {
	src: string
	title: string
	subtitle: string
	text: string
}

export const CardProfile: FC<CardProfileProps> = ({
	src,
	title,
	subtitle,
	text,
}) => {
	return (
		<Card hoverable className={styles.card}>
			<div className={styles.container}>
				<div className={styles.image}>
					<img
						alt='avatar'
						src={src}
						className={styles.img}
						draggable={false}
					/>
				</div>
				<div className={styles.information}>
					<div>
						<Typography.Title className={styles.title} level={3}>
							{title}
						</Typography.Title>
						<Typography.Paragraph className={styles.text}>
							{subtitle}
						</Typography.Paragraph>
						<Typography.Paragraph>{text}</Typography.Paragraph>
					</div>
				</div>
			</div>
		</Card>
	)
}
