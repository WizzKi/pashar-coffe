import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    price: "Rp30,000",
    imageUrl: "/coffee-bag.jpg",
    colorCard: "#FAF0E6",
  },
  {
    id: 2,
    price: "Rp34,000",
    imageUrl: "/coffee-bag.jpg",
    colorCard: "#e4ab71",
  },
  {
    id: 3,
    price: "Rp40,000",
    imageUrl: "/coffee-bag.jpg",
    colorCard: "#c5b2a0",
  },
];

const ProductSection = () => {
  return (
    <div className="min-h-screen bg-white p-10 flex flex-col items-center">
      <header className="text-center mb-12">
        <p className="text-sm font-medium text-gray-500 tracking-widest">
          PRODUCT
        </p>
        <h1 className="text-4xl font-extrabold text-gray-800 mt-2">
          Explore the products
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </header>

      <div className="flex justify-center flex-wrap gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            price={product.price}
            imageUrl={product.imageUrl}
            colorCard={product.colorCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
