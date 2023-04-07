import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <h2 className="devmountainEatery">Devmountain Eatery</h2>
      <nav>
        <Link to="">
          <button className="Header-button">Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className="Header-button">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
