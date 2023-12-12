import { FC } from 'react'
import { Card, Flex, Typography, Button } from 'antd'
import styles from './CardProfile.module.scss'

interface CardProfileProps {
	src: string
	title: string
	subtitle: string
	text: string
	link: string
}

export const CardProfile: FC<CardProfileProps> = ({
	src,
	title,
	subtitle,
	text,
	link,
}) => {
	return (
		<Card
			hoverable
			className={styles.card}
			bodyStyle={{ padding: 0, overflow: 'hidden' }}
		>
			<Flex justify='space-between' className={styles.flex}>
				<img alt='avatar' src={src} className={styles.img} draggable={false} />
				<Flex
					vertical
					align='flex-end'
					justify='space-between'
					style={{ padding: 32 }}
				>
					<div>
						<Typography.Title level={3}>{title}</Typography.Title>
						<Typography.Paragraph>{subtitle}</Typography.Paragraph>
						<Typography.Paragraph>{text}</Typography.Paragraph>
					</div>
					<Button
						type='primary'
						href={link}
						target='_blank'
						className={styles.button}
					>
						Get Started
					</Button>
				</Flex>
			</Flex>
		</Card>
	)
}
