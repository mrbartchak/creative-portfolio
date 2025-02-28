import Image from "next/image";

const TechnicalSkillsCard = () => {
	return (
        <div className="bg-none shadow-[0_0_16px_rgba(0,0,0,0.2)] rounded-lg p-6 w-full space-y-6">
        <h2 className="text-lg font-bold">Technical Skills</h2>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:justify-items-center">
            <li className="flex items-center gap-x-2 text-orange-700">
                <Image src="images/icons/java-icon.svg" alt="Java" className="w-8 h-auto" width={32} height={32} />
                Java
            </li>
            <li className="flex items-center gap-x-2 text-black">
                <Image src="images/icons/nextjs-icon.svg" alt="Next.js" className="w-8 h-auto" width={32} height={32} />
                Next.js
            </li>

            <li className="flex items-center gap-x-2 text-sky-400">
                <Image src="images/icons/sql-icon.svg" alt="SQL" className="w-8 h-auto" width={32} height={32} />
                SQL
            </li>
            <li className="flex items-center gap-x-2 text-lime-600">
                <Image src="images/icons/spring-icon.svg" alt="Spring Boot" className="w-8 h-auto" width={32} height={32} />
                Spring Boot
            </li>
            <li className="flex items-center gap-x-2 text-blue-500">
                <Image src="images/icons/azure-icon.svg" alt="Azure APIM" className="w-8 h-auto" width={32} height={32} />
                Azure APIM
            </li>
            <li className="flex items-center gap-x-2 text-red-600">
                <Image src="images/icons/git-icon.svg" alt="Git" className="w-8 h-auto" width={32} height={32} />
                Git
            </li>
            <li className="flex items-center gap-x-2 text-blue-600">
                <Image src="images/icons/ts-icon.svg" alt="Typescript" className="w-8 h-auto" width={32} height={32} />
                Typescript
            </li>
            <li className="flex items-center gap-x-2 text-yellow-400">
                <Image src="images/icons/py-icon.svg" alt="Python" className="w-8 h-auto" width={32} height={32} />
                Python
            </li>
        </ul>
    </div>
	);
}
export default TechnicalSkillsCard;