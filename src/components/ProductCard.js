import React from "react";

const ProductCard = ({ product, handleFavorite }) => {
  return (
    <div className="product-card">
      <img className="product-img" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <button
        className="favorite-btn"
        onClick={() => handleFavorite(product.id)}
      >
        {product.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default ProductCard;
