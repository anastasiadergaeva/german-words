import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './WordListItem.module.scss';

const WordListItem = ({ topic, german, transcription, english }) => {
    const [isEdited, setIsEdited] = useState(false);

    // const [valueGerman, setValueGerman] = useState(german);
    // const [valueTranscription, setValueTranscription] = useState(transcription);
    // const [valueEnglish, setValueEnglish] = useState(english);

    const [value, setValue] = useState({
        valueGerman: german,
        valueTranscription: transcription,
        valueEnglish: english
    });

    function handleEdit(event) {
        switch (event.target.innerText) {
            case 'edit':
                return setIsEdited(true);
            case 'save':
                return setIsEdited(false);
            case 'delete':
                console.log('кнопка удалить пока не рабочая!!!');
                break;
            default: console.log('не пон');
        }
    }

    // function getValue(event, key) {
    //     setValue({
    //         ...value,
    //         [key]: event.target.value
    //     })
    // }

    function getValueGerman(event) {
        setValue({
            ...value, valueGerman: event.target.value
        });
    }

    function getValueTranscription(event) {
        setValue({
            ...value, valueTranscription: event.target.value
        });
    }

    function getValueEnglish(event) {
        setValue({
            ...value, valueEnglish: event.target.value
        });
    }

    return (
        <tr onClick={handleEdit}>
            <td className={styles.item}>{topic}</td>
            {isEdited ? (
                <td className={styles.item}>
                    <input type="text" className={styles.input} onChange={getValueGerman} value={value.valueGerman} />
                </td>
            ) : (
                <td className={styles.item}>{value.valueGerman}</td>
            )}
            {isEdited ? (
                <td className={styles.item}>
                    <input type="text" className={styles.input} onChange={getValueTranscription} value={value.valueTranscription} />
                </td>
            ) : (
                <td className={styles.item}>{value.valueTranscription}</td>
            )}

            {
                isEdited ? (
                    <td className={styles.item}>
                        <input type="text" className={styles.input} onChange={getValueEnglish} value={value.valueEnglish} />
                    </td>
                ) : (
                    <td className={styles.item}>{value.valueEnglish}</td>
                )
            }
            <td className={styles.buttons}>
                {
                    isEdited ? (
                        <Button text='save' />
                    ) : (
                        <Button text='edit' />
                    )
                }
                <Button text='delete' />
            </td>
        </tr>
    )
}

export default WordListItem;