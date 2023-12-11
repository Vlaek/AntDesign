import { Button, DatePicker, Input } from 'antd'
import { FC, useState } from 'react'
import EditTaskModal from '../../components/EditTaskModal/EditTaskModal'
import TaskList from '../../components/TaskList/TaskList'
import styles from './Index.module.scss'
import dayjs, { Dayjs } from 'dayjs'
import { ITask } from './../../types/types'

const Index: FC = () => {
	const [taskText, setTaskText] = useState<string>('')
	const [taskDate, setTaskDate] = useState<Dayjs | null>(null)
	const [tasks, setTasks] = useState<ITask[]>([])

	const [modalVisible, setModalVisible] = useState<boolean>(false)

	const [editedTask, setEditedTask] = useState<ITask | null>(null)
	const [editedTaskIndex, setEditedTaskIndex] = useState<number | null>(null)
	const [searchTerm, setSearchTerm] = useState<string>('')

	const addTask = () => {
		if (taskText.trim() !== '' && taskDate) {
			setTasks([...tasks, { text: taskText, date: taskDate }])
			setTaskText('')
			setTaskDate(null)
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
		setEditedTask(null)
		setEditedTaskIndex(null)
	}

	const saveEditedTask = (newTask: ITask | null) => {
		if (newTask && newTask.text.trim() !== '') {
			const updatedTasks = [...tasks]
			updatedTasks[editedTaskIndex as number] = {
				...newTask,
				text: newTask.text.trim(),
			}
			setTasks(updatedTasks)
			closeEditModal()
			return updatedTasks[editedTaskIndex as number]
		}
		return null
	}

	const filteredTasks = tasks.filter(task =>
		task.text.toLowerCase().includes(searchTerm.toLowerCase()),
	)

	return (
		<>
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
						value={taskText}
						onChange={e => setTaskText(e.target.value)}
						className={styles.input}
					/>
					<DatePicker
						placeholder='Select date'
						value={taskDate ? dayjs(taskDate, 'DD.MM.YYYY') : null}
						format={'DD.MM.YYYY'}
						onChange={date =>
							setTaskDate(date ? dayjs(date, 'DD.MM.YYYY') : null)
						}
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
		</>
	)
}

export default Index
