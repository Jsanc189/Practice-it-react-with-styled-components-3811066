import React, { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  useEffect(()=> {
    fetch('https:/api.example/com/products')//fetches data from API address
    .then(response => response.json())//reads the response and returns a promise resolve (pending, fulfilled, rejected)
    .then(data => setProduct(data))//sets the data in setproduct variable to the data found in at the API address
    .catch(error=> console.error('Error fetching data', error))//catches errors
  },[]);

  if (!product) {
    return <p>Loading...</p>
  }

  return <div>
    <ProductImage imageURL={product.image} />
    <ProductInfo name={product.name} price={product.price} />
  </div>
};

export default ProductDetails;
