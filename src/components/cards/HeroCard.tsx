import Link from "next/link";

const HeroCard = () => {
	return (
        <div className="bg-none shadow-[0_0_16px_rgba(0,0,0,0.2)] rounded-lg p-6 w-full">
            <h1 className="text-xl lg:text-2xl font-bold mb-4">Hi, I&apos;m Matt Bartchak 👋🏼</h1>
            <p className="text-sm text-foreground opacity-70 mb-4">
                I&apos;m a Computer Science & Business graduate from Lehigh University, 
                currently based in New York City. I work as an IT Analyst at SMBC, 
                specializing in API gateway management and backend API development.
            </p>
            <Link href="/contact" className="inline-block bg-foreground text-background rounded-lg px-4 py-2 mt-2 hover:bg-gray-200 transition text-sm">
                Connect with me!
            </Link>
        </div>
	);
}
export default HeroCard;