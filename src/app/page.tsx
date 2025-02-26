import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      {/* Hero Section */}
      <div className="bg-background shadow-[0_0_32px_rgba(0,0,0,0.2)] rounded-lg p-6 max-w-5xl h-64 mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4">Hello, I'm Matthew Bartchak</h1>
        <p className="text-xl text-gray-700 mb-4">
        I'm a Computer Science & Business graduate from Lehigh University, 
        currently based in New York City. I work as an IT Analyst at SMBC, 
        specializing in API gateway management and backend API development.
        </p>
        <Link href="/contact" className="inline-block bg-foreground text-background rounded-lg px-4 py-2 mt-8 hover:bg-gray-200 transition">
          Connect with me !
        </Link>
      </div>

      {/* Additional Cards Section */}
      <div className="flex space-x-8 max-w-5xl w-full mx-auto h-96">
        {/* Two Cards */}
        <div className="flex flex-col space-y-4 width-4/5 flex-grow">
          <div className="bg-background shadow-[0_0_32px_rgba(0,0,0,0.2)] rounded-lg p-6 h-full flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Current Position</h2>
              <p className="text-lg text-gray-700">
                Information Technology Analyst at
              </p>
              <p className="text-lg text-gray-700">
                Sumitomo Mitsui Banking Corporation
              </p>
            </div>
            <Image src="smbc-logo.svg" alt="SMBC Logo" className="w-48 h-48 -mt-12 -mb-12" width={48} height={48} />
          </div>

          <div className="bg-background shadow-[0_0_32px_rgba(0,0,0,0.2)] rounded-lg p-6 h-full flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Education</h2>
              <p className="text-lg text-gray-700">
                Computer Science and Business
              </p>
              <p className="text-lg text-gray-700">
                Lehigh University
              </p>
            </div>
            <Image src="lehigh-logo.svg" alt="SMBC Logo" className="w-64 h-64 -m-16" width={48} height={48} />
          </div>
        </div>

        {/* Vertical Card */}
        <div className="bg-background shadow-[0_0_32px_rgba(0,0,0,0.2)] rounded-lg p-6 w-1/5 flex-grow">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <ul className="list-disc pl-2 text-gray-700">
            <li className="flex items-center text-2xl mb-4 text-orange-700">
              <Image src="java-icon.svg" alt="Java" className="w-8 h-8 mr-2" width={32} height={32} />
              Java
            </li>
            <li className="flex items-center text-2xl mb-4 text-black">
              <Image src="nextjs-icon.svg" alt="Next.js" className="w-8 h-8 mr-2" width={32} height={32} />
              Next.js
            </li>
            <li className="flex items-center text-2xl mb-4 text-sky-400">
              <Image src="sql-icon.svg" alt="SQL" className="w-8 h-8 mr-2" width={32} height={32} />
              SQL
            </li>
            <li className="flex items-center text-2xl mb-4 text-lime-600">
              <Image src="spring-icon.svg" alt="Spring Boot" className="w-8 h-8 mr-2" width={32} height={32} />
              Spring Boot
            </li>
            <li className="flex items-center text-2xl mb-4 text-blue-500">
              <Image src="azure-icon.svg" alt="Azure APIM" className="w-8 h-8 mr-2" width={32} height={32} />
              Azure APIM
            </li>
            <li className="flex items-center text-2xl mb-4 text-red-600">
              <Image src="git-icon.svg" alt="Git" className="w-8 h-8 mr-2" width={32} height={32} />
              Git
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
