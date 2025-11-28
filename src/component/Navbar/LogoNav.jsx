import Image from "next/image";

const LogoNav = () => {
  return (
    <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white">
      <Image
        src="/logo.jpg"
        width={120}
        height={120}
        alt="Pashar Coffee Logo"
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
};

export default LogoNav;
