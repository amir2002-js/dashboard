import { IoMenuSharp } from "react-icons/io5";
import Logo from "../../Logo/Logo";

export default function DashboardHead() {
	return (
		<>
			<div className="flex justify-between items-center border-l py-5 border-gray-200 pl-5 sm:max-w-64 max-w-32 pr-5 min-h-20">
				<div className="">
					<Logo />
				</div>
				<div className="">
					<button>
						<IoMenuSharp className="text-2xl" />
					</button>
				</div>
			</div>
		</>
	);
}
