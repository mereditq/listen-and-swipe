import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import SwipingPage from './pages/SwipingPage/SwipingPage.jsx';

function App() {
	return (
		
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path='/app' element={<SwipingPage/>}/>
				<Route path='/' element={<Login/>}/>
					
			</Routes>
		</Router>
	);
}

export default App;

//yarn add spotify-web-api-js