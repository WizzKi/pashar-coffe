import Image from "next/image";

const ImageCoffe = () => {
  return (
    <>
      <Image
        src="/coffee-bag.jpg"
        alt="Coffee bag left"
        width={250}
        height={250}
        className="bottom-10 -left-25 rotate-30 absolute brightness-85 select-none pointer-events-none z-0"
      />
      <Image
        src="/coffee-bag.jpg"
        alt="Coffee bag center"
        width={300}
        height={300}
        className="-bottom-10 -right-20 sm:-bottom-15 sm:right-120 absolute brightness-85 select-none pointer-events-none z-0"
      />
      <Image
        src="/coffee-bag.jpg"
        alt="Coffee bag right"
        width={250}
        height={250}
        className="-right-20 bottom-110 -rotate-30 absolute brightness-85 select-none pointer-events-none z-0"
      />
    </>
  );
};

export default ImageCoffe;
