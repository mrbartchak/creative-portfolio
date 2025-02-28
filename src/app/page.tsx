import { HeroCard, CurrentPositionCard, EducationCard, TechnicalSkillsCard } from "@/components/cards";

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center space-y-4">
      <HeroCard />
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full">
        <CurrentPositionCard />
        <EducationCard />
      </div>
      <TechnicalSkillsCard />
    </main>
  );
}
