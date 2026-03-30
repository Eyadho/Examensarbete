import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MyShop
        </Link>

        <div className="ml-auto">
          <Link className="btn btn-outline-light me-3" to="/">
            Home
          </Link>
          <Link to="/cart" className="btn btn-outline-light">
            Cart
            <span className="badge bg-light text-dark ms-2">{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
