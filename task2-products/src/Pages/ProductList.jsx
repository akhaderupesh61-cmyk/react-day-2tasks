import products from "../Data/product";

import {Link} from "react-router-dom";

export default function ProductList() {
  return (
    <>
      <h1>Products</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>₹{item.price}</p>
         <Link to={"/products/" + item.id}>View Details</Link>
        </div>
      ))}
    </>
  );
}
