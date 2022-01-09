import About from "./components/About.jsx";
import Sidebar from "./components/Sidebar.js";
import Skills from "./components/Skills.js";
import "./styles/App.css";

function App() {
	return (
		// add helmet for title
		<div className="app">
			<div className="content">
				<About />
				<Skills />
			</div>
			<Sidebar />
		</div>
	);
}

export default App;
