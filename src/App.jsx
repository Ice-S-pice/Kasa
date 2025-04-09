import { Routes, Route } from "react-router-dom";
import Home from "@/components/Home.jsx";
import About from "@/components/About/About.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Header from "@/components/Header/Header.jsx";
import Error from "@/components/ErrorPage/Error.jsx";
import Appart from "@/components/Appart/Appart.jsx";


function App() {
	return (
		<div className="App">
		<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<Appart />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
