import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import SwipingPage from './pages/SwipingPage/SwipingPage.jsx';
import About from './pages/About/About.jsx';

import {Box, Grid, GridItem, ChakraProvider} from '@chakra-ui/react';
import Navbar from './components/NavBar';

function App() {
	return (
		<ChakraProvider bgGradient={"linear(to-b, #658E93, #AFC3C6)"}>
			<Grid templateRows='repeat(10,1fr)' bgGradient={"linear(to-b, #658E93, #AFC3C6)"} 
			>
			{/* // "start": "serve -s build", */}
			
			<Router basename={process.env.PUBLIC_URL}>
				<Navbar/>
				<GridItem rowSpan={9}>
				<Routes>
					<Route path='/app' element={<SwipingPage/>}/>
					<Route path='/about' element={<About/>}/>
					<Route path='/' element={<Login/>}/>
						
				</Routes>
				</GridItem>
			</Router>
			
			</Grid>
		</ChakraProvider>
	);
}

export default App;

//yarn add spotify-web-api-js