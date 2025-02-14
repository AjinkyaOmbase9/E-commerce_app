import React, { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      <div className="product-grid">
        {favorites.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
