import hearts from '../../images/hearts.png';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__thanks}>
                <div className={styles.image}>
                    <img className={styles.image__item} src={hearts} alt="hearts" />
                </div>
                <p className={styles.thankstext}>thank you for using my app</p>
            </div>
            <div className={styles.footer__link}>
                <p className={styles.describinglink}>my github</p>
                <div className={styles.link}></div>
            </div>
        </footer>
    )
}