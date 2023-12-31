import { FC } from 'react'
import { Carousel, Image } from 'antd'
import styles from './Gallery.module.scss'
import { images, images2 } from './data'

const Gallery: FC = () => {
	return (
		<Carousel className={styles.carousel}>
			<Image.PreviewGroup
				preview={{
					onChange: (current, prev) =>
						console.log(`current index: ${current}, prev index: ${prev}`),
				}}
			>
				<div className={styles.container}>
					<div className={styles.images}>
						{images.map(item => (
							<Image
								width={'100%'}
								height={'100%'}
								src={item.src}
								key={item.src}
							/>
						))}
					</div>
				</div>
			</Image.PreviewGroup>
			<Image.PreviewGroup
				preview={{
					onChange: (current, prev) =>
						console.log(`current index: ${current}, prev index: ${prev}`),
				}}
			>
				<div className={styles.container}>
					<div className={styles.images}>
						{images2.map(item => (
							<Image
								width={'100%'}
								height={'100%'}
								src={item.src}
								key={item.src}
							/>
						))}
					</div>
				</div>
			</Image.PreviewGroup>
		</Carousel>
	)
}

export default Gallery
