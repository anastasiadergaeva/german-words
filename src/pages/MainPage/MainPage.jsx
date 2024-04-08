import Button from '../../components/Button/Button';
import data from '../../data/words.json';
import styles from './MainPage.module.scss';
import Slider from '../../components/Slider/Slider';

export default function MainPage() {
    const dataWords = data.map(topic => (topic.words));
    const selectedWords = [];
    dataWords.forEach(elem => {
        const selected21 = elem.find(item => item.id === 21);
        const selected22 = elem.find(item => item.id === 22);
        if (selected21 && selected22) {
            selectedWords.push(selected21);
            selectedWords.push(selected22);
        }
    });

    return (
        <div className={styles.mainpage}>
            <h1 className={styles.mainpage__header}>hello everyone!</h1>
            <p className={styles.mainpage__text}>Let's start learning German! Say Hello first!</p>
            <div className={styles.mainpage__cards}>
                <Slider
                    words={selectedWords} />
            </div>
            <div className={styles.mainpage__additionalinfo}>
                <div className={styles.redirect__wordlist}>
                    <p>You can also select words from a word list</p>
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