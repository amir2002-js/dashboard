import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";

export default function Header({ changeMode }) {
	return (
		<header className=" flex fixed bg-white dark:bg-Primary-dark dark:text-white w-full pl-5 h-20 top-0 right-0">
			<Dashboard />
			<div className="h-20 flex justify-between items-start *:grow grow mr-72">
				<SearchBar />
				<Navbar changeMode={changeMode} />
			</div>
		</header>
	);
}
