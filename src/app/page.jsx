import ImageCoffe from "@/component/HeroSection/ImageCoffe";
import HeroSection from "@/component/HeroSection";
import AboutSection from "@/component/AboutSection";
import ProductSection from "@/component/ProductSection";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* Home Section */}
        <section id="home-id">
          <HeroSection />
        </section>

        {/* About Us Section */}
        <section id="about-id">
          <AboutSection />
        </section>

        {/* Product Section */}
        <section id="product-id">
          <ProductSection />
        </section>
      </div>
    </>
  );
}
