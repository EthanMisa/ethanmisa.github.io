import About from "./components/About.jsx";
import Footer from "./components/Footer.js";
import Sidebar from "./components/Sidebar.js";
import Skills from "./components/Skills.js";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aidan from "./components/Aidan.js";

function App() {
	return (
		// add helmet for title
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<div className="app">
							<div className="content">
								<About />
								<Skills />
								<Footer />
							</div>
							<Sidebar />
						</div>
					}
				/>
				<Route path="/aidan" element={<Aidan />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
