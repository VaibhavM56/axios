import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await axios.get("https://ty-shop.herokuapp.com/api/products");
    console.log(res.data.products);
    setProduct(res.data.products);
  };

  console.log(product);
  return (
    <div>
      {product.map((val) => {
        return <p>{val.productName}</p>;
      })}
    </div>
  );
}

export default Products;
