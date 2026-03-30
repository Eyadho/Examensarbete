import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

// all data come from CartContext
function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="text-center mt-5">
          <h4>Your cart is empty</h4>

          <Link to="/" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart item grid */}
          <div className="row">
            {cart.map((item, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card p-3">
                  <img
                    src={item.image}
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                  <h5>{item.title}</h5>
                  <p>${item.price}</p>

                  {/* Remove btn */}
                  <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <h4 className="mt-3">Total: ${totalPrice.toFixed(2)}</h4>
          <Link to="/checkout" className="btn btn-success mt-3">
            Go to Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
