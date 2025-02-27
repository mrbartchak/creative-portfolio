import Image from "next/image";

export default function Resume() {
    return (
      <main className="flex flex-col min-h-screen items-center justify-start lg:justify-center">
        <Image src="/images/resume.png" alt="Resume" className="w-[100%] lg:w-[75%] h-auto rounded-xl shadow-xl" width={1700} height={2200} quality={100} />
      </main>
    );
  }