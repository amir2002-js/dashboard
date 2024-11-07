import { useEffect, useState } from "react";
import Header from "./Header/Header";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [darkMode]);

	function changeMode() {
		setDarkMode((prevMode) => !prevMode);
	}

	return (
		<div className={`font-secondary bg-gray-100 text-sm`}>
			<div className="bg-white">
				<div className="max-w-310 mx-auto ">
					<Header changeMode={changeMode} />
				</div>
			</div>
			<div className="bg-slate-100 dark:bg-Secondary-dark w-full h-[300vh]"></div>
		</div>
	);
}

export default App;
