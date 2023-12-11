import { FC, useEffect, useState } from 'react'
import { Modal, Input, DatePicker } from 'antd'
import { ITask } from '../../types/types'
import dayjs, { Dayjs } from 'dayjs'

interface EditTaskModalProps {
	visible: boolean
	onOk: (editedTask: ITask | null) => void
	onCancel: () => void
	initialTask: ITask | null
}

const EditTaskModal: FC<EditTaskModalProps> = ({
	visible,
	onOk,
	onCancel,
	initialTask,
}) => {
	const [editedTask, setEditedTask] = useState<ITask | null>(initialTask)

	useEffect(() => {
		setEditedTask(initialTask)
	}, [initialTask])

	const handleOk = () => {
		onOk(editedTask)
	}

	const handleDateChange = (date: Dayjs | null) => {
		setEditedTask(prevTask => ({
			...prevTask!,
			date: date ? dayjs(date, 'DD.MM.YYYY') : null,
		}))
	}

	return (
		<Modal title='Edit Task' open={visible} onOk={handleOk} onCancel={onCancel}>
			<Input
				placeholder='Edit task'
				value={editedTask?.text || ''}
				onChange={e =>
					setEditedTask(prevTask => ({
						...prevTask!,
						text: e.target.value,
					}))
				}
			/>
			<DatePicker
				placeholder='Select date'
				value={editedTask?.date ? dayjs(editedTask.date, 'DD.MM.YYYY') : null}
				format={'DD.MM.YYYY'}
				onChange={handleDateChange}
			/>
		</Modal>
	)
}

export default EditTaskModal
