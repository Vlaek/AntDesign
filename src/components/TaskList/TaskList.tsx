import { FC } from 'react'
import { List, Button } from 'antd'
import styles from './TaskList.module.scss'
import { ITask } from '../../types/types'

interface TaskListProps {
	tasks: ITask[]
	onEdit: (index: number) => void
	onRemove: (index: number) => void
}

const TaskList: FC<TaskListProps> = ({ tasks, onEdit, onRemove }) => {
	return (
		<List
			className={styles.list}
			dataSource={tasks}
			renderItem={(item, index) => (
				<List.Item className={styles.listItem}>
					<span className={styles.text}>{item.text}</span>
					{item.date && (
						<span className={styles.date}>
							{item.date.format('DD.MM.YYYY')}
						</span>
					)}
					<span className={styles.buttons}>
						<Button className={styles.button} onClick={() => onEdit(index)}>
							Edit
						</Button>
						<Button
							className={styles.button}
							danger
							onClick={() => onRemove(index)}
						>
							Remove
						</Button>
					</span>
				</List.Item>
			)}
		/>
	)
}

export default TaskList
