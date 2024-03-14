import React from 'react';
import styles from './Header.module.scss';
import logo from '../../images/german.png'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.header__links}>
                <div className={styles.link}>word list</div>
                <div className={styles.link}>my words</div>
                <div className={styles.link}>topics</div>
            </div>
        </div>
    )
}