import About from "./components/About.jsx";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Media from "./components/Media.js";
import Projects from "./components/Projects.js";
import Sidebar from "./components/Sidebar.js";
import Skills from "./components/Skills.js";

import "./styles/App.css";

function App() {
	return (
		<div className="app">
			<div className="content">
				<About />
				<Skills />
				<Projects />
				{/* <Media /> */}
				{/* <Contact /> */}
				<Footer />
			</div>
			<Sidebar />
		</div>
	);
}

export default App;
