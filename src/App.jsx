import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    {/* Navbar is rendered on every page */}
      <Navbar />

      {/* Pages */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </>
  )
}

export default App