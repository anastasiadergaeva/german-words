import { DataContext } from '../../context/DataContext';
import { useContext } from 'react';
import WordListItem from '../WordListItem/WordListItem';
import styles from './Table.module.scss';

export default function Table() {
    const { words } = useContext(DataContext);
    return (
        <table className={styles.table}>
            <thead className={styles.table__head}>
                <tr className={styles.heads}>
                    <th className={styles.head}>english</th>
                    <th className={styles.head}>transcription</th>
                    <th className={styles.head}>russian</th>
                </tr>
            </thead>
            <tbody className={styles.table__body}>
                {words.map(word => (
                    <WordListItem
                        key={word.id}
                        english={word.english}
                        transcription={word.transcription}
                        russian={word.russian}
                    />
                ))}
            </tbody>
        </table>
    )
}