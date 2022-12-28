import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navBar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Tracker from './pages/tracker';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Parse from 'parse/dist/parse.min.js';

const app_id = process.env.REACT_APP_PARSE_APP_ID;
const host_url = process.env.REACT_APP_PARSE_HOST_URL;
const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
Parse.initialize(app_id, javascript_key);
Parse.serverURL = host_url;

function App() {
	
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/index' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/tracker' element={<Tracker/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
	</Router>
);
}

export default App;
