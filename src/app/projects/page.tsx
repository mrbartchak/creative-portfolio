import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

/*
  <div className="text-4xl font-extrabold text-center mt-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer">
    🚀 Projects Coming Soon...
  </div>
*/

interface ProjectCardProps {
  title: string;
  description: string;
  content: string;
  link: string;
}

export default function Projects() {
    return (
      <main className="grid p-4 grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <ProjectCard
          title="Bracket Wizard"
          description="March Madness Bracket Assistant"
          content="A Next.js-powered web app, styled with Tailwind and shadcn/ui,
          delivering NCAA basketball bracket analysis driven by BartTorvik's T-score data."
          link="https://bracket-wizard-mbartchaks-projects.vercel.app"
        />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </main>
    );
  }
  
function ProjectCard({ title, description, content, link }: ProjectCardProps) {
  return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
          <Link href={link}>Link</Link>
        </CardContent>
      </Card>
  )
}

function ProjectCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-1/4 h-3" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-32" />
      </CardContent>
    </Card>
  )
}