import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../images/german.png'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <Link to='/'>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </Link>
            </div>
            <div className={styles.header__links}>
                <div className={styles.link}>
                    <Link to='/wordlist' className={styles.objlink}>word list</Link>
                </div>
                <div className={styles.link}>
                    <Link to='/train' className={styles.objlink}>train mode</Link>
                </div>
                <div className={styles.link}>
                    <Link to='/topics' className={styles.objlink}>topics</Link>
                </div>
            </div>
        </div>
    )
}