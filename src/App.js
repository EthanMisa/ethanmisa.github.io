import About from "./components/About.jsx";
import Sidebar from "./components/Sidebar.js";
function App() {
	return (
		// add helmet for title
		<body>
			<div className="content">
				<About />
			</div>
			<Sidebar />
			<p>
				valid Line 76:6: The href attribute requires a valid value to be
				accessible. Provide a valid, navigable address as the href value. If you
				cannot provide a valid href, but still need the element to resemble a
				link, use a button and change it with appropriate styles. Learn more:
				https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
				jsx-a11y/anchor-is-valid Line 90:6: The href attribute requires a valid
				value to be accessible. Provide a valid, navigable address as the href
				value. If you cannot provide a valid href, but still need the element to
				resemble a link, use a button and change it with appropriate styles.
				Learn more:
				https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
				jsx-a11y/anchor-is-valid
			</p>
		</body>
	);
}

export default App;
