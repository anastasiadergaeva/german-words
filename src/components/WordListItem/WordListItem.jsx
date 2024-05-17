import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../Button/Button';
import styles from './WordListItem.module.scss';

const WordListItem = ({ id, english, transcription, russian, deleteWord, updateData }) => {
    const [isEdited, setIsEdited] = useState(false);

    const [value, setValue] = useState({
        id: id,
        english: english,
        transcription: transcription,
        russian: russian
    });

    function handleEdit(event) {
        switch (event.target.innerText) {
            case 'edit':
                return setIsEdited(true);
            case 'save':
                updateData(value);
                return setIsEdited(false);
            case 'delete':
                deleteWord(id);
                break;
            default: console.log('не пон');
        }
    }

    function getValueEnglish(event) {
        setValue({
            ...value, english: event.target.value
        });
    }

    function getValueTranscription(event) {
        setValue({
            ...value, transcription: event.target.value
        });
    }

    function getValueRussian(event) {
        setValue({
            ...value, russian: event.target.value
        });
    }

    return (
        <tr>
            {isEdited ? (
                <td className={styles.item}>
                    <input type="text" className={styles.input} onChange={getValueEnglish} value={value.english} />
                </td>
            ) : (
                <td className={styles.item}>{value.english}</td>
            )}
            {isEdited ? (
                <td className={styles.item}>
                    <input type="text" className={styles.input} onChange={getValueTranscription} value={value.transcription} />
                </td>
            ) : (
                <td className={styles.item}>{value.transcription}</td>
            )}

            {
                isEdited ? (
                    <td className={styles.item}>
                        <input type="text" className={styles.input} onChange={getValueRussian} value={value.russian} />
                    </td>
                ) : (
                    <td className={styles.item}>{value.russian}</td>
                )
            }
            <td className={styles.buttons}>
                {
                    isEdited ? (
                        <Button text='save' onClick={handleEdit} />
                    ) : (
                        <Button text='edit' onClick={handleEdit} />
                    )
                }

                <Button text='delete' onClick={handleEdit} />

            </td>
        </tr>
    )
}

export default inject(({ wordStore }) => {
    const { updateData, deleteWord } = wordStore;

    return {
        updateData,
        deleteWord,
    };
})(observer(WordListItem));