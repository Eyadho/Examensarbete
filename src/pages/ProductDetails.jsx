import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  // Get id from URL
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  // Confirmation message
  const [added, setAdded] = useState(false);

  // Fetch data based on id
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  // Show data
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src={product.image}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        <div className="col-12 col-md-6">
          <h2 style={{ fontSize: "20px" }}>{product.title}</h2>
          <h4 className="text-primary" style={{ fontSize: "18px" }}>
            ${product.price}
          </h4>
          <p style={{ fontSize: "14px" }}>{product.description}</p>

          <button
            className="btn btn-success"
            style={{ transition: "0.3s" }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
            onClick={() => {
              addToCart(product);
              setAdded(true);
            }}
          >
            Add to Cart
          </button>
          {added && <p className="text-success mt-2">Added to cart!</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
