import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center space-y-4">
      {/* Hero Section */}
      <div className="bg-none shadow-[0_0_16px_rgba(0,0,0,0.2)] rounded-lg p-6 w-full">
        <h1 className="text-xl font-bold mb-4">Hello, I&apos;m Matthew Bartchak</h1>
        <p className="text-sm text-gray-700 mb-4">
          I&apos;m a Computer Science & Business graduate from Lehigh University, 
          currently based in New York City. I work as an IT Analyst at SMBC, 
          specializing in API gateway management and backend API development.
        </p>
        <Link href="/contact" className="inline-block bg-foreground text-background rounded-lg px-4 py-2 mt-2 hover:bg-gray-200 transition text-sm">
          Connect with me!
        </Link>
      </div>
      

      <div className="flex flex-col space-y-4 w-full">
        {/* Current Postition */}
        <div className="flex justify-between items-center bg-none rounded-lg p-6 w-full shadow-[0_0_16px_rgba(0,0,0,0.2)] ">
          <div>
            <h2 className="text-lg font-bold mb-2">Current Position</h2>
            <p className="text-sm text-gray-700">Information Technology Analyst at</p>
            <p className="text-sm text-gray-700">Sumitomo Mitsui Banking Corporation</p>
          </div>
          <Image src="/images/logos/smbc-logo.svg" alt="SMBC Logo" className="w-40 h-auto" width={32} height={32} />
        </div>
        {/* Education */}
        <div className="flex justify-between items-center bg-none rounded-lg p-6 w-full shadow-[0_0_16px_rgba(0,0,0,0.2)] ">
          <div>
            <h2 className="text-lg font-bold mb-2">Education</h2>
            <p className="text-sm text-gray-700">Computer Science & Business</p>
            <p className="text-sm text-gray-700">Lehigh University &apos;24</p>
          </div>
          <Image src="images/logos/lehigh-logo.svg" alt="Lehigh Logo" className="w-40 h-auto -m-4 border border-red-400" width={48} height={48} />
        </div>
      </div>

      <div className="bg-none shadow-[0_0_16px_rgba(0,0,0,0.2)] rounded-lg p-6 w-full space-y-6">
        <h2 className="text-lg font-bold">Technical Skills</h2>
        <ul className="grid grid-cols-3 gap-y-8">
            <li className="flex items-center gap-x-2 text-orange-700">
              <Image src="images/icons/java-icon.svg" alt="Java" className="w-8 h-8" width={32} height={32} />
              Java
            </li>
            <li className="flex items-center gap-x-2 text-black">
              <Image src="images/icons/nextjs-icon.svg" alt="Next.js" className="w-8 h-8" width={32} height={32} />
              Next.js
            </li>
            <li className="flex items-center gap-x-2 text-sky-400">
              <Image src="images/icons/sql-icon.svg" alt="SQL" className="w-8 h-8" width={32} height={32} />
              SQL
            </li>

            <li className="flex items-center gap-x-2 text-lime-600">
              <Image src="images/icons/spring-icon.svg" alt="Spring Boot" className="w-8 h-8" width={32} height={32} />
              Spring Boot
            </li>
            <li className="flex items-center gap-x-2 text-blue-500">
              <Image src="images/icons/azure-icon.svg" alt="Azure APIM" className="w-8 h-8" width={32} height={32} />
              Azure APIM
            </li>
            <li className="flex items-center gap-x-2 text-red-600">
              <Image src="images/icons/git-icon.svg" alt="Git" className="w-8 h-8" width={32} height={32} />
              Git
            </li>
          </ul>
      </div>
    </main>
  );
}
