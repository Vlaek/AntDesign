import React from 'react'
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const { Sider } = Layout

const Aside: React.FC = () => {
	const location = useLocation()

	return (
		<Sider width={200} theme='light'>
			<Menu
				mode='vertical'
				theme='light'
				defaultSelectedKeys={[location.pathname]}
			>
				<Menu.Item key='/'>
					<Link to='/'>Todo List</Link>
				</Menu.Item>
				<Menu.Item key='/gallery'>
					<Link to='/gallery'>Gallery</Link>
				</Menu.Item>
				<Menu.Item key='/about'>
					<Link to='/about'>About Us</Link>
				</Menu.Item>
				<Menu.Item key='/team'>
					<Link to='/team'>Team</Link>
				</Menu.Item>
				<Menu.Item key='/projects'>
					<Link to='/projects'>Projects</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	)
}

export default Aside
