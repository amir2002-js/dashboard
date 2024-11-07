import { useEffect, useState } from "react";
import Header from "./Header/Header";
import NavUl from "./Header/Navbar/NavUl";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [isVisibleMenu, setIsVisibleMenu] = useState(false);

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

	function showVisibleMenu() {
		setIsVisibleMenu((prev) => !prev);

		console.log("showVisibleMenu");
	}

	return (
		<div className={`font-secondary bg-gray-100 text-sm`}>
			<div className="bg-white">
				<div className="max-w-310 mx-auto relative ">
					<Header
						changeMode={changeMode}
						showVisibleMenu={showVisibleMenu}
					/>
					<div
						className={` absolute bg-white dark:bg-Primary-dark mx-2 p-2 top-16 right-0 left-0 border dark:border-dark-border border-light-border transition-transform duration-700 ${
							isVisibleMenu
								? "translate-y-0 opacity-100"
								: "-translate-y-24 opacity-0"
						}`}
					>
						<NavUl changeMode={changeMode} />
					</div>
				</div>
			</div>
			<div className="bg-slate-100 dark:bg-Secondary-dark w-full h-[300vh]"></div>
		</div>
	);
}

export default App;
