import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./navegacion/Navbar";
import Jumbotron from './paginapri/Jumbotron'
import Card from './paginapri/Card'
import Footer from './footer/Footer.js'


//include images into your bundle
//*import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Router>
				<Navbar/>
			</Router>
			<Router>
				<Jumbotron/>
			</Router>
			<Router>
				<Card/>
			</Router>
<Router>
	<Footer/>
</Router>
</div>
	);
};

export default Home;
