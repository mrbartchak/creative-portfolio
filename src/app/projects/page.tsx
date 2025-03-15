import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

/*
  <div className="text-4xl font-extrabold text-center mt-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer">
    🚀 Projects Coming Soon...
  </div>
*/

interface ProjectCardProps {
  title: string;
  description: string;
  content: string;
  footer: string;
  link: string;
  image: string;
}

export default function Projects() {
    return (
      <main className="overflow-y-auto h-[calc(100vh-11rem)] lg:h-[calc(100vh-8rem)] scrollbar-hidden">
        <div className="grid p-4 grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 ">
          <ProjectCard
            title="Bracket Wizard"
            description="March Madness Bracket Assistant"
            content="Bracket Wizard is a smart tournament bracket assistant
            designed to assist users in filling out March Madness brackets using
            probabilistic insights and Bart Torvik's T-score rankings.
            Built with Next.js and TypeScript, the project leverages
            Supabase Postgres for data storage, Tailwind CSS and shadcn/ui for styling,
            and Vercel for continuous intergration and deployment."
            footer="visit bracket wizard"
            link="https://bracket-wizard-mbartchaks-projects.vercel.app"
            image="/images/logos/bracket-wizard-logo.svg"
          />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </main>
    );
  }
  
function ProjectCard({ title, description, content, footer, link, image }: ProjectCardProps) {
  return (
      <Card className="hover:scale-105 transition-transform duration-500 ease-in-out">
        <CardHeader className="flex relative space-y-0">
          <div className="absolute top-0 right-0 mx-4 my-2 w-28 h-24">
            <Image
              src={image}
              alt={`${title} image`}
              width={64}
              height={64}
              className="object-cover w-full h-auto"
            />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="py-2 text-sm">
          <p>{content}</p>
        </CardContent>
        <CardFooter className="flex justify-end p-2">
          <Button asChild variant={"link"}>
            <Link href={link}>{footer}</Link>
          </Button>
        </CardFooter>
      </Card>
  )
}

function ProjectCardSkeleton() {
  return (
    <Card className="hover:scale-105 transition-transform duration-500 ease-in-out">
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