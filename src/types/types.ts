import { Dayjs } from 'dayjs'

export interface ITask {
	text: string
	date: Dayjs | null
}

export interface IProject {
	img: string
	title: string
	subtitle: string
	text: string
	link: string
	github: string
	technologies: string[]
	screens: string[]
}
