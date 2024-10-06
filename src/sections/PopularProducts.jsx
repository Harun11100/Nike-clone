import ProductsCard from "../Components/ProductsCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-montserrat text-2xl font-bold py-5">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray font-montserrat leading-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In repellat voluptates aspernatur rem quasi enim quo,
          <br /> suscipit itaque tempora ipsam! Lorem ipsum dolor sit.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-12 gap-14 sm:gap-6 justify-items-center">
        {products.map((product) => (
          <ProductsCard key={product.name} items={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
