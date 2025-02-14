import React from "react";

const Header = ({ setSearchTerm, setSelectedCategory }) => {
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Search for products..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
  );
};

export default Header;
