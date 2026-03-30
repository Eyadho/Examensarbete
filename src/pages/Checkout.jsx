import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  // get data from Cart
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  // Form
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Tracks whether the order has been placed
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Form changing
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // checking the required fields
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all fields");
      return;
    }

    // successful order --> confirmation and clear the cart
    setOrderPlaced(true);
    clearCart();
  };

  // confirmation
  if (orderPlaced) {
    return (
      <div className="text-center mt-5">
        <h2> Order placed successfully!</h2>
        <p>Thank you for your purchase.</p>

        <a href="/" className="btn btn-primary mt-3">
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      {/* If cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* Price*/}
          <h4 className="mb-4">Total: ${totalPrice.toFixed(2)}</h4>

          {/* Details form*/}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Address</label>
              <textarea
                name="address"
                className="form-control"
                value={form.address}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;
