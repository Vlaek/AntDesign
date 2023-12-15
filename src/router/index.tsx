import About from '../pages/About/About'
import Index from '../pages/Index/Index'
import Gallery from './../pages/Gallery/Gallery'
import Projects from './../pages/Projects/Projects'
import Team from './../pages/Team/Team'

export const routes = [
	{ path: '/about', element: <About />, exact: true },
	{ path: '/gallery', element: <Gallery />, exact: true },
	{ path: '/projects', element: <Projects />, exact: true },
	{ path: '/team', element: <Team />, exact: true },
	{ path: '/', element: <Index />, exact: true },
]
