import { DataContext } from '../../context/DataContext';
import { useContext } from 'react';
import WordListItem from '../WordListItem/WordListItem';
import styles from './Table.module.scss';

export default function Table() {
    const { words, topics } = useContext(DataContext);
    return (
        <table className={styles.table}>
            <thead className={styles.table__head}>
                <tr className={styles.heads}>
                    <th className={styles.head}>topic</th>
                    <th className={styles.head}>german</th>
                    <th className={styles.head}>transcription</th>
                    <th className={styles.head}>english</th>
                </tr>
            </thead>
            <tbody className={styles.table__body}>
                {words.map(word => (
                    <WordListItem
                        key={word.id}
                        topic={topics.topic}
                        german={word.german}
                        transcription={word.transcription}
                        english={word.english}
                    />
                ))}
            </tbody>
        </table>
    )
}