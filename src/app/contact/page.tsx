import { ContactCard } from "@/components/cards";

export default function Contact() {
    return (
      <main className="flex flex-col h-full items-center justify-center space-y-4">
        <ContactCard
          link="mailto:matthewbartchak@gmail.com"
          imageSrc="images/icons/gmail-icon.svg"
          altText="Email icon"
          contact="matthewbartchak@gmail.com"
        />
        <ContactCard
          link="https://www.linkedin.com/in/mbartchak001/"
          imageSrc="images/icons/linkedin-icon.svg"
          altText="Linkedin icon"
          contact="Linkedin"
        />
        <ContactCard
          link="https://github.com/mrbartchak"
          imageSrc="images/icons/github-icon.svg"
          altText="Github icon"
          contact="Github"
        />
      </main>
    );
  }
  