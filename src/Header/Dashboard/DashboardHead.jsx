import { IoMenuSharp } from "react-icons/io5";
import Logo from "../../Logo/Logo";
import Btn from "../../Components/Btn";

export default function DashboardHead() {
	return (
		<>
			<div className="flex justify-between items-center border py-5 border-gray-200 dark:border-gray-800 pl-5 sm:max-w-64 max-w-72 min-w-72 pr-5 min-h-20">
				<div className="">
					<Logo />
				</div>
				<div className="">
					<Btn>
						<IoMenuSharp className="text-2xl" />
					</Btn>
				</div>
			</div>
		</>
	);
}
