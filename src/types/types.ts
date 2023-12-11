import { Dayjs } from 'dayjs'

export interface ITask {
	text: string
	date: Dayjs | null
}
