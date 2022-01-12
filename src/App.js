import About from "./components/About.jsx";
import Footer from "./components/Footer.js";
import Sidebar from "./components/Sidebar.js";
import Skills from "./components/Skills.js";
import "./styles/App.css";

function App() {
	return (
		<div className="app">
			<div className="content">
				<About />
				<Skills />
				<Footer />
			</div>
			<Sidebar />
		</div>
	);
}

export default App;
