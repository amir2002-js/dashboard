import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
	return (
		<header className=" flex fixed bg-white w-full pl-5 h-20 top-0 right-0">
			<Dashboard />
			<div className="h-20 flex justify-between items-start *:grow grow">
				<SearchBar />
				<Navbar />
			</div>
		</header>
	);
}
