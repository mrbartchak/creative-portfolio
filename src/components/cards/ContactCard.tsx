import Image from "next/image";

interface ContactCardProps {
    link: string;
    imageSrc: string;
    altText: string;
    contact: string;
}

const ContactCard = ({link, imageSrc, altText, contact }: ContactCardProps) => {
	return (
        <a  href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
        >
            <div className="flex justify-between items-center bg-none rounded-lg p-4 w-full shadow-[0_0_16px_rgba(0,0,0,0.2)]
                            transition-transform duration-300 ease-in-out hover:scale-105">
                <Image src={imageSrc} alt={altText} className="h-12 lg:h-20 w-auto" width={32} height={32} />
                <div>
                    <p className="lg:text-xl text-foreground opacity-90">{contact}</p>
                </div>
            </div>
        </a>
	);
}
export default ContactCard;