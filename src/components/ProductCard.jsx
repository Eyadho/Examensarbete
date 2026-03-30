import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 mt-4 mb-4">
      {" "}
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {/* Hover */}
        <div
          className="card h-100 shadow-sm"
          style={{ transition: "0.3s", cursor: "pointer" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src={product.image}
            className="card-img-top p-3"
            style={{ height: "200px", objectFit: "contain" }}
          />

          <div className="card-body">
            <h5 style={{ fontSize: "14px" }}>
              {product.title.substring(0, 40)}...
            </h5>
            <p>${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
