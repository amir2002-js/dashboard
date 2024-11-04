import DashboardHead from "./DashboardHead/DashboardHead";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
	return (
		<header className=" flex justify-between *:grow ">
            <DashboardHead />
			<SearchBar />
			<Navbar />
		</header>
	);
}
