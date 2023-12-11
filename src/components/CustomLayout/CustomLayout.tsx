import { FC, useEffect, useState } from 'react'
import { FloatButton, Layout } from 'antd'
import Aside from '../Aside/Aside'
import styles from './CustomLayout.module.scss'
import { ArrowUpOutlined } from '@ant-design/icons'
import MyFooter from './../Footer/Footer'
import { useLocation } from 'react-router-dom'

const { Header, Content } = Layout

interface LayoutProps {
	children: React.ReactNode
	title: string
}

const titles = {
	'/': 'Todo List',
	'/gallery': 'Gallery',
	'/about': 'About Us',
}

const CustomLayout: FC<LayoutProps> = ({ children }) => {
	const [visible, setVisible] = useState(false)

	const location = useLocation()

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop
			setVisible(scrollTop > 250)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<Layout className={styles.layout}>
			<Aside />
			<Layout>
				<Header className={styles.header}>{titles[location.pathname]}</Header>
				<Content className={styles.content}>{children}</Content>
				<MyFooter />
			</Layout>
			{visible ? (
				<FloatButton
					icon={<ArrowUpOutlined />}
					type='primary'
					onClick={() => scrollToTop()}
				/>
			) : null}
		</Layout>
	)
}

export default CustomLayout
