import { Button, Input } from 'antd'
import { FC, useState } from 'react'
import CustomLayout from '../../components/CustomLayout/CustomLayout'
import EditTaskModal from '../../components/EditTaskModal/EditTaskModal'
import TaskList from '../../components/TaskList/TaskList'
import styles from './Index.module.scss'

const Index: FC = () => {
	const [task, setTask] = useState<string>('')
	const [tasks, setTasks] = useState<string[]>([])
	const [modalVisible, setModalVisible] = useState<boolean>(false)
	const [editedTask, setEditedTask] = useState<string>('')
	const [editedTaskIndex, setEditedTaskIndex] = useState<number | null>(null)
	const [searchTerm, setSearchTerm] = useState<string>('')

	const addTask = () => {
		if (task.trim() !== '') {
			setTasks([...tasks, task])
			setTask('')
		}
	}

	const removeTask = (index: number) => {
		const updatedTasks = [...tasks]
		updatedTasks.splice(index, 1)
		setTasks(updatedTasks)
	}

	const openEditModal = (index: number) => {
		setEditedTaskIndex(index)
		setEditedTask(tasks[index])
		setModalVisible(true)
	}

	const closeEditModal = () => {
		setModalVisible(false)
		setEditedTask('')
		setEditedTaskIndex(null)
	}

	const saveEditedTask = (editedTask: string) => {
		if (editedTask.trim() !== '') {
			const updatedTasks = [...tasks]
			updatedTasks[editedTaskIndex as number] = editedTask
			setTasks(updatedTasks)
			closeEditModal()
		}
	}

	const filteredTasks = tasks.filter(task =>
		task.toLowerCase().includes(searchTerm.toLowerCase()),
	)

	return (
		<CustomLayout title={'Todo List'}>
			<div className={styles.header}>
				<Input
					placeholder='Search tasks'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					className={styles.input}
				/>
				<div className={styles.add}>
					<Input
						placeholder='Enter a new task'
						value={task}
						onChange={e => setTask(e.target.value)}
						className={styles.input}
					/>
					<Button type='primary' onClick={addTask}>
						Add Task
					</Button>
				</div>
			</div>
			<TaskList
				tasks={filteredTasks}
				onEdit={openEditModal}
				onRemove={removeTask}
			/>
			<EditTaskModal
				visible={modalVisible}
				onOk={saveEditedTask}
				onCancel={closeEditModal}
				initialTask={editedTask}
			/>
		</CustomLayout>
	)
}

export default Index
