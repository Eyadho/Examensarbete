import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  // Fetch the products
  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

  // Show loading spinner
  if (!products || products.length === 0) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border"></div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="bg-dark text-white p-5 mb-4 rounded text-center">
        <h1>Welcome to My Store</h1>
        <p>Find the best products easily and quickly</p>
      </div>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
