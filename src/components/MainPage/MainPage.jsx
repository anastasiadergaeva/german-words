import Button from '../Button/Button';
import WordListItem from '../WordListItem/WordListItem';
import styles from './MainPage.module.scss';
export default function MainPage() {
    return (
        <div className={styles.mainpage}>
            <h1 className={styles.mainpage__header}>hello everyone!</h1>
            <p className={styles.mainpage__text}>Let's start learning German! Say Hello first!</p>
            <div className={styles.mainpage__rows}>
                <WordListItem
                    german='hallo'
                    transcription='[ˈhalo:]'
                    english='hello'
                />
                <WordListItem
                    german='zusammen'
                    transcription='[tsuˈzamən]'
                    english='everyone'
                />
            </div>
            <div>
                <Button text='learn now' />
            </div>
            <div className={styles.additionalinfo}>
                <div>
                    <p>You can also select words from a word list</p>
                    <Button text='go to the word list' />
                </div>
                <div>
                    <p>Or learn words by topic</p>
                    <Button text='go to the topics' />
                </div>
            </div>
        </div>
    )
}