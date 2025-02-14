import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Header from "../components/Header";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Load products (you can replace this with real data)
  useEffect(() => {
    const initialProducts = [
      {
        id: 1,
        name: "LED Screen",
        category: "Electronics",
        image:
          "https://media.istockphoto.com/id/507566164/photo/woman-buys-the-tv.jpg?s=1024x1024&w=is&k=20&c=8CYKgxjtp6TYZmeTwIFGunC9z5I5vAREs6m6yya1rJs=",
        isFavorite: false,
      },
      {
        id: 2,
        name: "Shirts",
        category: "Clothing",
        image:
          "https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_1280.jpg",
        isFavorite: false,
      },
      {
        id: 3,
        name: "Specs",
        category: "Accessories",
        image:
          "https://cdn.pixabay.com/photo/2020/08/14/07/52/glasses-5487157_1280.jpg",
        isFavorite: false,
      },
      {
        id: 4,
        name: "Wallet",
        category: "Electronics",
        image:
          "https://cdn.pixabay.com/photo/2020/03/28/13/26/wallet-4977020_1280.jpg",
        isFavorite: false,
      },
      {
        id: 5,
        name: "T-Shirts",
        category: "Clothing",
        image:
          "https://media.istockphoto.com/id/1345934516/photo/natural-organic-cotton-t-shirts-and-cotton-plant-flowers-on-white-table-eco-clothes-fashion.jpg?s=1024x1024&w=is&k=20&c=SKTUSGLwh596drzXzHhuuRPKhIp6Q4dQeeszDP-BSzc=",
        isFavorite: false,
      },
      {
        id: 6,
        name: "Watch",
        category: "Accessories",
        image:
          "https://cdn.pixabay.com/photo/2022/07/04/13/37/watch-7301231_1280.jpg",
        isFavorite: false,
      },
      {
        id: 7,
        name: "Goggles",
        category: "Accessories",
        image:
          "https://cdn.pixabay.com/photo/2020/11/08/10/02/sunglasses-5723268_1280.jpg",
        isFavorite: false,
      },
      {
        id: 8,
        name: "Suit",
        category: "Clothing",
        image:
          "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg",
        isFavorite: false,
      },
      {
        id: 9,
        name: "Mobile",
        category: "Electronics",
        image:
          "https://cdn.pixabay.com/photo/2019/12/27/01/46/samsung-4721541_1280.jpg",
        isFavorite: false,
      },
    ];
    setProducts(initialProducts);
  }, []);

  // Handle search and category filtering
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || product.category === selectedCategory)
  );

  // Handle adding/removing from favorites
  const handleFavorite = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, isFavorite: !product.isFavorite }
        : product
    );
    setProducts(updatedProducts);

    // Store favorites in localStorage
    const favoriteProducts = updatedProducts.filter(
      (product) => product.isFavorite
    );
    localStorage.setItem("favorites", JSON.stringify(favoriteProducts));
  };

  return (
    <div>
      <Header
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList
        products={filteredProducts}
        handleFavorite={handleFavorite}
      />
    </div>
  );
};

export default HomePage;
