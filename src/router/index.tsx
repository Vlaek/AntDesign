import About from '../pages/About/About'
import Index from '../pages/Index/Index'

export const routes = [
	{ path: '/about', element: <About />, exact: true },
	{ path: '/', element: <Index />, exact: true },
]
