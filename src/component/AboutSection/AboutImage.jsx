import Image from "next/image";

const AboutImage = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/about-image.png"
        alt="About Image"
        width={800}
        height={800}
        className="absolute w-full h-full object-cover"
      />
    </div>
  );
};

export default AboutImage;
