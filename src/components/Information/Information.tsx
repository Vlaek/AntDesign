import { FC } from 'react'
import styles from './Information.module.scss'

interface InformationProps {
	children: React.ReactNode
}

const Information: FC<InformationProps> = ({ children }) => {
	return (
		<div className={styles.article}>
			<div className={styles.header}>What are we doing</div>
			{children}
		</div>
	)
}

export default Information
