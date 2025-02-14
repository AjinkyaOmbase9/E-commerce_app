import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, handleFavorite }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleFavorite={handleFavorite}
        />
      ))}
    </div>
  );
};

export default ProductList;
