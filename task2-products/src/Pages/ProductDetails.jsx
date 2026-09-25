import products from "../Data/product";

import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();

  const product = products.find((item) => item.id == Number(productId));

//   console.log("productId:", productId);
//   console.log("products:", products);
//   console.log("product:", product);

  if (!product) {
    return (
      <>
        <h1>Product not found</h1>
        <Link to="/products">← Back to products</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/products">← Back to products</Link>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <strong>₹{product.price}</strong>
    </>
  );
}
