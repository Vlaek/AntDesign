import { FC, useEffect, useState } from 'react'
import { QRCode, Col, Statistic, Rate } from 'antd'
import { Footer } from 'antd/es/layout/layout'
import styles from './Footer.module.scss'
import CountUp from 'react-countup'

const formatter = (value: number) => (
	<CountUp end={value} separator='.' style={{ color: 'white' }} />
)

const MyFooter: FC = () => {
	const [count, setCount] = useState<number>(0)
	const [value, setValue] = useState(4)

	const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

	useEffect(() => {
		const interval = setInterval(() => setCount(prev => prev + 523), 180000)

		return () => clearInterval(interval)
	}, [])

	return (
		<Footer className={styles.footer}>
			<div className={styles.row}>
				<Col span={12} className={styles.col}>
					<Statistic
						title='Active Users'
						value={133793}
						formatter={formatter}
						className={styles.statistic}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Users'
						value={3228930 + count}
						formatter={formatter}
						precision={2}
						className={styles.statistic}
					/>
				</Col>
				<Rate
					tooltips={desc}
					onChange={setValue}
					value={value}
					className={styles.rate}
				/>
			</div>
			<QRCode
				value={'https://github.com/Vlaek'}
				size={100}
				className={styles.qr}
				color={'white'}
			/>
		</Footer>
	)
}

export default MyFooter
