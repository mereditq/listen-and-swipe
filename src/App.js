import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login/Login';
import SwipingPage from './pages/SwipingPage/SwipingPage';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path='/app'>
					<SwipingPage />
				</Route>
				<Route path='/'>
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

//yarn add spotify-web-api-js