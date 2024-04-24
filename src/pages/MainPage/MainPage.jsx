import Button from '../../components/Button/Button';
import styles from './MainPage.module.scss';
// import Slider from '../../components/Slider/Slider';

export default function MainPage() {

    return (
        <div className={styles.mainpage}>
            <h1 className={styles.mainpage__header}>hello everyone!</h1>
            <p className={styles.mainpage__text}>Let's start learning English!</p>
            {/* <div className={styles.mainpage__cards}>
                <Slider
                    words={selectedWords} />
            </div> */}
            <div className={styles.mainpage__additionalinfo}>
                <div className={styles.redirect__wordlist}>
                    <p>You can select words from a word list</p>
                    <Button text='go to the word list' />
                </div>
                <div className={styles.redirect__topics}>
                    <p>Or learn words by topic</p>
                    <Button text='go to the topics' />
                </div>
            </div>
        </div>
    )
}