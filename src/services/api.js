// URL: https://fakestoreapi.com

// Fetch a single product by ID
export async function getProductById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API ERROR:", error);
    return null;
  }
}

// fetch all products
export async function getAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}
