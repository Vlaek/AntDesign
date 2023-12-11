import { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import CustomLayout from './components/CustomLayout/CustomLayout'

const App: FC = () => {
	return (
		<Router>
			<CustomLayout>
				<AppRouter />
			</CustomLayout>
		</Router>
	)
}

export default App
