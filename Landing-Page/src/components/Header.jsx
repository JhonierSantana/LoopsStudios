import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">loopstudios</h1>
      <nav className="header-nav">
        <div className="header-links">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
