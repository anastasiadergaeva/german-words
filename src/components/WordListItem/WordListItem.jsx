import React, { useState } from 'react';
import Button from '../Button/Button';
import './WordListItem.module.scss';

const WordListItem = ({ topic, german, transcription, english }) => {
    const [isEdited, setIsEdited] = useState(false);
    const [valueGerman, setValueGerman] = useState(german);
    const [valueTranscription, setValueTranscription] = useState(transcription);
    const [valueEnglish, setValueEnglish] = useState(english);

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

    function getValueGerman(event) {
        const newValue = event.target.value;
        setValueGerman(newValue);
    }

    function getValueTranscription(event) {
        const newValue = event.target.value;
        setValueTranscription(newValue);
    }

    function getValueEnglish(event) {
        const newValue = event.target.value;
        setValueEnglish(newValue);
    }

    return (
        <tr onClick={handleEdit}>
            <td className='item'>{topic}</td>
            {isEdited ? (
                <td className='item'>
                    <input type="text" className='input' onChange={getValueGerman} value={valueGerman} />
                </td>
            ) : (
                <td className='item'>{valueGerman}</td>
            )}
            {isEdited ? (
                <td className='item'>
                    <input type="text" className='input' onChange={getValueTranscription} value={valueTranscription} />
                </td>
            ) : (
                <td className='item'>{valueTranscription}</td>
            )}

            {
                isEdited ? (
                    <td className='item'>
                        <input type="text" className='input' onChange={getValueEnglish} value={valueEnglish} />
                    </td>
                ) : (
                    <td className='item'>{valueEnglish}</td>
                )
            }
            <td className='buttons'>
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