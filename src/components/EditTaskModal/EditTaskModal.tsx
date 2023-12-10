import { FC, useState } from 'react'
import { Modal, Input } from 'antd'

interface EditTaskModalProps {
	visible: boolean
	onOk: (editedTask: string) => void
	onCancel: () => void
	initialTask: string
}

const EditTaskModal: FC<EditTaskModalProps> = ({
	visible,
	onOk,
	onCancel,
	initialTask,
}) => {
	const [editedTask, setEditedTask] = useState<string>(initialTask)

	const handleOk = () => {
		onOk(editedTask)
	}

	return (
		<Modal
			title='Edit Task'
			visible={visible}
			onOk={handleOk}
			onCancel={onCancel}
		>
			<Input
				placeholder='Edit task'
				value={editedTask}
				onChange={e => setEditedTask(e.target.value)}
			/>
		</Modal>
	)
}

export default EditTaskModal
