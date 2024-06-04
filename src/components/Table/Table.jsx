import { inject, observer } from 'mobx-react';
import WordListItem from '../WordListItem/WordListItem';
import styles from './Table.module.scss';
import { useEffect } from 'react';

function Table({ words }) {
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
                        id={word.id}
                        english={word.english}
                        transcription={word.transcription}
                        russian={word.russian}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default inject(({ wordStore }) => {
    const { words, loadData } = wordStore;

    useEffect(() => {
        loadData();
    }, []);

    return {
        words,
        loadData
    }
})(observer(Table));