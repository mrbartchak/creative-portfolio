const Footer = () => {
  return (
    <footer className=" text-foreground/ opacity-25 text-center p-4 absolute bottom-0 left-0 right-0">
      <p className="text-sm">
        © {new Date().getFullYear()} Matthew Bartchak
      </p>
    </footer>
  );
};

export default Footer;
