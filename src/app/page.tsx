import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col min-h-[90%] m-4 items-center lg:justify-center justify-start mx-2 space-y-4">
      {/* Hero Section */}
      <div className="bg-none shadow-[0_0_16px_rgba(0,0,0,0.2)] rounded-lg p-6 max-w-5xl w-full mx-auto">
        <h1 className="text-xl font-bold mb-4 lg:text-3xl">Hello, I&apos;m Matthew Bartchak</h1>
        <p className="text-sm text-gray-700 mb-4 lg:text-lg">
          I&apos;m a Computer Science & Business graduate from Lehigh University, 
          currently based in New York City. I work as an IT Analyst at SMBC, 
          specializing in API gateway management and backend API development.
        </p>
        <Link href="/contact" className="inline-block bg-foreground text-background rounded-lg px-4 py-2 mt-2 hover:bg-gray-200 transition text-sm">
          Connect with me!
        </Link>
      </div>

      {/* Additional Cards */}
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 max-w-5xl w-full mx-auto">
        {/* Two Stacked Cards */}
        <div className="flex flex-col space-y-4 lg:width-3/4 flex-grow">
          {/* Card A */}
          <div className="bg-none shadow-[0_0_16px_rgba(0,0,0,0.2)] rounded-lg p-6 h-full flex items-center justify-between">
            <div>
              <h2 className="text-lg lg:text-2xl font-bold mb-2">Current Position</h2>
              <p className="text-sm lg:text-lg text-gray-700">IT Analyst at</p>
              <p className="text-sm lg:text-lg text-gray-700">SMBC</p>
            </div>
            <Image src="images/logos/smbc-logo.svg" alt="SMBC Logo" className="w-32 h-32 lg:w-48 lg:h-48 -mt-12 -mb-12" width={48} height={48} />
          </div>

          {/* Card B */}
          {/* <div className="bg-none shadow-[0_0_16px_rgba(0,0,0,0.2)] rounded-lg p-6 h-full flex items-center justify-between">
            <div>
              <h2 className="text-lg lg:text-2xl font-bold mb-2">Education</h2>
              <p className="text-sm lg:text-lg text-gray-700">Computer Science and Business</p>
              <p className="text-sm lg:text-lg text-gray-700">Lehigh University</p>
            </div>
            <Image src="images/logos/lehigh-logo.svg" alt="SMBC Logo" className="w-48 h-48 lg:w-64 lg:h-64 -m-16 -mr-12" width={48} height={48} />
          </div> */}
        </div>

        {/* Vertical Card */}
        <div className="bg-none shadow-[0_0_16px_rgba(0,0,0,0.2)] rounded-lg p-6 lg:w-1/4 flex-grow">
          <h2 className="text-lg lg:text-2xl font-bold mb-6">Technical Skills</h2>
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            <li className="flex items-center mb-4 text-orange-700">
              <Image src="images/icons/java-icon.svg" alt="Java" className="w-8 h-8 mr-2" width={32} height={32} />
              Java
            </li>
            <li className="flex items-center mb-4 text-black">
              <Image src="images/icons/nextjs-icon.svg" alt="Next.js" className="w-8 h-8 mr-2" width={32} height={32} />
              Next.js
            </li>
            <li className="flex items-center mb-4 text-sky-400">
              <Image src="images/icons/sql-icon.svg" alt="SQL" className="w-8 h-8 mr-2" width={32} height={32} />
              SQL
            </li>

            <li className="flex items-center mb-4 text-lime-600">
              <Image src="images/icons/spring-icon.svg" alt="Spring Boot" className="w-8 h-8 mr-2" width={32} height={32} />
              Spring Boot
            </li>
            <li className="flex items-center mb-4 text-blue-500">
              <Image src="images/icons/azure-icon.svg" alt="Azure APIM" className="w-8 h-8 mr-2" width={32} height={32} />
              Azure APIM
            </li>
            <li className="flex items-center mb-4 text-red-600">
              <Image src="images/icons/git-icon.svg" alt="Git" className="w-8 h-8 mr-2" width={32} height={32} />
              Git
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
