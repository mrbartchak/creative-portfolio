import Image from "next/image";

export default function Resume() {
  return (
    <div className="h-[calc(100vh-11rem)] lg:h-[calc(100vh-8rem)] w-full overflow-auto p-4 scrollbar-hidden">
      <div className="flex flex-col items-center justify-start pb-8">
        <Image
          src="/images/resume.png"
          alt="Resume"
          className="w-[95%] h-auto rounded-xl shadow-xl"
          width={1700}
          height={2200}
          quality={100}
          priority
        />
      </div>
    </div>
  );
}