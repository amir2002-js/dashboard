import {
	IoChatboxOutline,
	IoEllipsisHorizontalSharp,
	IoLogOutOutline,
	IoMoonOutline,
	IoNotificationsOutline,
	IoStarOutline,
} from "react-icons/io5";

export default function Navbar() {
	const my_navbar = [
		{ title: "", icon: <IoStarOutline className="text-xl" />, id: 2 },
		{
			title: "",
			icon: <IoNotificationsOutline className="text-xl" />,
			id: 3,
		},
		{ title: "", icon: <IoMoonOutline className="text-xl" />, id: 4 },
		{ title: "", icon: <IoChatboxOutline className="text-xl " />, id: 5 },
		{
			title: "log out",
			icon: <IoLogOutOutline className="text-2xl" />,
			id: 6,
		},
	];
	return (
		<nav className="flex justify-end py-5">
			<button className="md:hidden">
				<IoEllipsisHorizontalSharp className="text-2xl" />
			</button>
			<ul className="flex justify-end gap-4 items-center max-md:hidden">
				{my_navbar.map((item) => (
					<li key={item.id}>
						<button
							className={`flex gap-2 justify-center items-center rounded-lg  ${
								!item.title
									? "hover:bg-slate-100 p-1.5"
									: "bg-slate-100 hover:bg-Primary hover:text-white transition-all duration-700 py-1 px-7"
							}`}
						>
							{item.icon}
							{item.title && <p className="line-clamp-1 truncate">{item.title}</p>}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
