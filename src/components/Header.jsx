import React, { useState } from "react";
import styles from "./InputDesign.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.logo}>Viu Gaming.</h1>

      <nav className={styles.navMenu}>
        <a href="#home" className={styles.activeNavLink}>
          Home
        </a>
        <a href="#about" className={styles.navLink}>
          About
        </a>
        <a href="#services" className={styles.navLink2}>
          Services
        </a>
        <a href="#contact" className={styles.navLink3}>
          Contact
        </a>
      </nav>

      <button
        className={styles.mobileMenuButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={faBars} style={{ width: '24px', height: '24px' }} />
      </button>

      {isMenuOpen && (
        <nav className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <h2>Menu</h2>
            <button
              className={styles.closeButton}
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faXmark} style={{ width: '24px', height: '24px' }} />
            </button>
          </div>
          <div className={styles.mobileMenuLinks}>
            <a href="#home" className={styles.mobileActiveLink}>
              Home
            </a>
            <a href="#about" className={styles.mobileNavLink}>
              About
            </a>
            <a href="#services" className={styles.mobileNavLink2}>
              Services
            </a>
            <a href="#contact" className={styles.mobileNavLink3}>
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
