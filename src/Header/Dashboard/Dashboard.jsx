import DashboardHead from "./DashboardHead";
import InfoAdmin from "./InfoAdmin/InfoAdmin";
import Routing from "./Routing/Routing";

export default function Dashboard() {
	return (
		<div className="flex fixed flex-col max-h-svh overflow-hidden">
			<DashboardHead />
			<div className="bg-white min-h-svh sm:max-w-64 max-w-72 min-w-72 z-10 border-r border-l dark:bg-Primary-dark border-light-border dark:border-dark-border">
				<div className="w-full">
					<InfoAdmin />
					<Routing />
				</div>
			</div>
		</div>
	);
}
