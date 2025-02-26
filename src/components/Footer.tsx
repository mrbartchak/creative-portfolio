const Footer = () => {
  return (
    <footer className="text-foreground/ opacity-25 text-center p-4
                       lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
      <p className="text-sm">
        © {new Date().getFullYear()} Matthew Bartchak
      </p>
    </footer>
  );
};

export default Footer;
