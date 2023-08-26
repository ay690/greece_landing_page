import React,{ useState } from "react";
import styles from "./Navbar.module.css";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.navigation} container`}>
      <div className="logo">
        <a href="#">#LIVEINGREECE</a>
      </div>
     
      <div className={`${styles.menuIcon}`} onClick={toggleMenu}>
        <CiMenuBurger />
      </div>

      {/* <ul className={styles.li1}>
        <li>For</li>
        <li>TALENTS</li>
        <li>ENTREPRENEURS</li>
        <li>INVESTORS</li>
      </ul>

      <ul className={styles.li2}>
        <li>Initiatives</li>
        <li>Q&A</li>
      </ul> */}

      <ul className={`${styles.menuItems} ${menuOpen ? styles.open : ""}`}>
        <li>For</li>
        <li>TALENTS</li>
        <li>ENTREPRENEURS</li>
        <li className={styles.withGap} >INVESTORS</li>
        <li>Initiatives</li>
        <li>Q&A</li>
      </ul>
    </div>
  );
};

export default Navbar;
