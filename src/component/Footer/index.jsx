const FooterSection = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Pashar
          Coffe Corporation
        </p>
      </aside>
    </footer>
  );
};

export default FooterSection;
