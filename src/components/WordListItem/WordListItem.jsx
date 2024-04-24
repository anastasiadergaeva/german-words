import React from 'react';
import styles from './WordListItem.module.scss';
import AddIcon from '@mui/icons-material/Add';

const WordListItem = ({ english, transcription, russian }) => {

    return (
        <tr>
            <td className={styles.item}>{english}</td>
            <td className={styles.item}>{transcription}</td>
            <td className={styles.item}>{russian}</td>
            <td className={styles.buttons} >
                <AddIcon />
            </td>
        </tr>
    )
}

export default WordListItem;