import React from 'react';
import styles from './Navigation.module.css';
const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <div >
                <img src='/images/logo.png' className={styles.navigation.logo} alt=' logo' />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>services</li>
                <li>Contact</li>
            </ul>

        </nav>
    )
}

export default Navbar;