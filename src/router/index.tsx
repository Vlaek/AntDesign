import About from '../pages/About/About'
import Index from '../pages/Index/Index'
import Gallery from './../pages/Gallery/Gallery'

export const routes = [
	{ path: '/about', element: <About />, exact: true },
	{ path: '/gallery', element: <Gallery />, exact: true },
	{ path: '/', element: <Index />, exact: true },
]
