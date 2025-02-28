import { ContactCard } from "@/components/cards";

export default function Contact() {
    return (
      <main className="flex flex-col h-full items-center justify-center space-y-4 border border-red-500">
        <ContactCard 
          imageSrc="images/icons/gmail-icon.svg"
          altText="Email icon"
          contact="matthewbartchak@gmail.com"
        />
        <ContactCard 
          imageSrc="images/icons/linkedin-icon.svg"
          altText="Linkedin icon"
          contact="Linkedin"
        />
        <ContactCard 
          imageSrc="images/icons/github-icon.svg"
          altText="Github icon"
          contact="Github"
        />
      </main>
    );
  }
  