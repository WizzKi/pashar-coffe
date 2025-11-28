import { styleList } from "@/libs/styles";
import Link from "next/link";

const ListNav = () => {
  return (
    <div>
      <ul className="hidden md:flex justify-center gap-6 text-white font-semibold">
        <li>
          <Link href="#" className={styleList}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#about-id" className={styleList}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="#product-id" className={styleList}>
            Product
          </Link>
        </li>
        <li>
          <Link href="#" className={styleList}>
            The Process
          </Link>
        </li>
        <li>
          <Link href="#" className={styleList}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListNav;
