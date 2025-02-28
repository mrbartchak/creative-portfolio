import Image from "next/image";

interface ContactCardProps {
    imageSrc: string;
    altText: string;
    contact: string;
}

const ContactCard = ({ imageSrc, altText, contact }: ContactCardProps) => {
	return (
		<div className="flex justify-between items-center bg-none rounded-lg p-4 w-full shadow-[0_0_16px_rgba(0,0,0,0.2)] ">
            <Image src={imageSrc} alt={altText} className="h-12 lg:h-20 w-auto" width={32} height={32} />
            <div>
			    <p className="lg:text-xl text-foreground opacity-90">{contact}</p>
            </div>
		</div>
	);
}
export default ContactCard;