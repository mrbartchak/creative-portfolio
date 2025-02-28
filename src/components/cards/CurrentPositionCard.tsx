import Image from "next/image";

const CurrentPositionCard = () => {
	return (
		<div className="flex justify-between items-center bg-none rounded-lg p-6 w-full shadow-[0_0_16px_rgba(0,0,0,0.2)] ">
			<div>
				<h2 className="text-lg font-bold mb-2">Current Position</h2>
				<p className="xl:hidden text-sm text-foreground opacity-70">IT Analyst at</p>
				<p className="hidden xl:block text-sm text-foreground opacity-70">Information Technology Analyst at</p>
				<p className="xl:hidden text-sm text-foreground opacity-70">SMBC</p>
				<p className="hidden xl:block text-sm text-foreground opacity-70">Sumitomo Mitsui Banking Corporation</p>
			</div>
			<Image src="/images/logos/smbc-logo.svg" alt="SMBC Logo" className="w-28 xl:w-40 h-auto -m-2" width={32} height={32} />
		</div>
	);
}
export default CurrentPositionCard;