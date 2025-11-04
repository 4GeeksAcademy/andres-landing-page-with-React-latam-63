import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import MultipleCards from "./MultipleCards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="flex-container">
			<Navbar />
			<div className="flex-container ps-5 pe-5">
				<Jumbotron />
				<MultipleCards />
			</div>
			<Footer />
		</div>
	);
};
export default Home;

