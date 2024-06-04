import Button from '../../components/Button/Button';
import styles from './MainPage.module.scss';
import { Link } from 'react-router-dom';

export default function MainPage() {

    return (
        <div className={styles.mainpage}>
            <h1 className={styles.mainpage__header}>hello everyone!</h1>
            <p className={styles.mainpage__text}>Let's start learning English!</p>
            <div className={styles.mainpage__additionalinfo}>
                <div className={styles.redirect__wordlist}>
                    <p>You can select words from a word list</p>
                    <Link to='/wordlist'>
                        <Button text='go to the word list' />
                    </Link>
                </div>
            </div>
        </div>
    )
}