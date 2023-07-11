import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import nav from '../assets/nav_icon.svg';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    function switch_menu() {
        setShowMenu(!showMenu);
    }

    return (
    <div className={styles.navBar}>
        
        <img
                alt=""
                src={nav}
                className={`${styles.menuSwitch}`} onClick={switch_menu}
        />
        <div className={`${styles.navContainer} ${showMenu ? styles.show : styles.hide}`}>
          <div className={styles.menuItems}>
            <Link className={styles.link} to='/stemcast'>ABOUT</Link>
            <div className={styles.frameChild} />
            <Link className={styles.link} to='/stemcast/episodes'>EPISODES</Link>
            <div className={styles.frameChild} />
            <Link className={styles.link} to='/stemcast/team'>TEAM</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default NavBar;