export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      {/* Hero Section */}
      <div className="bg-background shadow-[0_0_32px_rgba(0,0,0,0.2)] rounded-lg p-6 max-w-5xl h-64 mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4">Hello, I'm Matthew Bartchak</h1>
        <p className="text-lg text-gray-700 mb-4">
          I'm a passionate developer based in New York, specializing in building
          web applications that provide seamless user experiences. Welcome to my portfolio!
        </p>
        <a href="/projects" className="inline-block bg-foreground text-background rounded-lg px-4 py-2 hover:bg-gray-200 transition">
          View My Projects
        </a>
      </div>

      {/* Additional Cards Section */}
      <div className="flex space-x-8 max-w-5xl h-44 mx-auto">
        <div className="bg-background shadow-[0_0_32px_rgba(0,0,0,0.2)] rounded-lg p-6 flex-1">
          <h2 className="text-2xl font-bold mb-2">Card Title 1</h2>
          <p className="text-gray-700">
            Brief description of the first card. This could be about a project, skill, or experience.
          </p>
        </div>

        <div className="bg-background shadow-[0_0_32px_rgba(0,0,0,0.2)] rounded-lg p-6 flex-1">
          <h2 className="text-2xl font-bold mb-2">Card Title 2</h2>
          <p className="text-gray-700">
            Brief description of the second card. This could be about a project, skill, or experience.
          </p>
        </div>
      </div>
    </main>
  );
}
