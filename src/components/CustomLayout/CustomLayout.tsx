import { FC } from 'react'
import { Layout } from 'antd'
import Aside from '../Aside/Aside'
import styles from './CustomLayout.module.scss'

const { Header, Footer, Content } = Layout

interface LayoutProps {
	children: React.ReactNode
	title: string
}

const CustomLayout: FC<LayoutProps> = ({ children, title }) => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Aside />
			<Layout>
				<Header className={styles.header}>{title}</Header>
				<Content style={{ margin: '16px' }}>{children}</Content>
				<Footer className={styles.footer}>Footer</Footer>
			</Layout>
		</Layout>
	)
}

export default CustomLayout
