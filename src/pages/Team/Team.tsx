import { Col, Row } from 'antd'
import { FC } from 'react'
import { CardProfile } from '../../components/CardProfile/CardProfile'
import { data } from './data'

const Team: FC = () => {
	return (
		<Row gutter={[32, 32]}>
			{data.map(item => (
				<Col span={10} offset={1} key={item.src}>
					<CardProfile
						key={item.src}
						src={item.src}
						title={item.title}
						text={item.text}
						subtitle={'lorem@mail.com'}
					/>
				</Col>
			))}
		</Row>
	)
}

export default Team
