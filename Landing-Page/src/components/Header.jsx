import navLinks from "./navLinks";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">loopstudios</h1>
      <nav className="header-nav">
        <div className="header-links">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
