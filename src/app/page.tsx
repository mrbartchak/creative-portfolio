export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {/* Hero Section */}
      <div className="bg-background shadow-[0_0_32px_rgba(0,0,0,0.2)] rounded-lg p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Hello, I'm Matthew Bartchak</h1>
        <p className="text-lg text-gray-700 mb-4">
          I'm a passionate developer based in New York, specializing in building
          web applications that provide seamless user experiences. Welcome to my portfolio!
        </p>
        <a href="/projects" className="inline-block bg-foreground text-background rounded-lg px-4 py-2 hover:bg-gray-200 transition">
          View My Projects
        </a>
      </div>
    </main>
  );
}
