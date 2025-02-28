import Image from "next/image";

const EducationCard = () => {
	return (
        <div className="flex justify-between items-center bg-none rounded-lg p-6 w-full shadow-[0_0_16px_rgba(0,0,0,0.2)] ">
            <div>
                <h2 className="text-lg font-bold mb-2">Education</h2>
                <p className="text-sm text-foreground opacity-70">Computer Science & Business</p>
                <p className="text-sm text-foreground opacity-70">Lehigh University &apos;24</p>
            </div>
            <Image src="images/logos/lehigh-logo.svg" alt="Lehigh Logo" className="w-32 xl:w-40 h-auto -m-8" width={48} height={48} />
        </div>
	);
}
export default EducationCard;