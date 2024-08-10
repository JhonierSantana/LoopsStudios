import navLinks from "./navLinks";
import socialLinks from "./socialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-and-socials">
          <div className="logo">
            <h1>loopstudios</h1>
          </div>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href}>
                <img src={social.icon} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>
        <div className="nav-and-bottom">
          <div className="footer-nav">
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-bottom">
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
