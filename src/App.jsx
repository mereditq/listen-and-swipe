import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import SwipingPage from './pages/SwipingPage/SwipingPage.jsx';

import {Box, ChakraProvider} from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider bgGradient={"linear(to-b, #658E93, #AFC3C6)"}>
			<Box bgGradient={"linear(to-b, #658E93, #AFC3C6)"}>
				
			<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path='/app' element={<SwipingPage/>}/>
					<Route path='/' element={<Login/>}/>
						
				</Routes>
			</Router>
			
			</Box>
		</ChakraProvider>
	);
}

export default App;

//yarn add spotify-web-api-js