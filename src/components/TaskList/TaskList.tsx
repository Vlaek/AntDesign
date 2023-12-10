import { FC } from 'react'
import { List, Button } from 'antd'
import styles from './TaskList.module.scss'

interface TaskListProps {
	tasks: string[]
	onEdit: (index: number) => void
	onRemove: (index: number) => void
}

const TaskList: FC<TaskListProps> = ({ tasks, onEdit, onRemove }) => {
	return (
		<List
			className={styles.list}
			dataSource={tasks}
			renderItem={(item, index) => (
				<List.Item
					className={styles.list__item}
					actions={[
						<Button
							className={styles.button}
							type='link'
							onClick={() => onEdit(index)}
						>
							Edit
						</Button>,
						<Button
							className={styles.button}
							type='link'
							onClick={() => onRemove(index)}
						>
							Remove
						</Button>,
					]}
				>
					{item}
				</List.Item>
			)}
		/>
	)
}

export default TaskList
